"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListOriginationNumbers = void 0;
const ListOriginationNumbersCommand_1 = require("../commands/ListOriginationNumbersCommand");
const SNSClient_1 = require("../SNSClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListOriginationNumbersCommand_1.ListOriginationNumbersCommand(input), ...args);
};
async function* paginateListOriginationNumbers(config, input, ...additionalArguments) {
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
exports.paginateListOriginationNumbers = paginateListOriginationNumbers;
