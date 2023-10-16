import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { AddPermissionInput } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddPermissionCommand}.
 */
export interface AddPermissionCommandInput extends AddPermissionInput {
}
/**
 * @public
 *
 * The output of {@link AddPermissionCommand}.
 */
export interface AddPermissionCommandOutput extends __MetadataBearer {
}
/**
 * @public
 * <p>Adds a statement to a topic's access control policy, granting access for the specified
 *             Amazon Web Services accounts to the specified actions.</p>
 *          <note>
 *             <p>To remove the ability to change topic permissions, you must deny permissions to
 *                 the <code>AddPermission</code>, <code>RemovePermission</code>, and
 *                     <code>SetTopicAttributes</code> actions in your IAM policy.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, AddPermissionCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, AddPermissionCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // AddPermissionInput
 *   TopicArn: "STRING_VALUE", // required
 *   Label: "STRING_VALUE", // required
 *   AWSAccountId: [ // DelegatesList // required
 *     "STRING_VALUE",
 *   ],
 *   ActionName: [ // ActionsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AddPermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddPermissionCommandInput - {@link AddPermissionCommandInput}
 * @returns {@link AddPermissionCommandOutput}
 * @see {@link AddPermissionCommandInput} for command's `input` shape.
 * @see {@link AddPermissionCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 */
export declare class AddPermissionCommand extends $Command<AddPermissionCommandInput, AddPermissionCommandOutput, SNSClientResolvedConfig> {
    readonly input: AddPermissionCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: AddPermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddPermissionCommandInput, AddPermissionCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
