import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";

export const featureUserWhitelistSchema: Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getFeatureUserWhitelist",
        variables: "($featureUserWhitelist: FeatureUserWhitelistInput!)",
        field: "(featureUserWhitelist: $featureUserWhitelist)",
    },
    list: {
        operation: "query",
        name: "listFeatureUserWhitelists",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $featureUserWhitelist: FeatureUserWhitelistInput, $featureUserWhitelistIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, featureUserWhitelist: $featureUserWhitelist, featureUserWhitelistIds: $featureUserWhitelistIds)",
    },
    create: {
        operation: "mutation",
        name: "createFeatureUserWhitelist",
        variables: "($featureUserWhitelist: FeatureUserWhitelistInput!)",
        field: "(featureUserWhitelist: $featureUserWhitelist)",
    },
    update: {
        operation: "mutation",
        name: "updateFeatureUserWhitelist",
        variables: "($featureUserWhitelistId: String!, $featureUserWhitelist: FeatureUserWhitelistInput!)",
        field: "(featureUserWhitelistId: $featureUserWhitelistId, featureUserWhitelist: $featureUserWhitelist)",
    },
    delete: {
        operation: "mutation",
        name: "deleteFeatureUserWhitelist",
        variables: "($featureUserWhitelistId: String!)",
        field: "(featureUserWhitelistId: $featureUserWhitelistId)",
    },
}