import { GraphQLClient } from "../../client";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";
import { SubscriptionPlanFeatureBehaviourCRUD, subscriptionPlanFeatureBehaviourDeleteIntegration, subscriptionPlanFeatureBehaviourIntegration, subscriptionPlanFeatureBehaviourListIntegration } from "./types/subscription-plan-feature-behaviour.type";
import { subscriptionPlanFeatureBehaviourSchema } from "./schemas/subscription-plan-feature-behaviour";

export const createSubscriptionPlanFeatureBehaviourService = (client: GraphQLClient) =>  ({
    createSubscriptionPlanFeatureBehaviour: createOperationExecutor<
        "createSubscriptionPlanFeatureBehaviour",
        SubscriptionPlanFeatureBehaviourCRUD["CreateRequest"],
        SubscriptionPlanFeatureBehaviourCRUD["CreateResponse"],
        typeof subscriptionPlanFeatureBehaviourIntegration.create.nestedFields
    >(
        client,
        "createSubscriptionPlanFeatureBehaviour",
        {
            schema: buildSchema(subscriptionPlanFeatureBehaviourSchema.create),
            defaultRootFields: subscriptionPlanFeatureBehaviourIntegration.create.responseFields,
            defaultNestedFields: subscriptionPlanFeatureBehaviourIntegration.create.nestedFields,
        }
    ),
    updateSubscriptionPlanFeatureBehaviour: createOperationExecutor<
        "updateSubscriptionPlanFeatureBehaviour",
        SubscriptionPlanFeatureBehaviourCRUD["UpdateRequest"],
        SubscriptionPlanFeatureBehaviourCRUD["UpdateResponse"],
        typeof subscriptionPlanFeatureBehaviourIntegration.update.nestedFields
    >(
        client,
        "updateSubscriptionPlanFeatureBehaviour",
        {
            schema: buildSchema(subscriptionPlanFeatureBehaviourSchema.update),
            defaultRootFields: subscriptionPlanFeatureBehaviourIntegration.update.responseFields,
            defaultNestedFields: subscriptionPlanFeatureBehaviourIntegration.update.nestedFields,
        }
    ),
    getSubscriptionPlanFeatureBehaviour: createOperationExecutor<
        "getSubscriptionPlanFeatureBehaviour",
        SubscriptionPlanFeatureBehaviourCRUD["GetRequest"],
        SubscriptionPlanFeatureBehaviourCRUD["GetResponse"],
        typeof subscriptionPlanFeatureBehaviourIntegration.get.nestedFields
    >(
        client,
        "getSubscriptionPlanFeatureBehaviour",
        {
            schema: buildSchema(subscriptionPlanFeatureBehaviourSchema.get),
            defaultRootFields: subscriptionPlanFeatureBehaviourIntegration.get.responseFields,
            defaultNestedFields: subscriptionPlanFeatureBehaviourIntegration.get.nestedFields,
        }
    ),
    removeSubscriptionPlanFeatureBehaviour: createOperationExecutor<
        "removeSubscriptionPlanFeatureBehaviour",
        SubscriptionPlanFeatureBehaviourCRUD["DeleteRequest"],
        SubscriptionPlanFeatureBehaviourCRUD["DeleteResponse"],
        {}
    >(
        client,
        "removeSubscriptionPlanFeatureBehaviour",
        {
            schema: buildSchema(subscriptionPlanFeatureBehaviourSchema.delete),
            defaultRootFields: subscriptionPlanFeatureBehaviourDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    getSubscriptionPlanFeatureBehaviours: createOperationExecutor<
        "getSubscriptionPlanFeatureBehaviours",
        SubscriptionPlanFeatureBehaviourCRUD["ListRequest"],
        SubscriptionPlanFeatureBehaviourCRUD["ListResponse"],
        typeof subscriptionPlanFeatureBehaviourListIntegration.nestedFields
    >(
        client,
        "getSubscriptionPlanFeatureBehaviours",
        {
            schema: buildSchema(subscriptionPlanFeatureBehaviourSchema.list),
            defaultRootFields: [...subscriptionPlanFeatureBehaviourListIntegration.responseFields],
            defaultNestedFields: subscriptionPlanFeatureBehaviourListIntegration.nestedFields,
        }
    ),
    
})

export type SubscriptionPlanFeatureBehaviourService = ReturnType<typeof createSubscriptionPlanFeatureBehaviourService>;