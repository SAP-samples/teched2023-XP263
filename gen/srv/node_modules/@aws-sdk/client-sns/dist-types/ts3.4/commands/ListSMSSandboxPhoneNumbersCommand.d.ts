import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListSMSSandboxPhoneNumbersInput,
  ListSMSSandboxPhoneNumbersResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface ListSMSSandboxPhoneNumbersCommandInput
  extends ListSMSSandboxPhoneNumbersInput {}
export interface ListSMSSandboxPhoneNumbersCommandOutput
  extends ListSMSSandboxPhoneNumbersResult,
    __MetadataBearer {}
export declare class ListSMSSandboxPhoneNumbersCommand extends $Command<
  ListSMSSandboxPhoneNumbersCommandInput,
  ListSMSSandboxPhoneNumbersCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: ListSMSSandboxPhoneNumbersCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListSMSSandboxPhoneNumbersCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListSMSSandboxPhoneNumbersCommandInput,
    ListSMSSandboxPhoneNumbersCommandOutput
  >;
  private serialize;
  private deserialize;
}
