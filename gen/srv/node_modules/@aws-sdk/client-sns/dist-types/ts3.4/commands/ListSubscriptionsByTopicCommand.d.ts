import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListSubscriptionsByTopicInput,
  ListSubscriptionsByTopicResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface ListSubscriptionsByTopicCommandInput
  extends ListSubscriptionsByTopicInput {}
export interface ListSubscriptionsByTopicCommandOutput
  extends ListSubscriptionsByTopicResponse,
    __MetadataBearer {}
export declare class ListSubscriptionsByTopicCommand extends $Command<
  ListSubscriptionsByTopicCommandInput,
  ListSubscriptionsByTopicCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: ListSubscriptionsByTopicCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListSubscriptionsByTopicCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListSubscriptionsByTopicCommandInput,
    ListSubscriptionsByTopicCommandOutput
  >;
  private serialize;
  private deserialize;
}
