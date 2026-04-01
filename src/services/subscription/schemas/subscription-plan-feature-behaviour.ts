import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const subscriptionPlanFeatureBehaviourSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getSubscriptionPlanFeatureBehaviour",
        variables: "($subscriptionPlanFeatureBehaviour: SubscriptionPlanFeatureBehaviourInput!)",
        field: "(subscriptionPlanFeatureBehaviour: $subscriptionPlanFeatureBehaviour)",
    },
    list: {
        operation: "query",
        name: "getSubscriptionPlanFeatureBehaviours",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $subscriptionPlanFeatureBehaviour: SubscriptionPlanFeatureBehaviourInput, $subscriptionPlanFeatureBehaviourIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, subscriptionPlanFeatureBehaviour: $subscriptionPlanFeatureBehaviour, subscriptionPlanFeatureBehaviourIds: $subscriptionPlanFeatureBehaviourIds)",
    },
    create: {
        operation: "mutation",
        name: "createSubscriptionPlanFeatureBehaviour",
        variables: "($subscriptionPlanFeatureBehaviour: SubscriptionPlanFeatureBehaviourInput!)",
        field: "(subscriptionPlanFeatureBehaviour: $subscriptionPlanFeatureBehaviour)",
    },
    update: {
        operation: "mutation",
        name: "updateSubscriptionPlanFeatureBehaviour",
        variables: "($subscriptionPlanFeatureBehaviourId: String!, $subscriptionPlanFeatureBehaviour: SubscriptionPlanFeatureBehaviourInput!)",
        field: "(subscriptionPlanFeatureBehaviourId: $subscriptionPlanFeatureBehaviourId, subscriptionPlanFeatureBehaviour: $subscriptionPlanFeatureBehaviour)",
    },
    delete: {
        operation: "mutation",
        name: "removeSubscriptionPlanFeatureBehaviour",
        variables: "($subscriptionPlanFeatureBehaviourId: String!)",
        field: "(subscriptionPlanFeatureBehaviourId: $subscriptionPlanFeatureBehaviourId)",
    },
}