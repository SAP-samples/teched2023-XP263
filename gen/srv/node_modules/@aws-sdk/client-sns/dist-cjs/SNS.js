"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SNS = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const AddPermissionCommand_1 = require("./commands/AddPermissionCommand");
const CheckIfPhoneNumberIsOptedOutCommand_1 = require("./commands/CheckIfPhoneNumberIsOptedOutCommand");
const ConfirmSubscriptionCommand_1 = require("./commands/ConfirmSubscriptionCommand");
const CreatePlatformApplicationCommand_1 = require("./commands/CreatePlatformApplicationCommand");
const CreatePlatformEndpointCommand_1 = require("./commands/CreatePlatformEndpointCommand");
const CreateSMSSandboxPhoneNumberCommand_1 = require("./commands/CreateSMSSandboxPhoneNumberCommand");
const CreateTopicCommand_1 = require("./commands/CreateTopicCommand");
const DeleteEndpointCommand_1 = require("./commands/DeleteEndpointCommand");
const DeletePlatformApplicationCommand_1 = require("./commands/DeletePlatformApplicationCommand");
const DeleteSMSSandboxPhoneNumberCommand_1 = require("./commands/DeleteSMSSandboxPhoneNumberCommand");
const DeleteTopicCommand_1 = require("./commands/DeleteTopicCommand");
const GetDataProtectionPolicyCommand_1 = require("./commands/GetDataProtectionPolicyCommand");
const GetEndpointAttributesCommand_1 = require("./commands/GetEndpointAttributesCommand");
const GetPlatformApplicationAttributesCommand_1 = require("./commands/GetPlatformApplicationAttributesCommand");
const GetSMSAttributesCommand_1 = require("./commands/GetSMSAttributesCommand");
const GetSMSSandboxAccountStatusCommand_1 = require("./commands/GetSMSSandboxAccountStatusCommand");
const GetSubscriptionAttributesCommand_1 = require("./commands/GetSubscriptionAttributesCommand");
const GetTopicAttributesCommand_1 = require("./commands/GetTopicAttributesCommand");
const ListEndpointsByPlatformApplicationCommand_1 = require("./commands/ListEndpointsByPlatformApplicationCommand");
const ListOriginationNumbersCommand_1 = require("./commands/ListOriginationNumbersCommand");
const ListPhoneNumbersOptedOutCommand_1 = require("./commands/ListPhoneNumbersOptedOutCommand");
const ListPlatformApplicationsCommand_1 = require("./commands/ListPlatformApplicationsCommand");
const ListSMSSandboxPhoneNumbersCommand_1 = require("./commands/ListSMSSandboxPhoneNumbersCommand");
const ListSubscriptionsByTopicCommand_1 = require("./commands/ListSubscriptionsByTopicCommand");
const ListSubscriptionsCommand_1 = require("./commands/ListSubscriptionsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTopicsCommand_1 = require("./commands/ListTopicsCommand");
const OptInPhoneNumberCommand_1 = require("./commands/OptInPhoneNumberCommand");
const PublishBatchCommand_1 = require("./commands/PublishBatchCommand");
const PublishCommand_1 = require("./commands/PublishCommand");
const PutDataProtectionPolicyCommand_1 = require("./commands/PutDataProtectionPolicyCommand");
const RemovePermissionCommand_1 = require("./commands/RemovePermissionCommand");
const SetEndpointAttributesCommand_1 = require("./commands/SetEndpointAttributesCommand");
const SetPlatformApplicationAttributesCommand_1 = require("./commands/SetPlatformApplicationAttributesCommand");
const SetSMSAttributesCommand_1 = require("./commands/SetSMSAttributesCommand");
const SetSubscriptionAttributesCommand_1 = require("./commands/SetSubscriptionAttributesCommand");
const SetTopicAttributesCommand_1 = require("./commands/SetTopicAttributesCommand");
const SubscribeCommand_1 = require("./commands/SubscribeCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UnsubscribeCommand_1 = require("./commands/UnsubscribeCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const VerifySMSSandboxPhoneNumberCommand_1 = require("./commands/VerifySMSSandboxPhoneNumberCommand");
const SNSClient_1 = require("./SNSClient");
const commands = {
    AddPermissionCommand: AddPermissionCommand_1.AddPermissionCommand,
    CheckIfPhoneNumberIsOptedOutCommand: CheckIfPhoneNumberIsOptedOutCommand_1.CheckIfPhoneNumberIsOptedOutCommand,
    ConfirmSubscriptionCommand: ConfirmSubscriptionCommand_1.ConfirmSubscriptionCommand,
    CreatePlatformApplicationCommand: CreatePlatformApplicationCommand_1.CreatePlatformApplicationCommand,
    CreatePlatformEndpointCommand: CreatePlatformEndpointCommand_1.CreatePlatformEndpointCommand,
    CreateSMSSandboxPhoneNumberCommand: CreateSMSSandboxPhoneNumberCommand_1.CreateSMSSandboxPhoneNumberCommand,
    CreateTopicCommand: CreateTopicCommand_1.CreateTopicCommand,
    DeleteEndpointCommand: DeleteEndpointCommand_1.DeleteEndpointCommand,
    DeletePlatformApplicationCommand: DeletePlatformApplicationCommand_1.DeletePlatformApplicationCommand,
    DeleteSMSSandboxPhoneNumberCommand: DeleteSMSSandboxPhoneNumberCommand_1.DeleteSMSSandboxPhoneNumberCommand,
    DeleteTopicCommand: DeleteTopicCommand_1.DeleteTopicCommand,
    GetDataProtectionPolicyCommand: GetDataProtectionPolicyCommand_1.GetDataProtectionPolicyCommand,
    GetEndpointAttributesCommand: GetEndpointAttributesCommand_1.GetEndpointAttributesCommand,
    GetPlatformApplicationAttributesCommand: GetPlatformApplicationAttributesCommand_1.GetPlatformApplicationAttributesCommand,
    GetSMSAttributesCommand: GetSMSAttributesCommand_1.GetSMSAttributesCommand,
    GetSMSSandboxAccountStatusCommand: GetSMSSandboxAccountStatusCommand_1.GetSMSSandboxAccountStatusCommand,
    GetSubscriptionAttributesCommand: GetSubscriptionAttributesCommand_1.GetSubscriptionAttributesCommand,
    GetTopicAttributesCommand: GetTopicAttributesCommand_1.GetTopicAttributesCommand,
    ListEndpointsByPlatformApplicationCommand: ListEndpointsByPlatformApplicationCommand_1.ListEndpointsByPlatformApplicationCommand,
    ListOriginationNumbersCommand: ListOriginationNumbersCommand_1.ListOriginationNumbersCommand,
    ListPhoneNumbersOptedOutCommand: ListPhoneNumbersOptedOutCommand_1.ListPhoneNumbersOptedOutCommand,
    ListPlatformApplicationsCommand: ListPlatformApplicationsCommand_1.ListPlatformApplicationsCommand,
    ListSMSSandboxPhoneNumbersCommand: ListSMSSandboxPhoneNumbersCommand_1.ListSMSSandboxPhoneNumbersCommand,
    ListSubscriptionsCommand: ListSubscriptionsCommand_1.ListSubscriptionsCommand,
    ListSubscriptionsByTopicCommand: ListSubscriptionsByTopicCommand_1.ListSubscriptionsByTopicCommand,
    ListTagsForResourceCommand: ListTagsForResourceCommand_1.ListTagsForResourceCommand,
    ListTopicsCommand: ListTopicsCommand_1.ListTopicsCommand,
    OptInPhoneNumberCommand: OptInPhoneNumberCommand_1.OptInPhoneNumberCommand,
    PublishCommand: PublishCommand_1.PublishCommand,
    PublishBatchCommand: PublishBatchCommand_1.PublishBatchCommand,
    PutDataProtectionPolicyCommand: PutDataProtectionPolicyCommand_1.PutDataProtectionPolicyCommand,
    RemovePermissionCommand: RemovePermissionCommand_1.RemovePermissionCommand,
    SetEndpointAttributesCommand: SetEndpointAttributesCommand_1.SetEndpointAttributesCommand,
    SetPlatformApplicationAttributesCommand: SetPlatformApplicationAttributesCommand_1.SetPlatformApplicationAttributesCommand,
    SetSMSAttributesCommand: SetSMSAttributesCommand_1.SetSMSAttributesCommand,
    SetSubscriptionAttributesCommand: SetSubscriptionAttributesCommand_1.SetSubscriptionAttributesCommand,
    SetTopicAttributesCommand: SetTopicAttributesCommand_1.SetTopicAttributesCommand,
    SubscribeCommand: SubscribeCommand_1.SubscribeCommand,
    TagResourceCommand: TagResourceCommand_1.TagResourceCommand,
    UnsubscribeCommand: UnsubscribeCommand_1.UnsubscribeCommand,
    UntagResourceCommand: UntagResourceCommand_1.UntagResourceCommand,
    VerifySMSSandboxPhoneNumberCommand: VerifySMSSandboxPhoneNumberCommand_1.VerifySMSSandboxPhoneNumberCommand,
};
class SNS extends SNSClient_1.SNSClient {
}
exports.SNS = SNS;
(0, smithy_client_1.createAggregatedClient)(commands, SNS);
