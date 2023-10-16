import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetSMSSandboxAccountStatusInput,
  GetSMSSandboxAccountStatusResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface GetSMSSandboxAccountStatusCommandInput
  extends GetSMSSandboxAccountStatusInput {}
export interface GetSMSSandboxAccountStatusCommandOutput
  extends GetSMSSandboxAccountStatusResult,
    __MetadataBearer {}
export declare class GetSMSSandboxAccountStatusCommand extends $Command<
  GetSMSSandboxAccountStatusCommandInput,
  GetSMSSandboxAccountStatusCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: GetSMSSandboxAccountStatusCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetSMSSandboxAccountStatusCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetSMSSandboxAccountStatusCommandInput,
    GetSMSSandboxAccountStatusCommandOutput
  >;
  private serialize;
  private deserialize;
}
