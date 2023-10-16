"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPhoneNumbersOptedOut = void 0;
const ListPhoneNumbersOptedOutCommand_1 = require("../commands/ListPhoneNumbersOptedOutCommand");
const SNSClient_1 = require("../SNSClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListPhoneNumbersOptedOutCommand_1.ListPhoneNumbersOptedOutCommand(input), ...args);
};
async function* paginateListPhoneNumbersOptedOut(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        if (config.client instanceof SNSClient_1.SNSClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SNS | SNSClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListPhoneNumbersOptedOut = paginateListPhoneNumbersOptedOut;
