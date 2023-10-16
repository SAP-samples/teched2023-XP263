import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { DeleteTopicInput } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface DeleteTopicCommandInput extends DeleteTopicInput {}
export interface DeleteTopicCommandOutput extends __MetadataBearer {}
export declare class DeleteTopicCommand extends $Command<
  DeleteTopicCommandInput,
  DeleteTopicCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: DeleteTopicCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteTopicCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTopicCommandInput, DeleteTopicCommandOutput>;
  private serialize;
  private deserialize;
}
