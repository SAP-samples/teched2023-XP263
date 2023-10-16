"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListEndpointsByPlatformApplication = void 0;
const ListEndpointsByPlatformApplicationCommand_1 = require("../commands/ListEndpointsByPlatformApplicationCommand");
const SNSClient_1 = require("../SNSClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListEndpointsByPlatformApplicationCommand_1.ListEndpointsByPlatformApplicationCommand(input), ...args);
};
async function* paginateListEndpointsByPlatformApplication(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
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
exports.paginateListEndpointsByPlatformApplication = paginateListEndpointsByPlatformApplication;
