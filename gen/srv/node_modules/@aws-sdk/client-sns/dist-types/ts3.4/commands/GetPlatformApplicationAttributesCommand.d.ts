import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetPlatformApplicationAttributesInput,
  GetPlatformApplicationAttributesResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface GetPlatformApplicationAttributesCommandInput
  extends GetPlatformApplicationAttributesInput {}
export interface GetPlatformApplicationAttributesCommandOutput
  extends GetPlatformApplicationAttributesResponse,
    __MetadataBearer {}
export declare class GetPlatformApplicationAttributesCommand extends $Command<
  GetPlatformApplicationAttributesCommandInput,
  GetPlatformApplicationAttributesCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: GetPlatformApplicationAttributesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetPlatformApplicationAttributesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetPlatformApplicationAttributesCommandInput,
    GetPlatformApplicationAttributesCommandOutput
  >;
  private serialize;
  private deserialize;
}
