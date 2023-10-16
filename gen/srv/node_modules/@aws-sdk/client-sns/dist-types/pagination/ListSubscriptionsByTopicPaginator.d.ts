import { Paginator } from "@smithy/types";
import { ListSubscriptionsByTopicCommandInput, ListSubscriptionsByTopicCommandOutput } from "../commands/ListSubscriptionsByTopicCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListSubscriptionsByTopic(config: SNSPaginationConfiguration, input: ListSubscriptionsByTopicCommandInput, ...additionalArguments: any): Paginator<ListSubscriptionsByTopicCommandOutput>;
