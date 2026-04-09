import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const subscriptionTrialSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getSubscriptionTrial",
        variables: "($subscriptionTrial: SubscriptionTrialInput!)",
        field: "(subscriptionTrial: $subscriptionTrial)",
    },
    list: {
        operation: "query",
        name: "getSubscriptionTrials",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $subscriptionTrial: SubscriptionTrialInput, $subscriptionTrialIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, subscriptionTrial: $subscriptionTrial, subscriptionTrialIds: $subscriptionTrialIds)",
    },
    create: {
        operation: "mutation",
        name: "createSubscriptionTrial",
        variables: "($subscriptionTrial: SubscriptionTrialInput!)",
        field: "(subscriptionTrial: $subscriptionTrial)",
    },
    update: {
        operation: "mutation",
        name: "updateSubscriptionTrial",
        variables: "($subscriptionTrialId: String!, $subscriptionTrial: SubscriptionTrialInput!)",
        field: "(subscriptionTrialId: $subscriptionTrialId, subscriptionTrial: $subscriptionTrial)",
    },
    delete: {
        operation: "mutation",
        name: "removeSubscriptionTrial",
        variables: "($subscriptionTrialId: String!)",
        field: "(subscriptionTrialId: $subscriptionTrialId)",
    },
}