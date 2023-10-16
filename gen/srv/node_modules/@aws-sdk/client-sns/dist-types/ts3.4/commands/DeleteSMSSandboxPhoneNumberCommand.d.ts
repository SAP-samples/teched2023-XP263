import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteSMSSandboxPhoneNumberInput,
  DeleteSMSSandboxPhoneNumberResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface DeleteSMSSandboxPhoneNumberCommandInput
  extends DeleteSMSSandboxPhoneNumberInput {}
export interface DeleteSMSSandboxPhoneNumberCommandOutput
  extends DeleteSMSSandboxPhoneNumberResult,
    __MetadataBearer {}
export declare class DeleteSMSSandboxPhoneNumberCommand extends $Command<
  DeleteSMSSandboxPhoneNumberCommandInput,
  DeleteSMSSandboxPhoneNumberCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: DeleteSMSSandboxPhoneNumberCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteSMSSandboxPhoneNumberCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteSMSSandboxPhoneNumberCommandInput,
    DeleteSMSSandboxPhoneNumberCommandOutput
  >;
  private serialize;
  private deserialize;
}
