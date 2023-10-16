import { ListSMSSandboxPhoneNumbersCommand, } from "../commands/ListSMSSandboxPhoneNumbersCommand";
import { SNSClient } from "../SNSClient";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListSMSSandboxPhoneNumbersCommand(input), ...args);
};
export async function* paginateListSMSSandboxPhoneNumbers(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SNSClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SNS | SNSClient");
        }
        yield page;
        const prevToken = token;
        token = page.NextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
