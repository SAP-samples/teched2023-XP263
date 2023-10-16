import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetEndpointAttributesInput,
  GetEndpointAttributesResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface GetEndpointAttributesCommandInput
  extends GetEndpointAttributesInput {}
export interface GetEndpointAttributesCommandOutput
  extends GetEndpointAttributesResponse,
    __MetadataBearer {}
export declare class GetEndpointAttributesCommand extends $Command<
  GetEndpointAttributesCommandInput,
  GetEndpointAttributesCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: GetEndpointAttributesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetEndpointAttributesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetEndpointAttributesCommandInput,
    GetEndpointAttributesCommandOutput
  >;
  private serialize;
  private deserialize;
}
