import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateSMSSandboxPhoneNumberInput,
  CreateSMSSandboxPhoneNumberResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface CreateSMSSandboxPhoneNumberCommandInput
  extends CreateSMSSandboxPhoneNumberInput {}
export interface CreateSMSSandboxPhoneNumberCommandOutput
  extends CreateSMSSandboxPhoneNumberResult,
    __MetadataBearer {}
export declare class CreateSMSSandboxPhoneNumberCommand extends $Command<
  CreateSMSSandboxPhoneNumberCommandInput,
  CreateSMSSandboxPhoneNumberCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: CreateSMSSandboxPhoneNumberCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateSMSSandboxPhoneNumberCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateSMSSandboxPhoneNumberCommandInput,
    CreateSMSSandboxPhoneNumberCommandOutput
  >;
  private serialize;
  private deserialize;
}
