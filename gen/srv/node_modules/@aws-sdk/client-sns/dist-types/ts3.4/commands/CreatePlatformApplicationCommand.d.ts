import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreatePlatformApplicationInput,
  CreatePlatformApplicationResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface CreatePlatformApplicationCommandInput
  extends CreatePlatformApplicationInput {}
export interface CreatePlatformApplicationCommandOutput
  extends CreatePlatformApplicationResponse,
    __MetadataBearer {}
export declare class CreatePlatformApplicationCommand extends $Command<
  CreatePlatformApplicationCommandInput,
  CreatePlatformApplicationCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: CreatePlatformApplicationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreatePlatformApplicationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreatePlatformApplicationCommandInput,
    CreatePlatformApplicationCommandOutput
  >;
  private serialize;
  private deserialize;
}
