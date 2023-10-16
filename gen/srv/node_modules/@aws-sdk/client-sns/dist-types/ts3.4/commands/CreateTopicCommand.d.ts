import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { CreateTopicInput, CreateTopicResponse } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface CreateTopicCommandInput extends CreateTopicInput {}
export interface CreateTopicCommandOutput
  extends CreateTopicResponse,
    __MetadataBearer {}
export declare class CreateTopicCommand extends $Command<
  CreateTopicCommandInput,
  CreateTopicCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: CreateTopicCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateTopicCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTopicCommandInput, CreateTopicCommandOutput>;
  private serialize;
  private deserialize;
}
