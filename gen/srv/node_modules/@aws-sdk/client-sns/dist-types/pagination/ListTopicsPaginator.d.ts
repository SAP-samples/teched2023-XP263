import { Paginator } from "@smithy/types";
import { ListTopicsCommandInput, ListTopicsCommandOutput } from "../commands/ListTopicsCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListTopics(config: SNSPaginationConfiguration, input: ListTopicsCommandInput, ...additionalArguments: any): Paginator<ListTopicsCommandOutput>;
