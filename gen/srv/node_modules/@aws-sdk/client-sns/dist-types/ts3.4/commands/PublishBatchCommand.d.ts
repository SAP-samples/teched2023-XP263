import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { PublishBatchInput, PublishBatchResponse } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface PublishBatchCommandInput extends PublishBatchInput {}
export interface PublishBatchCommandOutput
  extends PublishBatchResponse,
    __MetadataBearer {}
export declare class PublishBatchCommand extends $Command<
  PublishBatchCommandInput,
  PublishBatchCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: PublishBatchCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PublishBatchCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishBatchCommandInput, PublishBatchCommandOutput>;
  private serialize;
  private deserialize;
}
