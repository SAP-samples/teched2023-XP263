import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { SubscribeInput, SubscribeResponse } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface SubscribeCommandInput extends SubscribeInput {}
export interface SubscribeCommandOutput
  extends SubscribeResponse,
    __MetadataBearer {}
export declare class SubscribeCommand extends $Command<
  SubscribeCommandInput,
  SubscribeCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: SubscribeCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SubscribeCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubscribeCommandInput, SubscribeCommandOutput>;
  private serialize;
  private deserialize;
}
