import { useContext, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, List, Surface, useTheme, Snackbar } from "react-native-paper";

import { HabitCategories as IHabitCategory, Habits as IHabit, IHabitSummary } from "../../../types/entities";
import { AccountContext } from "../../../context/AccountContext";
import { askForHabitRecommendationQuery } from "../../../queries";
import HabitItem from "./HabitItem";
import CircleIcon from "../../../components/CircleIcon";

export const FEEDBACK: { [key: string]: string } = Object.freeze({
    success: "Habit was saved successfully",
    error: "Something went wrong. Please try again later."
});

const Questionnaire = ({
    habitCategory,
    setRecommendation,
    setGptError,
    setShowModal
}: {
    habitCategory: IHabitCategory;
    setRecommendation: (recommendation: { title: string; description: string; content: string }) => void;
    setGptError: (gptError: boolean) => void;
    setShowModal: (showModal: boolean) => void;
}) => {
    const theme = useTheme();
    const { state, setHabit, fetchAccountData } = useContext(AccountContext);
    const [checkedHabit, setCheckedHabit] = useState<string>("");
    const [hasChanges, setHasChanges] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showFeedback, setShowFeedback] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setCheckedHabit(getInitialHabit()?.ID || "");
    }, []);

    // used to preselect habit if it was set previously
    const getInitialHabit = (): IHabit | undefined => {
        let accountHabit;
        if (state.habits) {
            accountHabit = state.habits.find(
                (ah) => ah.habit?.habitCategory_ID === habitCategory.ID && ah.transaction_ID === null
            );
        }
        return accountHabit?.habit || habitCategory.options?.find((o: IHabit) => o.default);
    };

    const concatMCCDescriptions = () => {
        let s = "They will impact the CO\u2082 score of expenses that fall under the following: ";
        habitCategory.mccs
            .map((current) => current.mcc)
            .filter((mcc) => !!mcc) // mcc might be null
            .forEach((mcc, index: number) => {
                s += index > 0 ? ", " + mcc?.description : mcc?.description;
            });
        return s;
    };

    const askForHabitRecommendation = async () => {
        setIsLoading(true);
        const habitSummaries: Array<IHabitSummary> =
            habitCategory.options?.map((habit: IHabit) => ({
                option: habit.option,
                context: habit.additionalInformation,
                factor: habit.factor
            })) || [];
        const query = askForHabitRecommendationQuery(
            habitCategory.question,
            getInitialHabit()?.option || "average",
            habitSummaries
        );
        const response = await fetch(query);
        if (response.ok) {
            const recommendation = await response.json();
            const recommendationTrimmed = recommendation.text.replace(/^\s+|\s+$/g, "");
            setRecommendation({
                title: `Insights about ${habitCategory.category}`,
                description: `The following summary is generated by GPT-3.5 giving recommendations and a step by step guide on how to change your habits to reduce your CO\u2082 emissions`,
                content: recommendationTrimmed
            });
            setShowModal(true);
        } else {
            setShowModal(false);
            setGptError(true);
        }
        setIsLoading(false);
    };

    return (
        <Surface elevation={1} style={[{ borderRadius: theme.roundness }, styles.surface]}>
            <List.Accordion
                title={habitCategory.category}
                titleStyle={{ color: "#000" }}
                description="1 question"
                style={{ backgroundColor: theme.colors.elevation.level1 }}
                left={(props) => <CircleIcon {...props} icon={habitCategory.icon} />}
            >
                <View style={{ paddingLeft: 0 }}>
                    <Text variant="titleMedium" style={{ marginTop: 10 }}>
                        {habitCategory.question}
                    </Text>
                    <Text variant="bodyMedium" style={{ marginTop: 4 }}>
                        {concatMCCDescriptions()}
                    </Text>
                    <Text variant="bodyMedium" style={{ marginTop: 4 }}>
                        {habitCategory.additionalInformation}
                    </Text>
                    <View style={{ alignItems: "flex-start", marginTop: 8 }}>
                        <Button compact loading={isLoading} disabled={isLoading} onPress={askForHabitRecommendation}>
                            Get more Insights by GPT
                        </Button>
                    </View>
                    <View style={{ marginTop: 18 }}>
                        {habitCategory.options?.map((habit) => (
                            <HabitItem
                                habit={habit}
                                isChecked={habit.ID === checkedHabit}
                                setCheckedHabit={(habitID: string) => {
                                    setCheckedHabit(habitID);
                                    setHasChanges(true);
                                }}
                                key={habit.ID}
                            />
                        ))}
                    </View>
                    <Button
                        disabled={!hasChanges}
                        loading={isLoading}
                        mode="text"
                        onPress={async () => {
                            setIsLoading(true);
                            const response = await setHabit(habitCategory.ID, checkedHabit);
                            if (response.ok) {
                                setHasChanges(false);
                                await fetchAccountData().catch(console.log);
                            } else {
                                setError(true);
                            }
                            setIsLoading(false);
                            setShowFeedback(true);
                        }}
                        style={{ marginTop: 20 }}
                    >
                        Save habit
                    </Button>
                </View>
            </List.Accordion>
            <Snackbar
                onDismiss={() => {
                    setError(false);
                    setShowFeedback(false);
                }}
                duration={3000}
                visible={showFeedback}
            >
                {error ? FEEDBACK["error"] : FEEDBACK["success"]}
            </Snackbar>
        </Surface>
    );
};

export default Questionnaire;

const styles = StyleSheet.create({
    surface: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8,
        marginHorizontal: 4
    }
});
