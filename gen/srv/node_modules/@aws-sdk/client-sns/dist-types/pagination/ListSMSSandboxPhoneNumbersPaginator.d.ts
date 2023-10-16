import { Paginator } from "@smithy/types";
import { ListSMSSandboxPhoneNumbersCommandInput, ListSMSSandboxPhoneNumbersCommandOutput } from "../commands/ListSMSSandboxPhoneNumbersCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListSMSSandboxPhoneNumbers(config: SNSPaginationConfiguration, input: ListSMSSandboxPhoneNumbersCommandInput, ...additionalArguments: any): Paginator<ListSMSSandboxPhoneNumbersCommandOutput>;
