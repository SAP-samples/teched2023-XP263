"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationException = exports.TooManyEntriesInBatchRequestException = exports.InvalidBatchEntryIdException = exports.EmptyBatchRequestException = exports.BatchRequestTooLongException = exports.BatchEntryIdsNotDistinctException = exports.PlatformApplicationDisabledException = exports.KMSThrottlingException = exports.KMSOptInRequired = exports.KMSNotFoundException = exports.KMSInvalidStateException = exports.KMSDisabledException = exports.KMSAccessDeniedException = exports.InvalidParameterValueException = exports.EndpointDisabledException = exports.SMSSandboxPhoneNumberVerificationStatus = exports.ValidationException = exports.RouteType = exports.NumberCapability = exports.ResourceNotFoundException = exports.TopicLimitExceededException = exports.TagPolicyException = exports.TagLimitExceededException = exports.StaleTagException = exports.InvalidSecurityException = exports.ConcurrentAccessException = exports.UserErrorException = exports.OptedOutException = exports.LanguageCodeString = exports.SubscriptionLimitExceededException = exports.FilterPolicyLimitExceededException = exports.ThrottledException = exports.NotFoundException = exports.InvalidParameterException = exports.InternalErrorException = exports.AuthorizationErrorException = void 0;
const SNSServiceException_1 = require("./SNSServiceException");
class AuthorizationErrorException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "AuthorizationErrorException",
            $fault: "client",
            ...opts,
        });
        this.name = "AuthorizationErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AuthorizationErrorException.prototype);
    }
}
exports.AuthorizationErrorException = AuthorizationErrorException;
class InternalErrorException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "InternalErrorException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalErrorException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalErrorException.prototype);
    }
}
exports.InternalErrorException = InternalErrorException;
class InvalidParameterException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "InvalidParameterException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidParameterException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidParameterException.prototype);
    }
}
exports.InvalidParameterException = InvalidParameterException;
class NotFoundException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "NotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "NotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, NotFoundException.prototype);
    }
}
exports.NotFoundException = NotFoundException;
class ThrottledException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "ThrottledException",
            $fault: "client",
            ...opts,
        });
        this.name = "ThrottledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ThrottledException.prototype);
    }
}
exports.ThrottledException = ThrottledException;
class FilterPolicyLimitExceededException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "FilterPolicyLimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "FilterPolicyLimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, FilterPolicyLimitExceededException.prototype);
    }
}
exports.FilterPolicyLimitExceededException = FilterPolicyLimitExceededException;
class SubscriptionLimitExceededException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "SubscriptionLimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "SubscriptionLimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SubscriptionLimitExceededException.prototype);
    }
}
exports.SubscriptionLimitExceededException = SubscriptionLimitExceededException;
exports.LanguageCodeString = {
    de_DE: "de-DE",
    en_GB: "en-GB",
    en_US: "en-US",
    es_419: "es-419",
    es_ES: "es-ES",
    fr_CA: "fr-CA",
    fr_FR: "fr-FR",
    it_IT: "it-IT",
    jp_JP: "ja-JP",
    kr_KR: "kr-KR",
    pt_BR: "pt-BR",
    zh_CN: "zh-CN",
    zh_TW: "zh-TW",
};
class OptedOutException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "OptedOutException",
            $fault: "client",
            ...opts,
        });
        this.name = "OptedOutException";
        this.$fault = "client";
        Object.setPrototypeOf(this, OptedOutException.prototype);
    }
}
exports.OptedOutException = OptedOutException;
class UserErrorException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "UserErrorException",
            $fault: "client",
            ...opts,
        });
        this.name = "UserErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UserErrorException.prototype);
    }
}
exports.UserErrorException = UserErrorException;
class ConcurrentAccessException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "ConcurrentAccessException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConcurrentAccessException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConcurrentAccessException.prototype);
    }
}
exports.ConcurrentAccessException = ConcurrentAccessException;
class InvalidSecurityException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "InvalidSecurityException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidSecurityException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidSecurityException.prototype);
    }
}
exports.InvalidSecurityException = InvalidSecurityException;
class StaleTagException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "StaleTagException",
            $fault: "client",
            ...opts,
        });
        this.name = "StaleTagException";
        this.$fault = "client";
        Object.setPrototypeOf(this, StaleTagException.prototype);
    }
}
exports.StaleTagException = StaleTagException;
class TagLimitExceededException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "TagLimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "TagLimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TagLimitExceededException.prototype);
    }
}
exports.TagLimitExceededException = TagLimitExceededException;
class TagPolicyException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "TagPolicyException",
            $fault: "client",
            ...opts,
        });
        this.name = "TagPolicyException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TagPolicyException.prototype);
    }
}
exports.TagPolicyException = TagPolicyException;
class TopicLimitExceededException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "TopicLimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "TopicLimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TopicLimitExceededException.prototype);
    }
}
exports.TopicLimitExceededException = TopicLimitExceededException;
class ResourceNotFoundException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
exports.NumberCapability = {
    MMS: "MMS",
    SMS: "SMS",
    VOICE: "VOICE",
};
exports.RouteType = {
    Premium: "Premium",
    Promotional: "Promotional",
    Transactional: "Transactional",
};
class ValidationException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts,
        });
        this.name = "ValidationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ValidationException.prototype);
        this.Message = opts.Message;
    }
}
exports.ValidationException = ValidationException;
exports.SMSSandboxPhoneNumberVerificationStatus = {
    Pending: "Pending",
    Verified: "Verified",
};
class EndpointDisabledException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "EndpointDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "EndpointDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EndpointDisabledException.prototype);
    }
}
exports.EndpointDisabledException = EndpointDisabledException;
class InvalidParameterValueException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "InvalidParameterValueException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidParameterValueException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    }
}
exports.InvalidParameterValueException = InvalidParameterValueException;
class KMSAccessDeniedException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "KMSAccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSAccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSAccessDeniedException.prototype);
    }
}
exports.KMSAccessDeniedException = KMSAccessDeniedException;
class KMSDisabledException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "KMSDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSDisabledException.prototype);
    }
}
exports.KMSDisabledException = KMSDisabledException;
class KMSInvalidStateException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "KMSInvalidStateException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSInvalidStateException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSInvalidStateException.prototype);
    }
}
exports.KMSInvalidStateException = KMSInvalidStateException;
class KMSNotFoundException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "KMSNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSNotFoundException.prototype);
    }
}
exports.KMSNotFoundException = KMSNotFoundException;
class KMSOptInRequired extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "KMSOptInRequired",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSOptInRequired";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSOptInRequired.prototype);
    }
}
exports.KMSOptInRequired = KMSOptInRequired;
class KMSThrottlingException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "KMSThrottlingException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSThrottlingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSThrottlingException.prototype);
    }
}
exports.KMSThrottlingException = KMSThrottlingException;
class PlatformApplicationDisabledException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "PlatformApplicationDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "PlatformApplicationDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PlatformApplicationDisabledException.prototype);
    }
}
exports.PlatformApplicationDisabledException = PlatformApplicationDisabledException;
class BatchEntryIdsNotDistinctException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "BatchEntryIdsNotDistinctException",
            $fault: "client",
            ...opts,
        });
        this.name = "BatchEntryIdsNotDistinctException";
        this.$fault = "client";
        Object.setPrototypeOf(this, BatchEntryIdsNotDistinctException.prototype);
    }
}
exports.BatchEntryIdsNotDistinctException = BatchEntryIdsNotDistinctException;
class BatchRequestTooLongException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "BatchRequestTooLongException",
            $fault: "client",
            ...opts,
        });
        this.name = "BatchRequestTooLongException";
        this.$fault = "client";
        Object.setPrototypeOf(this, BatchRequestTooLongException.prototype);
    }
}
exports.BatchRequestTooLongException = BatchRequestTooLongException;
class EmptyBatchRequestException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "EmptyBatchRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "EmptyBatchRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EmptyBatchRequestException.prototype);
    }
}
exports.EmptyBatchRequestException = EmptyBatchRequestException;
class InvalidBatchEntryIdException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "InvalidBatchEntryIdException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidBatchEntryIdException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidBatchEntryIdException.prototype);
    }
}
exports.InvalidBatchEntryIdException = InvalidBatchEntryIdException;
class TooManyEntriesInBatchRequestException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "TooManyEntriesInBatchRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyEntriesInBatchRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyEntriesInBatchRequestException.prototype);
    }
}
exports.TooManyEntriesInBatchRequestException = TooManyEntriesInBatchRequestException;
class VerificationException extends SNSServiceException_1.SNSServiceException {
    constructor(opts) {
        super({
            name: "VerificationException",
            $fault: "client",
            ...opts,
        });
        this.name = "VerificationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, VerificationException.prototype);
        this.Message = opts.Message;
        this.Status = opts.Status;
    }
}
exports.VerificationException = VerificationException;
