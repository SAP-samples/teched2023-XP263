import { Paginator } from "@smithy/types";
import { ListPhoneNumbersOptedOutCommandInput, ListPhoneNumbersOptedOutCommandOutput } from "../commands/ListPhoneNumbersOptedOutCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListPhoneNumbersOptedOut(config: SNSPaginationConfiguration, input: ListPhoneNumbersOptedOutCommandInput, ...additionalArguments: any): Paginator<ListPhoneNumbersOptedOutCommandOutput>;
