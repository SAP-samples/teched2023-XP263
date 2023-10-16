import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ConfirmSubscriptionInput,
  ConfirmSubscriptionResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface ConfirmSubscriptionCommandInput
  extends ConfirmSubscriptionInput {}
export interface ConfirmSubscriptionCommandOutput
  extends ConfirmSubscriptionResponse,
    __MetadataBearer {}
export declare class ConfirmSubscriptionCommand extends $Command<
  ConfirmSubscriptionCommandInput,
  ConfirmSubscriptionCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: ConfirmSubscriptionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ConfirmSubscriptionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfirmSubscriptionCommandInput, ConfirmSubscriptionCommandOutput>;
  private serialize;
  private deserialize;
}
