import { HttpRequest as __HttpRequest } from "@smithy/protocol-http";
import { collectBody, decorateServiceException as __decorateServiceException, expectNonNull as __expectNonNull, expectString as __expectString, extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, parseBoolean as __parseBoolean, parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset, withBaseException, } from "@smithy/smithy-client";
import { XMLParser } from "fast-xml-parser";
import { AuthorizationErrorException, BatchEntryIdsNotDistinctException, BatchRequestTooLongException, ConcurrentAccessException, EmptyBatchRequestException, EndpointDisabledException, FilterPolicyLimitExceededException, InternalErrorException, InvalidBatchEntryIdException, InvalidParameterException, InvalidParameterValueException, InvalidSecurityException, KMSAccessDeniedException, KMSDisabledException, KMSInvalidStateException, KMSNotFoundException, KMSOptInRequired, KMSThrottlingException, NotFoundException, OptedOutException, PlatformApplicationDisabledException, ResourceNotFoundException, StaleTagException, SubscriptionLimitExceededException, TagLimitExceededException, TagPolicyException, ThrottledException, TooManyEntriesInBatchRequestException, TopicLimitExceededException, UserErrorException, ValidationException, VerificationException, } from "../models/models_0";
import { SNSServiceException as __BaseException } from "../models/SNSServiceException";
export const se_AddPermissionCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AddPermissionInput(input, context),
        Action: "AddPermission",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CheckIfPhoneNumberIsOptedOutCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CheckIfPhoneNumberIsOptedOutInput(input, context),
        Action: "CheckIfPhoneNumberIsOptedOut",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ConfirmSubscriptionCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ConfirmSubscriptionInput(input, context),
        Action: "ConfirmSubscription",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreatePlatformApplicationCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreatePlatformApplicationInput(input, context),
        Action: "CreatePlatformApplication",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreatePlatformEndpointCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreatePlatformEndpointInput(input, context),
        Action: "CreatePlatformEndpoint",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateSMSSandboxPhoneNumberCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateSMSSandboxPhoneNumberInput(input, context),
        Action: "CreateSMSSandboxPhoneNumber",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateTopicCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateTopicInput(input, context),
        Action: "CreateTopic",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteEndpointCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteEndpointInput(input, context),
        Action: "DeleteEndpoint",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeletePlatformApplicationCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeletePlatformApplicationInput(input, context),
        Action: "DeletePlatformApplication",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteSMSSandboxPhoneNumberCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteSMSSandboxPhoneNumberInput(input, context),
        Action: "DeleteSMSSandboxPhoneNumber",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteTopicCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteTopicInput(input, context),
        Action: "DeleteTopic",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetDataProtectionPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetDataProtectionPolicyInput(input, context),
        Action: "GetDataProtectionPolicy",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetEndpointAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetEndpointAttributesInput(input, context),
        Action: "GetEndpointAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetPlatformApplicationAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetPlatformApplicationAttributesInput(input, context),
        Action: "GetPlatformApplicationAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetSMSAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetSMSAttributesInput(input, context),
        Action: "GetSMSAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetSMSSandboxAccountStatusCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetSMSSandboxAccountStatusInput(input, context),
        Action: "GetSMSSandboxAccountStatus",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetSubscriptionAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetSubscriptionAttributesInput(input, context),
        Action: "GetSubscriptionAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetTopicAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetTopicAttributesInput(input, context),
        Action: "GetTopicAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListEndpointsByPlatformApplicationCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListEndpointsByPlatformApplicationInput(input, context),
        Action: "ListEndpointsByPlatformApplication",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListOriginationNumbersCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListOriginationNumbersRequest(input, context),
        Action: "ListOriginationNumbers",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListPhoneNumbersOptedOutCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListPhoneNumbersOptedOutInput(input, context),
        Action: "ListPhoneNumbersOptedOut",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListPlatformApplicationsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListPlatformApplicationsInput(input, context),
        Action: "ListPlatformApplications",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListSMSSandboxPhoneNumbersCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListSMSSandboxPhoneNumbersInput(input, context),
        Action: "ListSMSSandboxPhoneNumbers",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListSubscriptionsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListSubscriptionsInput(input, context),
        Action: "ListSubscriptions",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListSubscriptionsByTopicCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListSubscriptionsByTopicInput(input, context),
        Action: "ListSubscriptionsByTopic",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListTagsForResourceCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListTagsForResourceRequest(input, context),
        Action: "ListTagsForResource",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListTopicsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListTopicsInput(input, context),
        Action: "ListTopics",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_OptInPhoneNumberCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_OptInPhoneNumberInput(input, context),
        Action: "OptInPhoneNumber",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PublishCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_PublishInput(input, context),
        Action: "Publish",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PublishBatchCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_PublishBatchInput(input, context),
        Action: "PublishBatch",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PutDataProtectionPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_PutDataProtectionPolicyInput(input, context),
        Action: "PutDataProtectionPolicy",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_RemovePermissionCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_RemovePermissionInput(input, context),
        Action: "RemovePermission",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SetEndpointAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetEndpointAttributesInput(input, context),
        Action: "SetEndpointAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SetPlatformApplicationAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetPlatformApplicationAttributesInput(input, context),
        Action: "SetPlatformApplicationAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SetSMSAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetSMSAttributesInput(input, context),
        Action: "SetSMSAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SetSubscriptionAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetSubscriptionAttributesInput(input, context),
        Action: "SetSubscriptionAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SetTopicAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetTopicAttributesInput(input, context),
        Action: "SetTopicAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SubscribeCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SubscribeInput(input, context),
        Action: "Subscribe",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_TagResourceCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_TagResourceRequest(input, context),
        Action: "TagResource",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UnsubscribeCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UnsubscribeInput(input, context),
        Action: "Unsubscribe",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UntagResourceCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UntagResourceRequest(input, context),
        Action: "UntagResource",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_VerifySMSSandboxPhoneNumberCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_VerifySMSSandboxPhoneNumberInput(input, context),
        Action: "VerifySMSSandboxPhoneNumber",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const de_AddPermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_AddPermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_AddPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_CheckIfPhoneNumberIsOptedOutCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CheckIfPhoneNumberIsOptedOutCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CheckIfPhoneNumberIsOptedOutResponse(data.CheckIfPhoneNumberIsOptedOutResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CheckIfPhoneNumberIsOptedOutCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "Throttled":
        case "com.amazonaws.sns#ThrottledException":
            throw await de_ThrottledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_ConfirmSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ConfirmSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ConfirmSubscriptionResponse(data.ConfirmSubscriptionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ConfirmSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "FilterPolicyLimitExceeded":
        case "com.amazonaws.sns#FilterPolicyLimitExceededException":
            throw await de_FilterPolicyLimitExceededExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        case "SubscriptionLimitExceeded":
        case "com.amazonaws.sns#SubscriptionLimitExceededException":
            throw await de_SubscriptionLimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_CreatePlatformApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreatePlatformApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreatePlatformApplicationResponse(data.CreatePlatformApplicationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreatePlatformApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_CreatePlatformEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreatePlatformEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateEndpointResponse(data.CreatePlatformEndpointResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreatePlatformEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_CreateSMSSandboxPhoneNumberCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateSMSSandboxPhoneNumberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateSMSSandboxPhoneNumberResult(data.CreateSMSSandboxPhoneNumberResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateSMSSandboxPhoneNumberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "OptedOut":
        case "com.amazonaws.sns#OptedOutException":
            throw await de_OptedOutExceptionRes(parsedOutput, context);
        case "Throttled":
        case "com.amazonaws.sns#ThrottledException":
            throw await de_ThrottledExceptionRes(parsedOutput, context);
        case "UserError":
        case "com.amazonaws.sns#UserErrorException":
            throw await de_UserErrorExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_CreateTopicCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateTopicCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateTopicResponse(data.CreateTopicResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateTopicCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "ConcurrentAccess":
        case "com.amazonaws.sns#ConcurrentAccessException":
            throw await de_ConcurrentAccessExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "InvalidSecurity":
        case "com.amazonaws.sns#InvalidSecurityException":
            throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
        case "StaleTag":
        case "com.amazonaws.sns#StaleTagException":
            throw await de_StaleTagExceptionRes(parsedOutput, context);
        case "TagLimitExceeded":
        case "com.amazonaws.sns#TagLimitExceededException":
            throw await de_TagLimitExceededExceptionRes(parsedOutput, context);
        case "TagPolicy":
        case "com.amazonaws.sns#TagPolicyException":
            throw await de_TagPolicyExceptionRes(parsedOutput, context);
        case "TopicLimitExceeded":
        case "com.amazonaws.sns#TopicLimitExceededException":
            throw await de_TopicLimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_DeleteEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteEndpointCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeleteEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_DeletePlatformApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeletePlatformApplicationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeletePlatformApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_DeleteSMSSandboxPhoneNumberCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteSMSSandboxPhoneNumberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteSMSSandboxPhoneNumberResult(data.DeleteSMSSandboxPhoneNumberResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteSMSSandboxPhoneNumberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sns#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "Throttled":
        case "com.amazonaws.sns#ThrottledException":
            throw await de_ThrottledExceptionRes(parsedOutput, context);
        case "UserError":
        case "com.amazonaws.sns#UserErrorException":
            throw await de_UserErrorExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_DeleteTopicCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteTopicCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeleteTopicCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "ConcurrentAccess":
        case "com.amazonaws.sns#ConcurrentAccessException":
            throw await de_ConcurrentAccessExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        case "StaleTag":
        case "com.amazonaws.sns#StaleTagException":
            throw await de_StaleTagExceptionRes(parsedOutput, context);
        case "TagPolicy":
        case "com.amazonaws.sns#TagPolicyException":
            throw await de_TagPolicyExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_GetDataProtectionPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetDataProtectionPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetDataProtectionPolicyResponse(data.GetDataProtectionPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetDataProtectionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "InvalidSecurity":
        case "com.amazonaws.sns#InvalidSecurityException":
            throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_GetEndpointAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetEndpointAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetEndpointAttributesResponse(data.GetEndpointAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetEndpointAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_GetPlatformApplicationAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetPlatformApplicationAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetPlatformApplicationAttributesResponse(data.GetPlatformApplicationAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetPlatformApplicationAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_GetSMSAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetSMSAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetSMSAttributesResponse(data.GetSMSAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetSMSAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "Throttled":
        case "com.amazonaws.sns#ThrottledException":
            throw await de_ThrottledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_GetSMSSandboxAccountStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetSMSSandboxAccountStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetSMSSandboxAccountStatusResult(data.GetSMSSandboxAccountStatusResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetSMSSandboxAccountStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "Throttled":
        case "com.amazonaws.sns#ThrottledException":
            throw await de_ThrottledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_GetSubscriptionAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetSubscriptionAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetSubscriptionAttributesResponse(data.GetSubscriptionAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetSubscriptionAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_GetTopicAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetTopicAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetTopicAttributesResponse(data.GetTopicAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetTopicAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "InvalidSecurity":
        case "com.amazonaws.sns#InvalidSecurityException":
            throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_ListEndpointsByPlatformApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListEndpointsByPlatformApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListEndpointsByPlatformApplicationResponse(data.ListEndpointsByPlatformApplicationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListEndpointsByPlatformApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_ListOriginationNumbersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListOriginationNumbersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListOriginationNumbersResult(data.ListOriginationNumbersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListOriginationNumbersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "Throttled":
        case "com.amazonaws.sns#ThrottledException":
            throw await de_ThrottledExceptionRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sns#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_ListPhoneNumbersOptedOutCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListPhoneNumbersOptedOutCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListPhoneNumbersOptedOutResponse(data.ListPhoneNumbersOptedOutResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListPhoneNumbersOptedOutCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "Throttled":
        case "com.amazonaws.sns#ThrottledException":
            throw await de_ThrottledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_ListPlatformApplicationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListPlatformApplicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListPlatformApplicationsResponse(data.ListPlatformApplicationsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListPlatformApplicationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_ListSMSSandboxPhoneNumbersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListSMSSandboxPhoneNumbersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListSMSSandboxPhoneNumbersResult(data.ListSMSSandboxPhoneNumbersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListSMSSandboxPhoneNumbersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sns#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "Throttled":
        case "com.amazonaws.sns#ThrottledException":
            throw await de_ThrottledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_ListSubscriptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListSubscriptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListSubscriptionsResponse(data.ListSubscriptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListSubscriptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_ListSubscriptionsByTopicCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListSubscriptionsByTopicCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListSubscriptionsByTopicResponse(data.ListSubscriptionsByTopicResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListSubscriptionsByTopicCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListTagsForResourceResponse(data.ListTagsForResourceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "ConcurrentAccess":
        case "com.amazonaws.sns#ConcurrentAccessException":
            throw await de_ConcurrentAccessExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sns#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TagPolicy":
        case "com.amazonaws.sns#TagPolicyException":
            throw await de_TagPolicyExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_ListTopicsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTopicsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListTopicsResponse(data.ListTopicsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListTopicsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_OptInPhoneNumberCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_OptInPhoneNumberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_OptInPhoneNumberResponse(data.OptInPhoneNumberResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_OptInPhoneNumberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "Throttled":
        case "com.amazonaws.sns#ThrottledException":
            throw await de_ThrottledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_PublishCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PublishCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_PublishResponse(data.PublishResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_PublishCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "EndpointDisabled":
        case "com.amazonaws.sns#EndpointDisabledException":
            throw await de_EndpointDisabledExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "InvalidSecurity":
        case "com.amazonaws.sns#InvalidSecurityException":
            throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
        case "KMSAccessDenied":
        case "com.amazonaws.sns#KMSAccessDeniedException":
            throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
        case "KMSDisabled":
        case "com.amazonaws.sns#KMSDisabledException":
            throw await de_KMSDisabledExceptionRes(parsedOutput, context);
        case "KMSInvalidState":
        case "com.amazonaws.sns#KMSInvalidStateException":
            throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
        case "KMSNotFound":
        case "com.amazonaws.sns#KMSNotFoundException":
            throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
        case "KMSOptInRequired":
        case "com.amazonaws.sns#KMSOptInRequired":
            throw await de_KMSOptInRequiredRes(parsedOutput, context);
        case "KMSThrottling":
        case "com.amazonaws.sns#KMSThrottlingException":
            throw await de_KMSThrottlingExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        case "ParameterValueInvalid":
        case "com.amazonaws.sns#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "PlatformApplicationDisabled":
        case "com.amazonaws.sns#PlatformApplicationDisabledException":
            throw await de_PlatformApplicationDisabledExceptionRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sns#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_PublishBatchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PublishBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_PublishBatchResponse(data.PublishBatchResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_PublishBatchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "BatchEntryIdsNotDistinct":
        case "com.amazonaws.sns#BatchEntryIdsNotDistinctException":
            throw await de_BatchEntryIdsNotDistinctExceptionRes(parsedOutput, context);
        case "BatchRequestTooLong":
        case "com.amazonaws.sns#BatchRequestTooLongException":
            throw await de_BatchRequestTooLongExceptionRes(parsedOutput, context);
        case "EmptyBatchRequest":
        case "com.amazonaws.sns#EmptyBatchRequestException":
            throw await de_EmptyBatchRequestExceptionRes(parsedOutput, context);
        case "EndpointDisabled":
        case "com.amazonaws.sns#EndpointDisabledException":
            throw await de_EndpointDisabledExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidBatchEntryId":
        case "com.amazonaws.sns#InvalidBatchEntryIdException":
            throw await de_InvalidBatchEntryIdExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "InvalidSecurity":
        case "com.amazonaws.sns#InvalidSecurityException":
            throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
        case "KMSAccessDenied":
        case "com.amazonaws.sns#KMSAccessDeniedException":
            throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
        case "KMSDisabled":
        case "com.amazonaws.sns#KMSDisabledException":
            throw await de_KMSDisabledExceptionRes(parsedOutput, context);
        case "KMSInvalidState":
        case "com.amazonaws.sns#KMSInvalidStateException":
            throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
        case "KMSNotFound":
        case "com.amazonaws.sns#KMSNotFoundException":
            throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
        case "KMSOptInRequired":
        case "com.amazonaws.sns#KMSOptInRequired":
            throw await de_KMSOptInRequiredRes(parsedOutput, context);
        case "KMSThrottling":
        case "com.amazonaws.sns#KMSThrottlingException":
            throw await de_KMSThrottlingExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        case "ParameterValueInvalid":
        case "com.amazonaws.sns#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "PlatformApplicationDisabled":
        case "com.amazonaws.sns#PlatformApplicationDisabledException":
            throw await de_PlatformApplicationDisabledExceptionRes(parsedOutput, context);
        case "TooManyEntriesInBatchRequest":
        case "com.amazonaws.sns#TooManyEntriesInBatchRequestException":
            throw await de_TooManyEntriesInBatchRequestExceptionRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sns#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_PutDataProtectionPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutDataProtectionPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_PutDataProtectionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "InvalidSecurity":
        case "com.amazonaws.sns#InvalidSecurityException":
            throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_RemovePermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RemovePermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_RemovePermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_SetEndpointAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetEndpointAttributesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_SetEndpointAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_SetPlatformApplicationAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetPlatformApplicationAttributesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_SetPlatformApplicationAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_SetSMSAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetSMSAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SetSMSAttributesResponse(data.SetSMSAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_SetSMSAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "Throttled":
        case "com.amazonaws.sns#ThrottledException":
            throw await de_ThrottledExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_SetSubscriptionAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetSubscriptionAttributesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_SetSubscriptionAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "FilterPolicyLimitExceeded":
        case "com.amazonaws.sns#FilterPolicyLimitExceededException":
            throw await de_FilterPolicyLimitExceededExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_SetTopicAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetTopicAttributesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_SetTopicAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "InvalidSecurity":
        case "com.amazonaws.sns#InvalidSecurityException":
            throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_SubscribeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SubscribeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SubscribeResponse(data.SubscribeResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_SubscribeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "FilterPolicyLimitExceeded":
        case "com.amazonaws.sns#FilterPolicyLimitExceededException":
            throw await de_FilterPolicyLimitExceededExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "InvalidSecurity":
        case "com.amazonaws.sns#InvalidSecurityException":
            throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        case "SubscriptionLimitExceeded":
        case "com.amazonaws.sns#SubscriptionLimitExceededException":
            throw await de_SubscriptionLimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_TagResourceResponse(data.TagResourceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "ConcurrentAccess":
        case "com.amazonaws.sns#ConcurrentAccessException":
            throw await de_ConcurrentAccessExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sns#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "StaleTag":
        case "com.amazonaws.sns#StaleTagException":
            throw await de_StaleTagExceptionRes(parsedOutput, context);
        case "TagLimitExceeded":
        case "com.amazonaws.sns#TagLimitExceededException":
            throw await de_TagLimitExceededExceptionRes(parsedOutput, context);
        case "TagPolicy":
        case "com.amazonaws.sns#TagPolicyException":
            throw await de_TagPolicyExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_UnsubscribeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UnsubscribeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_UnsubscribeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "InvalidSecurity":
        case "com.amazonaws.sns#InvalidSecurityException":
            throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
        case "NotFound":
        case "com.amazonaws.sns#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UntagResourceResponse(data.UntagResourceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "ConcurrentAccess":
        case "com.amazonaws.sns#ConcurrentAccessException":
            throw await de_ConcurrentAccessExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sns#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "StaleTag":
        case "com.amazonaws.sns#StaleTagException":
            throw await de_StaleTagExceptionRes(parsedOutput, context);
        case "TagLimitExceeded":
        case "com.amazonaws.sns#TagLimitExceededException":
            throw await de_TagLimitExceededExceptionRes(parsedOutput, context);
        case "TagPolicy":
        case "com.amazonaws.sns#TagPolicyException":
            throw await de_TagPolicyExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
export const de_VerifySMSSandboxPhoneNumberCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_VerifySMSSandboxPhoneNumberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_VerifySMSSandboxPhoneNumberResult(data.VerifySMSSandboxPhoneNumberResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_VerifySMSSandboxPhoneNumberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationError":
        case "com.amazonaws.sns#AuthorizationErrorException":
            throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
        case "InternalError":
        case "com.amazonaws.sns#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameter":
        case "com.amazonaws.sns#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sns#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "Throttled":
        case "com.amazonaws.sns#ThrottledException":
            throw await de_ThrottledExceptionRes(parsedOutput, context);
        case "VerificationException":
        case "com.amazonaws.sns#VerificationException":
            throw await de_VerificationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_AuthorizationErrorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_AuthorizationErrorException(body.Error, context);
    const exception = new AuthorizationErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_BatchEntryIdsNotDistinctExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_BatchEntryIdsNotDistinctException(body.Error, context);
    const exception = new BatchEntryIdsNotDistinctException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_BatchRequestTooLongExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_BatchRequestTooLongException(body.Error, context);
    const exception = new BatchRequestTooLongException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ConcurrentAccessExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ConcurrentAccessException(body.Error, context);
    const exception = new ConcurrentAccessException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_EmptyBatchRequestExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_EmptyBatchRequestException(body.Error, context);
    const exception = new EmptyBatchRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_EndpointDisabledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_EndpointDisabledException(body.Error, context);
    const exception = new EndpointDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_FilterPolicyLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_FilterPolicyLimitExceededException(body.Error, context);
    const exception = new FilterPolicyLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InternalErrorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InternalErrorException(body.Error, context);
    const exception = new InternalErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidBatchEntryIdExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidBatchEntryIdException(body.Error, context);
    const exception = new InvalidBatchEntryIdException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidParameterExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidParameterException(body.Error, context);
    const exception = new InvalidParameterException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidParameterValueExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidParameterValueException(body.Error, context);
    const exception = new InvalidParameterValueException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidSecurityExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidSecurityException(body.Error, context);
    const exception = new InvalidSecurityException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_KMSAccessDeniedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_KMSAccessDeniedException(body.Error, context);
    const exception = new KMSAccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_KMSDisabledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_KMSDisabledException(body.Error, context);
    const exception = new KMSDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_KMSInvalidStateExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_KMSInvalidStateException(body.Error, context);
    const exception = new KMSInvalidStateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_KMSNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_KMSNotFoundException(body.Error, context);
    const exception = new KMSNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_KMSOptInRequiredRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_KMSOptInRequired(body.Error, context);
    const exception = new KMSOptInRequired({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_KMSThrottlingExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_KMSThrottlingException(body.Error, context);
    const exception = new KMSThrottlingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_NotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_NotFoundException(body.Error, context);
    const exception = new NotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_OptedOutExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_OptedOutException(body.Error, context);
    const exception = new OptedOutException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_PlatformApplicationDisabledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_PlatformApplicationDisabledException(body.Error, context);
    const exception = new PlatformApplicationDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ResourceNotFoundException(body.Error, context);
    const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_StaleTagExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_StaleTagException(body.Error, context);
    const exception = new StaleTagException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_SubscriptionLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_SubscriptionLimitExceededException(body.Error, context);
    const exception = new SubscriptionLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_TagLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_TagLimitExceededException(body.Error, context);
    const exception = new TagLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_TagPolicyExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_TagPolicyException(body.Error, context);
    const exception = new TagPolicyException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ThrottledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ThrottledException(body.Error, context);
    const exception = new ThrottledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_TooManyEntriesInBatchRequestExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_TooManyEntriesInBatchRequestException(body.Error, context);
    const exception = new TooManyEntriesInBatchRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_TopicLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_TopicLimitExceededException(body.Error, context);
    const exception = new TopicLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_UserErrorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_UserErrorException(body.Error, context);
    const exception = new UserErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ValidationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ValidationException(body.Error, context);
    const exception = new ValidationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_VerificationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_VerificationException(body.Error, context);
    const exception = new VerificationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const se_ActionsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_AddPermissionInput = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.Label != null) {
        entries["Label"] = input.Label;
    }
    if (input.AWSAccountId != null) {
        const memberEntries = se_DelegatesList(input.AWSAccountId, context);
        if (input.AWSAccountId?.length === 0) {
            entries.AWSAccountId = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AWSAccountId.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ActionName != null) {
        const memberEntries = se_ActionsList(input.ActionName, context);
        if (input.ActionName?.length === 0) {
            entries.ActionName = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ActionName.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CheckIfPhoneNumberIsOptedOutInput = (input, context) => {
    const entries = {};
    if (input.phoneNumber != null) {
        entries["phoneNumber"] = input.phoneNumber;
    }
    return entries;
};
const se_ConfirmSubscriptionInput = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.Token != null) {
        entries["Token"] = input.Token;
    }
    if (input.AuthenticateOnUnsubscribe != null) {
        entries["AuthenticateOnUnsubscribe"] = input.AuthenticateOnUnsubscribe;
    }
    return entries;
};
const se_CreatePlatformApplicationInput = (input, context) => {
    const entries = {};
    if (input.Name != null) {
        entries["Name"] = input.Name;
    }
    if (input.Platform != null) {
        entries["Platform"] = input.Platform;
    }
    if (input.Attributes != null) {
        const memberEntries = se_MapStringToString(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CreatePlatformEndpointInput = (input, context) => {
    const entries = {};
    if (input.PlatformApplicationArn != null) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    if (input.Token != null) {
        entries["Token"] = input.Token;
    }
    if (input.CustomUserData != null) {
        entries["CustomUserData"] = input.CustomUserData;
    }
    if (input.Attributes != null) {
        const memberEntries = se_MapStringToString(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CreateSMSSandboxPhoneNumberInput = (input, context) => {
    const entries = {};
    if (input.PhoneNumber != null) {
        entries["PhoneNumber"] = input.PhoneNumber;
    }
    if (input.LanguageCode != null) {
        entries["LanguageCode"] = input.LanguageCode;
    }
    return entries;
};
const se_CreateTopicInput = (input, context) => {
    const entries = {};
    if (input.Name != null) {
        entries["Name"] = input.Name;
    }
    if (input.Attributes != null) {
        const memberEntries = se_TopicAttributesMap(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags != null) {
        const memberEntries = se_TagList(input.Tags, context);
        if (input.Tags?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DataProtectionPolicy != null) {
        entries["DataProtectionPolicy"] = input.DataProtectionPolicy;
    }
    return entries;
};
const se_DelegatesList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_DeleteEndpointInput = (input, context) => {
    const entries = {};
    if (input.EndpointArn != null) {
        entries["EndpointArn"] = input.EndpointArn;
    }
    return entries;
};
const se_DeletePlatformApplicationInput = (input, context) => {
    const entries = {};
    if (input.PlatformApplicationArn != null) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    return entries;
};
const se_DeleteSMSSandboxPhoneNumberInput = (input, context) => {
    const entries = {};
    if (input.PhoneNumber != null) {
        entries["PhoneNumber"] = input.PhoneNumber;
    }
    return entries;
};
const se_DeleteTopicInput = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const se_GetDataProtectionPolicyInput = (input, context) => {
    const entries = {};
    if (input.ResourceArn != null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    return entries;
};
const se_GetEndpointAttributesInput = (input, context) => {
    const entries = {};
    if (input.EndpointArn != null) {
        entries["EndpointArn"] = input.EndpointArn;
    }
    return entries;
};
const se_GetPlatformApplicationAttributesInput = (input, context) => {
    const entries = {};
    if (input.PlatformApplicationArn != null) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    return entries;
};
const se_GetSMSAttributesInput = (input, context) => {
    const entries = {};
    if (input.attributes != null) {
        const memberEntries = se_ListString(input.attributes, context);
        if (input.attributes?.length === 0) {
            entries.attributes = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_GetSMSSandboxAccountStatusInput = (input, context) => {
    const entries = {};
    return entries;
};
const se_GetSubscriptionAttributesInput = (input, context) => {
    const entries = {};
    if (input.SubscriptionArn != null) {
        entries["SubscriptionArn"] = input.SubscriptionArn;
    }
    return entries;
};
const se_GetTopicAttributesInput = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const se_ListEndpointsByPlatformApplicationInput = (input, context) => {
    const entries = {};
    if (input.PlatformApplicationArn != null) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    if (input.NextToken != null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const se_ListOriginationNumbersRequest = (input, context) => {
    const entries = {};
    if (input.NextToken != null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults != null) {
        entries["MaxResults"] = input.MaxResults;
    }
    return entries;
};
const se_ListPhoneNumbersOptedOutInput = (input, context) => {
    const entries = {};
    if (input.nextToken != null) {
        entries["nextToken"] = input.nextToken;
    }
    return entries;
};
const se_ListPlatformApplicationsInput = (input, context) => {
    const entries = {};
    if (input.NextToken != null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const se_ListSMSSandboxPhoneNumbersInput = (input, context) => {
    const entries = {};
    if (input.NextToken != null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults != null) {
        entries["MaxResults"] = input.MaxResults;
    }
    return entries;
};
const se_ListString = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_ListSubscriptionsByTopicInput = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.NextToken != null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const se_ListSubscriptionsInput = (input, context) => {
    const entries = {};
    if (input.NextToken != null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const se_ListTagsForResourceRequest = (input, context) => {
    const entries = {};
    if (input.ResourceArn != null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    return entries;
};
const se_ListTopicsInput = (input, context) => {
    const entries = {};
    if (input.NextToken != null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const se_MapStringToString = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input)
        .filter((key) => input[key] != null)
        .forEach((key) => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const se_MessageAttributeMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input)
        .filter((key) => input[key] != null)
        .forEach((key) => {
        entries[`entry.${counter}.Name`] = key;
        const memberEntries = se_MessageAttributeValue(input[key], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`entry.${counter}.Value.${key}`] = value;
        });
        counter++;
    });
    return entries;
};
const se_MessageAttributeValue = (input, context) => {
    const entries = {};
    if (input.DataType != null) {
        entries["DataType"] = input.DataType;
    }
    if (input.StringValue != null) {
        entries["StringValue"] = input.StringValue;
    }
    if (input.BinaryValue != null) {
        entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
    }
    return entries;
};
const se_OptInPhoneNumberInput = (input, context) => {
    const entries = {};
    if (input.phoneNumber != null) {
        entries["phoneNumber"] = input.phoneNumber;
    }
    return entries;
};
const se_PublishBatchInput = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.PublishBatchRequestEntries != null) {
        const memberEntries = se_PublishBatchRequestEntryList(input.PublishBatchRequestEntries, context);
        if (input.PublishBatchRequestEntries?.length === 0) {
            entries.PublishBatchRequestEntries = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PublishBatchRequestEntries.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_PublishBatchRequestEntry = (input, context) => {
    const entries = {};
    if (input.Id != null) {
        entries["Id"] = input.Id;
    }
    if (input.Message != null) {
        entries["Message"] = input.Message;
    }
    if (input.Subject != null) {
        entries["Subject"] = input.Subject;
    }
    if (input.MessageStructure != null) {
        entries["MessageStructure"] = input.MessageStructure;
    }
    if (input.MessageAttributes != null) {
        const memberEntries = se_MessageAttributeMap(input.MessageAttributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MessageAttributes.${key}`;
            entries[loc] = value;
        });
    }
    if (input.MessageDeduplicationId != null) {
        entries["MessageDeduplicationId"] = input.MessageDeduplicationId;
    }
    if (input.MessageGroupId != null) {
        entries["MessageGroupId"] = input.MessageGroupId;
    }
    return entries;
};
const se_PublishBatchRequestEntryList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_PublishBatchRequestEntry(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_PublishInput = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.TargetArn != null) {
        entries["TargetArn"] = input.TargetArn;
    }
    if (input.PhoneNumber != null) {
        entries["PhoneNumber"] = input.PhoneNumber;
    }
    if (input.Message != null) {
        entries["Message"] = input.Message;
    }
    if (input.Subject != null) {
        entries["Subject"] = input.Subject;
    }
    if (input.MessageStructure != null) {
        entries["MessageStructure"] = input.MessageStructure;
    }
    if (input.MessageAttributes != null) {
        const memberEntries = se_MessageAttributeMap(input.MessageAttributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MessageAttributes.${key}`;
            entries[loc] = value;
        });
    }
    if (input.MessageDeduplicationId != null) {
        entries["MessageDeduplicationId"] = input.MessageDeduplicationId;
    }
    if (input.MessageGroupId != null) {
        entries["MessageGroupId"] = input.MessageGroupId;
    }
    return entries;
};
const se_PutDataProtectionPolicyInput = (input, context) => {
    const entries = {};
    if (input.ResourceArn != null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    if (input.DataProtectionPolicy != null) {
        entries["DataProtectionPolicy"] = input.DataProtectionPolicy;
    }
    return entries;
};
const se_RemovePermissionInput = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.Label != null) {
        entries["Label"] = input.Label;
    }
    return entries;
};
const se_SetEndpointAttributesInput = (input, context) => {
    const entries = {};
    if (input.EndpointArn != null) {
        entries["EndpointArn"] = input.EndpointArn;
    }
    if (input.Attributes != null) {
        const memberEntries = se_MapStringToString(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_SetPlatformApplicationAttributesInput = (input, context) => {
    const entries = {};
    if (input.PlatformApplicationArn != null) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    if (input.Attributes != null) {
        const memberEntries = se_MapStringToString(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_SetSMSAttributesInput = (input, context) => {
    const entries = {};
    if (input.attributes != null) {
        const memberEntries = se_MapStringToString(input.attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_SetSubscriptionAttributesInput = (input, context) => {
    const entries = {};
    if (input.SubscriptionArn != null) {
        entries["SubscriptionArn"] = input.SubscriptionArn;
    }
    if (input.AttributeName != null) {
        entries["AttributeName"] = input.AttributeName;
    }
    if (input.AttributeValue != null) {
        entries["AttributeValue"] = input.AttributeValue;
    }
    return entries;
};
const se_SetTopicAttributesInput = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.AttributeName != null) {
        entries["AttributeName"] = input.AttributeName;
    }
    if (input.AttributeValue != null) {
        entries["AttributeValue"] = input.AttributeValue;
    }
    return entries;
};
const se_SubscribeInput = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.Protocol != null) {
        entries["Protocol"] = input.Protocol;
    }
    if (input.Endpoint != null) {
        entries["Endpoint"] = input.Endpoint;
    }
    if (input.Attributes != null) {
        const memberEntries = se_SubscriptionAttributesMap(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReturnSubscriptionArn != null) {
        entries["ReturnSubscriptionArn"] = input.ReturnSubscriptionArn;
    }
    return entries;
};
const se_SubscriptionAttributesMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input)
        .filter((key) => input[key] != null)
        .forEach((key) => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const se_Tag = (input, context) => {
    const entries = {};
    if (input.Key != null) {
        entries["Key"] = input.Key;
    }
    if (input.Value != null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const se_TagKeyList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_TagList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_Tag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_TagResourceRequest = (input, context) => {
    const entries = {};
    if (input.ResourceArn != null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags != null) {
        const memberEntries = se_TagList(input.Tags, context);
        if (input.Tags?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_TopicAttributesMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input)
        .filter((key) => input[key] != null)
        .forEach((key) => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const se_UnsubscribeInput = (input, context) => {
    const entries = {};
    if (input.SubscriptionArn != null) {
        entries["SubscriptionArn"] = input.SubscriptionArn;
    }
    return entries;
};
const se_UntagResourceRequest = (input, context) => {
    const entries = {};
    if (input.ResourceArn != null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys != null) {
        const memberEntries = se_TagKeyList(input.TagKeys, context);
        if (input.TagKeys?.length === 0) {
            entries.TagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_VerifySMSSandboxPhoneNumberInput = (input, context) => {
    const entries = {};
    if (input.PhoneNumber != null) {
        entries["PhoneNumber"] = input.PhoneNumber;
    }
    if (input.OneTimePassword != null) {
        entries["OneTimePassword"] = input.OneTimePassword;
    }
    return entries;
};
const de_AuthorizationErrorException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_BatchEntryIdsNotDistinctException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_BatchRequestTooLongException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_BatchResultErrorEntry = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = __expectString(output["Id"]);
    }
    if (output["Code"] !== undefined) {
        contents.Code = __expectString(output["Code"]);
    }
    if (output["Message"] !== undefined) {
        contents.Message = __expectString(output["Message"]);
    }
    if (output["SenderFault"] !== undefined) {
        contents.SenderFault = __parseBoolean(output["SenderFault"]);
    }
    return contents;
};
const de_BatchResultErrorEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_BatchResultErrorEntry(entry, context);
    });
};
const de_CheckIfPhoneNumberIsOptedOutResponse = (output, context) => {
    const contents = {};
    if (output["isOptedOut"] !== undefined) {
        contents.isOptedOut = __parseBoolean(output["isOptedOut"]);
    }
    return contents;
};
const de_ConcurrentAccessException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_ConfirmSubscriptionResponse = (output, context) => {
    const contents = {};
    if (output["SubscriptionArn"] !== undefined) {
        contents.SubscriptionArn = __expectString(output["SubscriptionArn"]);
    }
    return contents;
};
const de_CreateEndpointResponse = (output, context) => {
    const contents = {};
    if (output["EndpointArn"] !== undefined) {
        contents.EndpointArn = __expectString(output["EndpointArn"]);
    }
    return contents;
};
const de_CreatePlatformApplicationResponse = (output, context) => {
    const contents = {};
    if (output["PlatformApplicationArn"] !== undefined) {
        contents.PlatformApplicationArn = __expectString(output["PlatformApplicationArn"]);
    }
    return contents;
};
const de_CreateSMSSandboxPhoneNumberResult = (output, context) => {
    const contents = {};
    return contents;
};
const de_CreateTopicResponse = (output, context) => {
    const contents = {};
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = __expectString(output["TopicArn"]);
    }
    return contents;
};
const de_DeleteSMSSandboxPhoneNumberResult = (output, context) => {
    const contents = {};
    return contents;
};
const de_EmptyBatchRequestException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_Endpoint = (output, context) => {
    const contents = {};
    if (output["EndpointArn"] !== undefined) {
        contents.EndpointArn = __expectString(output["EndpointArn"]);
    }
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
        contents.Attributes = de_MapStringToString(__getArrayIfSingleItem(output["Attributes"]["entry"]), context);
    }
    return contents;
};
const de_EndpointDisabledException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_FilterPolicyLimitExceededException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_GetDataProtectionPolicyResponse = (output, context) => {
    const contents = {};
    if (output["DataProtectionPolicy"] !== undefined) {
        contents.DataProtectionPolicy = __expectString(output["DataProtectionPolicy"]);
    }
    return contents;
};
const de_GetEndpointAttributesResponse = (output, context) => {
    const contents = {};
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
        contents.Attributes = de_MapStringToString(__getArrayIfSingleItem(output["Attributes"]["entry"]), context);
    }
    return contents;
};
const de_GetPlatformApplicationAttributesResponse = (output, context) => {
    const contents = {};
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
        contents.Attributes = de_MapStringToString(__getArrayIfSingleItem(output["Attributes"]["entry"]), context);
    }
    return contents;
};
const de_GetSMSAttributesResponse = (output, context) => {
    const contents = {};
    if (output.attributes === "") {
        contents.attributes = {};
    }
    else if (output["attributes"] !== undefined && output["attributes"]["entry"] !== undefined) {
        contents.attributes = de_MapStringToString(__getArrayIfSingleItem(output["attributes"]["entry"]), context);
    }
    return contents;
};
const de_GetSMSSandboxAccountStatusResult = (output, context) => {
    const contents = {};
    if (output["IsInSandbox"] !== undefined) {
        contents.IsInSandbox = __parseBoolean(output["IsInSandbox"]);
    }
    return contents;
};
const de_GetSubscriptionAttributesResponse = (output, context) => {
    const contents = {};
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
        contents.Attributes = de_SubscriptionAttributesMap(__getArrayIfSingleItem(output["Attributes"]["entry"]), context);
    }
    return contents;
};
const de_GetTopicAttributesResponse = (output, context) => {
    const contents = {};
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
        contents.Attributes = de_TopicAttributesMap(__getArrayIfSingleItem(output["Attributes"]["entry"]), context);
    }
    return contents;
};
const de_InternalErrorException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_InvalidBatchEntryIdException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_InvalidParameterException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_InvalidParameterValueException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_InvalidSecurityException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_KMSAccessDeniedException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_KMSDisabledException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_KMSInvalidStateException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_KMSNotFoundException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_KMSOptInRequired = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_KMSThrottlingException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_ListEndpointsByPlatformApplicationResponse = (output, context) => {
    const contents = {};
    if (output.Endpoints === "") {
        contents.Endpoints = [];
    }
    else if (output["Endpoints"] !== undefined && output["Endpoints"]["member"] !== undefined) {
        contents.Endpoints = de_ListOfEndpoints(__getArrayIfSingleItem(output["Endpoints"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = __expectString(output["NextToken"]);
    }
    return contents;
};
const de_ListOfEndpoints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Endpoint(entry, context);
    });
};
const de_ListOfPlatformApplications = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_PlatformApplication(entry, context);
    });
};
const de_ListOriginationNumbersResult = (output, context) => {
    const contents = {};
    if (output["NextToken"] !== undefined) {
        contents.NextToken = __expectString(output["NextToken"]);
    }
    if (output.PhoneNumbers === "") {
        contents.PhoneNumbers = [];
    }
    else if (output["PhoneNumbers"] !== undefined && output["PhoneNumbers"]["member"] !== undefined) {
        contents.PhoneNumbers = de_PhoneNumberInformationList(__getArrayIfSingleItem(output["PhoneNumbers"]["member"]), context);
    }
    return contents;
};
const de_ListPhoneNumbersOptedOutResponse = (output, context) => {
    const contents = {};
    if (output.phoneNumbers === "") {
        contents.phoneNumbers = [];
    }
    else if (output["phoneNumbers"] !== undefined && output["phoneNumbers"]["member"] !== undefined) {
        contents.phoneNumbers = de_PhoneNumberList(__getArrayIfSingleItem(output["phoneNumbers"]["member"]), context);
    }
    if (output["nextToken"] !== undefined) {
        contents.nextToken = __expectString(output["nextToken"]);
    }
    return contents;
};
const de_ListPlatformApplicationsResponse = (output, context) => {
    const contents = {};
    if (output.PlatformApplications === "") {
        contents.PlatformApplications = [];
    }
    else if (output["PlatformApplications"] !== undefined && output["PlatformApplications"]["member"] !== undefined) {
        contents.PlatformApplications = de_ListOfPlatformApplications(__getArrayIfSingleItem(output["PlatformApplications"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = __expectString(output["NextToken"]);
    }
    return contents;
};
const de_ListSMSSandboxPhoneNumbersResult = (output, context) => {
    const contents = {};
    if (output.PhoneNumbers === "") {
        contents.PhoneNumbers = [];
    }
    else if (output["PhoneNumbers"] !== undefined && output["PhoneNumbers"]["member"] !== undefined) {
        contents.PhoneNumbers = de_SMSSandboxPhoneNumberList(__getArrayIfSingleItem(output["PhoneNumbers"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = __expectString(output["NextToken"]);
    }
    return contents;
};
const de_ListSubscriptionsByTopicResponse = (output, context) => {
    const contents = {};
    if (output.Subscriptions === "") {
        contents.Subscriptions = [];
    }
    else if (output["Subscriptions"] !== undefined && output["Subscriptions"]["member"] !== undefined) {
        contents.Subscriptions = de_SubscriptionsList(__getArrayIfSingleItem(output["Subscriptions"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = __expectString(output["NextToken"]);
    }
    return contents;
};
const de_ListSubscriptionsResponse = (output, context) => {
    const contents = {};
    if (output.Subscriptions === "") {
        contents.Subscriptions = [];
    }
    else if (output["Subscriptions"] !== undefined && output["Subscriptions"]["member"] !== undefined) {
        contents.Subscriptions = de_SubscriptionsList(__getArrayIfSingleItem(output["Subscriptions"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = __expectString(output["NextToken"]);
    }
    return contents;
};
const de_ListTagsForResourceResponse = (output, context) => {
    const contents = {};
    if (output.Tags === "") {
        contents.Tags = [];
    }
    else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const de_ListTopicsResponse = (output, context) => {
    const contents = {};
    if (output.Topics === "") {
        contents.Topics = [];
    }
    else if (output["Topics"] !== undefined && output["Topics"]["member"] !== undefined) {
        contents.Topics = de_TopicsList(__getArrayIfSingleItem(output["Topics"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = __expectString(output["NextToken"]);
    }
    return contents;
};
const de_MapStringToString = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        acc[pair["key"]] = __expectString(pair["value"]);
        return acc;
    }, {});
};
const de_NotFoundException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_NumberCapabilityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_OptedOutException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_OptInPhoneNumberResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_PhoneNumberInformation = (output, context) => {
    const contents = {};
    if (output["CreatedAt"] !== undefined) {
        contents.CreatedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedAt"]));
    }
    if (output["PhoneNumber"] !== undefined) {
        contents.PhoneNumber = __expectString(output["PhoneNumber"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = __expectString(output["Status"]);
    }
    if (output["Iso2CountryCode"] !== undefined) {
        contents.Iso2CountryCode = __expectString(output["Iso2CountryCode"]);
    }
    if (output["RouteType"] !== undefined) {
        contents.RouteType = __expectString(output["RouteType"]);
    }
    if (output.NumberCapabilities === "") {
        contents.NumberCapabilities = [];
    }
    else if (output["NumberCapabilities"] !== undefined && output["NumberCapabilities"]["member"] !== undefined) {
        contents.NumberCapabilities = de_NumberCapabilityList(__getArrayIfSingleItem(output["NumberCapabilities"]["member"]), context);
    }
    return contents;
};
const de_PhoneNumberInformationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_PhoneNumberInformation(entry, context);
    });
};
const de_PhoneNumberList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_PlatformApplication = (output, context) => {
    const contents = {};
    if (output["PlatformApplicationArn"] !== undefined) {
        contents.PlatformApplicationArn = __expectString(output["PlatformApplicationArn"]);
    }
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
        contents.Attributes = de_MapStringToString(__getArrayIfSingleItem(output["Attributes"]["entry"]), context);
    }
    return contents;
};
const de_PlatformApplicationDisabledException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_PublishBatchResponse = (output, context) => {
    const contents = {};
    if (output.Successful === "") {
        contents.Successful = [];
    }
    else if (output["Successful"] !== undefined && output["Successful"]["member"] !== undefined) {
        contents.Successful = de_PublishBatchResultEntryList(__getArrayIfSingleItem(output["Successful"]["member"]), context);
    }
    if (output.Failed === "") {
        contents.Failed = [];
    }
    else if (output["Failed"] !== undefined && output["Failed"]["member"] !== undefined) {
        contents.Failed = de_BatchResultErrorEntryList(__getArrayIfSingleItem(output["Failed"]["member"]), context);
    }
    return contents;
};
const de_PublishBatchResultEntry = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = __expectString(output["Id"]);
    }
    if (output["MessageId"] !== undefined) {
        contents.MessageId = __expectString(output["MessageId"]);
    }
    if (output["SequenceNumber"] !== undefined) {
        contents.SequenceNumber = __expectString(output["SequenceNumber"]);
    }
    return contents;
};
const de_PublishBatchResultEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_PublishBatchResultEntry(entry, context);
    });
};
const de_PublishResponse = (output, context) => {
    const contents = {};
    if (output["MessageId"] !== undefined) {
        contents.MessageId = __expectString(output["MessageId"]);
    }
    if (output["SequenceNumber"] !== undefined) {
        contents.SequenceNumber = __expectString(output["SequenceNumber"]);
    }
    return contents;
};
const de_ResourceNotFoundException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_SetSMSAttributesResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_SMSSandboxPhoneNumber = (output, context) => {
    const contents = {};
    if (output["PhoneNumber"] !== undefined) {
        contents.PhoneNumber = __expectString(output["PhoneNumber"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = __expectString(output["Status"]);
    }
    return contents;
};
const de_SMSSandboxPhoneNumberList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_SMSSandboxPhoneNumber(entry, context);
    });
};
const de_StaleTagException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_SubscribeResponse = (output, context) => {
    const contents = {};
    if (output["SubscriptionArn"] !== undefined) {
        contents.SubscriptionArn = __expectString(output["SubscriptionArn"]);
    }
    return contents;
};
const de_Subscription = (output, context) => {
    const contents = {};
    if (output["SubscriptionArn"] !== undefined) {
        contents.SubscriptionArn = __expectString(output["SubscriptionArn"]);
    }
    if (output["Owner"] !== undefined) {
        contents.Owner = __expectString(output["Owner"]);
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = __expectString(output["Protocol"]);
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = __expectString(output["Endpoint"]);
    }
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = __expectString(output["TopicArn"]);
    }
    return contents;
};
const de_SubscriptionAttributesMap = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        acc[pair["key"]] = __expectString(pair["value"]);
        return acc;
    }, {});
};
const de_SubscriptionLimitExceededException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_SubscriptionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Subscription(entry, context);
    });
};
const de_Tag = (output, context) => {
    const contents = {};
    if (output["Key"] !== undefined) {
        contents.Key = __expectString(output["Key"]);
    }
    if (output["Value"] !== undefined) {
        contents.Value = __expectString(output["Value"]);
    }
    return contents;
};
const de_TagLimitExceededException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Tag(entry, context);
    });
};
const de_TagPolicyException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_TagResourceResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_ThrottledException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_TooManyEntriesInBatchRequestException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_Topic = (output, context) => {
    const contents = {};
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = __expectString(output["TopicArn"]);
    }
    return contents;
};
const de_TopicAttributesMap = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        acc[pair["key"]] = __expectString(pair["value"]);
        return acc;
    }, {});
};
const de_TopicLimitExceededException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_TopicsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Topic(entry, context);
    });
};
const de_UntagResourceResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_UserErrorException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const de_ValidationException = (output, context) => {
    const contents = {};
    if (output["Message"] !== undefined) {
        contents.Message = __expectString(output["Message"]);
    }
    return contents;
};
const de_VerificationException = (output, context) => {
    const contents = {};
    if (output["Message"] !== undefined) {
        contents.Message = __expectString(output["Message"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = __expectString(output["Status"]);
    }
    return contents;
};
const de_VerifySMSSandboxPhoneNumberResult = (output, context) => {
    const contents = {};
    return contents;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new __HttpRequest(contents);
};
const SHARED_HEADERS = {
    "content-type": "application/x-www-form-urlencoded",
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        const parser = new XMLParser({
            attributeNamePrefix: "",
            htmlEntities: true,
            ignoreAttributes: false,
            ignoreDeclaration: true,
            parseTagValue: false,
            trimValues: false,
            tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        const parsedObj = parser.parse(encoded);
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
    }
    return value;
};
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error?.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};
