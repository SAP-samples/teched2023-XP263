import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CheckIfPhoneNumberIsOptedOutInput,
  CheckIfPhoneNumberIsOptedOutResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface CheckIfPhoneNumberIsOptedOutCommandInput
  extends CheckIfPhoneNumberIsOptedOutInput {}
export interface CheckIfPhoneNumberIsOptedOutCommandOutput
  extends CheckIfPhoneNumberIsOptedOutResponse,
    __MetadataBearer {}
export declare class CheckIfPhoneNumberIsOptedOutCommand extends $Command<
  CheckIfPhoneNumberIsOptedOutCommandInput,
  CheckIfPhoneNumberIsOptedOutCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: CheckIfPhoneNumberIsOptedOutCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CheckIfPhoneNumberIsOptedOutCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CheckIfPhoneNumberIsOptedOutCommandInput,
    CheckIfPhoneNumberIsOptedOutCommandOutput
  >;
  private serialize;
  private deserialize;
}
