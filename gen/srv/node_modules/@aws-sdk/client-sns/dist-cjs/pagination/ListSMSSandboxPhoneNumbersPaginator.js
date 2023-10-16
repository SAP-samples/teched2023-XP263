"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSMSSandboxPhoneNumbers = void 0;
const ListSMSSandboxPhoneNumbersCommand_1 = require("../commands/ListSMSSandboxPhoneNumbersCommand");
const SNSClient_1 = require("../SNSClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListSMSSandboxPhoneNumbersCommand_1.ListSMSSandboxPhoneNumbersCommand(input), ...args);
};
async function* paginateListSMSSandboxPhoneNumbers(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SNSClient_1.SNSClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SNS | SNSClient");
        }
        yield page;
        const prevToken = token;
        token = page.NextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListSMSSandboxPhoneNumbers = paginateListSMSSandboxPhoneNumbers;
