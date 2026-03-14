import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const applicationFeatureSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getApplicationFeature",
        variables: "($applicationFeature: ApplicationFeatureInput!)",
        field: "(applicationFeature: $applicationFeature)",
    },
    list: {
        operation: "query",
        name: "getApplicationFeatures",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $applicationFeature: ApplicationFeatureInput, $applicationFeatureIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, applicationFeature: $applicationFeature, applicationFeatureIds: $applicationFeatureIds)",
    },
    create: {
        operation: "mutation",
        name: "createApplicationFeature",
        variables: "($applicationFeature: ApplicationFeatureInput!)",
        field: "(applicationFeature: $applicationFeature)",
    },
    update: {
        operation: "mutation",
        name: "updateApplicationFeature",
        variables: "($applicationFeatureId: String!, $applicationFeature: ApplicationFeatureInput!)",
        field: "(applicationFeatureId: $applicationFeatureId, applicationFeature: $applicationFeature)",
    },
    delete: {
        operation: "mutation",
        name: "removeApplicationFeature",
        variables: "($applicationFeatureId: String!)",
        field: "(applicationFeatureId: $applicationFeatureId)",
    },
}