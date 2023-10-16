import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  VerifySMSSandboxPhoneNumberInput,
  VerifySMSSandboxPhoneNumberResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface VerifySMSSandboxPhoneNumberCommandInput
  extends VerifySMSSandboxPhoneNumberInput {}
export interface VerifySMSSandboxPhoneNumberCommandOutput
  extends VerifySMSSandboxPhoneNumberResult,
    __MetadataBearer {}
export declare class VerifySMSSandboxPhoneNumberCommand extends $Command<
  VerifySMSSandboxPhoneNumberCommandInput,
  VerifySMSSandboxPhoneNumberCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: VerifySMSSandboxPhoneNumberCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: VerifySMSSandboxPhoneNumberCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    VerifySMSSandboxPhoneNumberCommandInput,
    VerifySMSSandboxPhoneNumberCommandOutput
  >;
  private serialize;
  private deserialize;
}
