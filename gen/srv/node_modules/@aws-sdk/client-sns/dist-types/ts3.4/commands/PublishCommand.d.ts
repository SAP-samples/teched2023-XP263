import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { PublishInput, PublishResponse } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface PublishCommandInput extends PublishInput {}
export interface PublishCommandOutput
  extends PublishResponse,
    __MetadataBearer {}
export declare class PublishCommand extends $Command<
  PublishCommandInput,
  PublishCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: PublishCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PublishCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishCommandInput, PublishCommandOutput>;
  private serialize;
  private deserialize;
}
