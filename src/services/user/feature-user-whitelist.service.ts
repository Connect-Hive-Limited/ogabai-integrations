import { GraphQLClient } from "../../client";
import { buildSchema } from "../../helpers/schema-builder";
import { createOperationExecutor } from "../../helpers/service.factory";
import { featureUserWhitelistSchema } from "./schemas/feature-user-whitelist.schema";
import { FeatureUserWhitelistCRUD, featureUserWhitelistDeleteIntegration, featureUserWhitelistIntegration, featureUserWhitelistListIntegration } from "./types/feature-user-whitelist.type";


export const createFeatureUserWhitelistService = (client: GraphQLClient) =>  ({
    createFeatureUserWhitelist: createOperationExecutor<
        "createFeatureUserWhitelist",
        FeatureUserWhitelistCRUD["CreateRequest"],
        FeatureUserWhitelistCRUD["CreateResponse"] & { pin?: string },
        typeof featureUserWhitelistIntegration.create.nestedFields
    >(
        client,
        "createFeatureUserWhitelist",
        {
            schema: buildSchema(featureUserWhitelistSchema.create),
            defaultRootFields: [...featureUserWhitelistIntegration.create.responseFields, "pin"],
            defaultNestedFields: featureUserWhitelistIntegration.create.nestedFields,
        }
    ),
    updateFeatureUserWhitelist: createOperationExecutor<
        "updateFeatureUserWhitelist",
        FeatureUserWhitelistCRUD["UpdateRequest"],
        FeatureUserWhitelistCRUD["UpdateResponse"],
        typeof featureUserWhitelistIntegration.update.nestedFields
    >(
        client,
        "updateFeatureUserWhitelist",
        {
            schema: buildSchema(featureUserWhitelistSchema.update),
            defaultRootFields: featureUserWhitelistIntegration.update.responseFields,
            defaultNestedFields: featureUserWhitelistIntegration.update.nestedFields,
        }
    ),
    getFeatureUserWhitelist: createOperationExecutor<
        "getFeatureUserWhitelist",
        FeatureUserWhitelistCRUD["GetRequest"],
        FeatureUserWhitelistCRUD["GetResponse"],
        typeof featureUserWhitelistIntegration.get.nestedFields
    >(
        client,
        "getFeatureUserWhitelist",
        {
            schema: buildSchema(featureUserWhitelistSchema.get),
            defaultRootFields: featureUserWhitelistIntegration.get.responseFields,
            defaultNestedFields: featureUserWhitelistIntegration.get.nestedFields,
        }
    ),
    deleteFeatureUserWhitelist: createOperationExecutor<
        "deleteFeatureUserWhitelist",
        FeatureUserWhitelistCRUD["DeleteRequest"],
        FeatureUserWhitelistCRUD["DeleteResponse"],
        {}
    >(
        client,
        "deleteFeatureUserWhitelist",
        {
            schema: buildSchema(featureUserWhitelistSchema.delete),
            defaultRootFields: featureUserWhitelistDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    getFeatureUserWhitelists: createOperationExecutor<
        "getFeatureUserWhitelists",
        FeatureUserWhitelistCRUD["ListRequest"],
        FeatureUserWhitelistCRUD["ListResponse"],
        typeof featureUserWhitelistListIntegration.nestedFields
    >(
        client,
        "getFeatureUserWhitelists",
        {
            schema: buildSchema(featureUserWhitelistSchema.list),
            defaultRootFields: [...featureUserWhitelistListIntegration.responseFields],
            defaultNestedFields: featureUserWhitelistListIntegration.nestedFields,
        }
    ),
    
})

export type FeatureUserWhitelistService = ReturnType<typeof createFeatureUserWhitelistService>;