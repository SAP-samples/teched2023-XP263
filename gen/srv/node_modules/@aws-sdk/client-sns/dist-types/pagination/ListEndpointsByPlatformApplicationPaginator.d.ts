import { Paginator } from "@smithy/types";
import { ListEndpointsByPlatformApplicationCommandInput, ListEndpointsByPlatformApplicationCommandOutput } from "../commands/ListEndpointsByPlatformApplicationCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListEndpointsByPlatformApplication(config: SNSPaginationConfiguration, input: ListEndpointsByPlatformApplicationCommandInput, ...additionalArguments: any): Paginator<ListEndpointsByPlatformApplicationCommandOutput>;
