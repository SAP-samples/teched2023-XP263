import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  SetSMSAttributesInput,
  SetSMSAttributesResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface SetSMSAttributesCommandInput extends SetSMSAttributesInput {}
export interface SetSMSAttributesCommandOutput
  extends SetSMSAttributesResponse,
    __MetadataBearer {}
export declare class SetSMSAttributesCommand extends $Command<
  SetSMSAttributesCommandInput,
  SetSMSAttributesCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: SetSMSAttributesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SetSMSAttributesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetSMSAttributesCommandInput, SetSMSAttributesCommandOutput>;
  private serialize;
  private deserialize;
}
