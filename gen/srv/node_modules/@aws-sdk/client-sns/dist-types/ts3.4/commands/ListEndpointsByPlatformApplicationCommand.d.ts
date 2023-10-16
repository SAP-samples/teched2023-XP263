import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListEndpointsByPlatformApplicationInput,
  ListEndpointsByPlatformApplicationResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface ListEndpointsByPlatformApplicationCommandInput
  extends ListEndpointsByPlatformApplicationInput {}
export interface ListEndpointsByPlatformApplicationCommandOutput
  extends ListEndpointsByPlatformApplicationResponse,
    __MetadataBearer {}
export declare class ListEndpointsByPlatformApplicationCommand extends $Command<
  ListEndpointsByPlatformApplicationCommandInput,
  ListEndpointsByPlatformApplicationCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: ListEndpointsByPlatformApplicationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListEndpointsByPlatformApplicationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListEndpointsByPlatformApplicationCommandInput,
    ListEndpointsByPlatformApplicationCommandOutput
  >;
  private serialize;
  private deserialize;
}
