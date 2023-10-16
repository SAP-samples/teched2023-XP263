import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  OptInPhoneNumberInput,
  OptInPhoneNumberResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig,
} from "../SNSClient";
export { __MetadataBearer, $Command };
export interface OptInPhoneNumberCommandInput extends OptInPhoneNumberInput {}
export interface OptInPhoneNumberCommandOutput
  extends OptInPhoneNumberResponse,
    __MetadataBearer {}
export declare class OptInPhoneNumberCommand extends $Command<
  OptInPhoneNumberCommandInput,
  OptInPhoneNumberCommandOutput,
  SNSClientResolvedConfig
> {
  readonly input: OptInPhoneNumberCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: OptInPhoneNumberCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<OptInPhoneNumberCommandInput, OptInPhoneNumberCommandOutput>;
  private serialize;
  private deserialize;
}
