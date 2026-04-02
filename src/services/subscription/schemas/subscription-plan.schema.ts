import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const subscriptionPlanSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getSubscriptionPlan",
        variables: "($subscriptionPlan: SubscriptionPlanInput!)",
        field: "(subscriptionPlan: $subscriptionPlan)",
    },
    list: {
        operation: "query",
        name: "getSubscriptionPlans",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $subscriptionPlan: SubscriptionPlanInput, $subscriptionPlanIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, subscriptionPlan: $subscriptionPlan, subscriptionPlanIds: $subscriptionPlanIds)",
    },
    create: {
        operation: "mutation",
        name: "createSubscriptionPlan",
        variables: "($subscriptionPlan: SubscriptionPlanInput!)",
        field: "(subscriptionPlan: $subscriptionPlan)",
    },
    update: {
        operation: "mutation",
        name: "updateSubscriptionPlan",
        variables: "($subscriptionPlanId: String!, $subscriptionPlan: SubscriptionPlanInput!)",
        field: "(subscriptionPlanId: $subscriptionPlanId, subscriptionPlan: $subscriptionPlan)",
    },
    delete: {
        operation: "mutation",
        name: "removeSubscriptionPlan",
        variables: "($subscriptionPlanId: String!)",
        field: "(subscriptionPlanId: $subscriptionPlanId)",
    },
}