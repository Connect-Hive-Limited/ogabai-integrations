import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const subscriptionPlanFeatureDefinitionSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getSubscriptionPlanFeatureDefinition",
        variables: "($subscriptionPlanFeatureDefinition: SubscriptionPlanFeatureDefinitionInput!)",
        field: "(subscriptionPlanFeatureDefinition: $subscriptionPlanFeatureDefinition)",
    },
    list: {
        operation: "query",
        name: "getSubscriptionPlanFeatureDefinitions",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $subscriptionPlanFeatureDefinition: SubscriptionPlanFeatureDefinitionInput, $subscriptionPlanFeatureDefinitionIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, subscriptionPlanFeatureDefinition: $subscriptionPlanFeatureDefinition, subscriptionPlanFeatureDefinitionIds: $subscriptionPlanFeatureDefinitionIds)",
    },
    create: {
        operation: "mutation",
        name: "createSubscriptionPlanFeatureDefinition",
        variables: "($subscriptionPlanFeatureDefinition: SubscriptionPlanFeatureDefinitionInput!)",
        field: "(subscriptionPlanFeatureDefinition: $subscriptionPlanFeatureDefinition)",
    },
    update: {
        operation: "mutation",
        name: "updateSubscriptionPlanFeatureDefinition",
        variables: "($subscriptionPlanFeatureDefinitionId: String!, $subscriptionPlanFeatureDefinition: SubscriptionPlanFeatureDefinitionInput!)",
        field: "(subscriptionPlanFeatureDefinitionId: $subscriptionPlanFeatureDefinitionId, subscriptionPlanFeatureDefinition: $subscriptionPlanFeatureDefinition)",
    },
    delete: {
        operation: "mutation",
        name: "removeSubscriptionPlanFeatureDefinition",
        variables: "($subscriptionPlanFeatureDefinitionId: String!)",
        field: "(subscriptionPlanFeatureDefinitionId: $subscriptionPlanFeatureDefinitionId)",
    },
}