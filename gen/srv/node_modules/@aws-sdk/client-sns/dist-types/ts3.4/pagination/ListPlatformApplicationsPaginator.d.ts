import { Paginator } from "@smithy/types";
import {
  ListPlatformApplicationsCommandInput,
  ListPlatformApplicationsCommandOutput,
} from "../commands/ListPlatformApplicationsCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
export declare function paginateListPlatformApplications(
  config: SNSPaginationConfiguration,
  input: ListPlatformApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListPlatformApplicationsCommandOutput>;
