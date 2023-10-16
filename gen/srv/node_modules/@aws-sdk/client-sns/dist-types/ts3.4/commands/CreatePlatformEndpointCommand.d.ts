import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateEndpointResponse,
  CreatePlatformEndpointInput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface CreatePlatformEndpointCommandInput
  extends CreatePlatformEndpointInput {}
export interface CreatePlatformEndpointCommandOutput
  extends CreateEndpointResponse,
    __MetadataBearer {}
export declare class CreatePlatformEndpointCommand extends $Command<
  CreatePlatformEndpointCommandInput,
  CreatePlatformEndpointCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: CreatePlatformEndpointCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreatePlatformEndpointCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreatePlatformEndpointCommandInput,
    CreatePlatformEndpointCommandOutput
  >;
  private serialize;
  private deserialize;
}
