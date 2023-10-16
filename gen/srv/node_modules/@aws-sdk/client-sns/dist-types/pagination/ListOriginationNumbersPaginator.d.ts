import { Paginator } from "@smithy/types";
import { ListOriginationNumbersCommandInput, ListOriginationNumbersCommandOutput } from "../commands/ListOriginationNumbersCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListOriginationNumbers(config: SNSPaginationConfiguration, input: ListOriginationNumbersCommandInput, ...additionalArguments: any): Paginator<ListOriginationNumbersCommandOutput>;
