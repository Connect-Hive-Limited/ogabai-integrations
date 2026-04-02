import { GraphQLClient } from "../../client";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";
import { SubscriptionPlanCRUD, subscriptionPlanDeleteIntegration, subscriptionPlanIntegration, subscriptionPlanListIntegration } from "./types/subscription-plan.type";
import { subscriptionPlanSchema } from "./schemas/subscription-plan.schema";

export const createSubscriptionPlanService = (client: GraphQLClient) =>  ({
    createSubscriptionPlan: createOperationExecutor<
        "createSubscriptionPlan",
        SubscriptionPlanCRUD["CreateRequest"],
        SubscriptionPlanCRUD["CreateResponse"],
        typeof subscriptionPlanIntegration.create.nestedFields
    >(
        client,
        "createSubscriptionPlan",
        {
            schema: buildSchema(subscriptionPlanSchema.create),
            defaultRootFields: subscriptionPlanIntegration.create.responseFields,
            defaultNestedFields: subscriptionPlanIntegration.create.nestedFields,
        }
    ),
    updateSubscriptionPlan: createOperationExecutor<
        "updateSubscriptionPlan",
        SubscriptionPlanCRUD["UpdateRequest"],
        SubscriptionPlanCRUD["UpdateResponse"],
        typeof subscriptionPlanIntegration.update.nestedFields
    >(
        client,
        "updateSubscriptionPlan",
        {
            schema: buildSchema(subscriptionPlanSchema.update),
            defaultRootFields: subscriptionPlanIntegration.update.responseFields,
            defaultNestedFields: subscriptionPlanIntegration.update.nestedFields,
        }
    ),
    getSubscriptionPlan: createOperationExecutor<
        "getSubscriptionPlan",
        SubscriptionPlanCRUD["GetRequest"],
        SubscriptionPlanCRUD["GetResponse"],
        typeof subscriptionPlanIntegration.get.nestedFields
    >(
        client,
        "getSubscriptionPlan",
        {
            schema: buildSchema(subscriptionPlanSchema.get),
            defaultRootFields: subscriptionPlanIntegration.get.responseFields,
            defaultNestedFields: subscriptionPlanIntegration.get.nestedFields,
        }
    ),
    removeSubscriptionPlan: createOperationExecutor<
        "removeSubscriptionPlan",
        SubscriptionPlanCRUD["DeleteRequest"],
        SubscriptionPlanCRUD["DeleteResponse"],
        {}
    >(
        client,
        "removeSubscriptionPlan",
        {
            schema: buildSchema(subscriptionPlanSchema.delete),
            defaultRootFields: subscriptionPlanDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    getSubscriptionPlans: createOperationExecutor<
        "getSubscriptionPlans",
        SubscriptionPlanCRUD["ListRequest"],
        SubscriptionPlanCRUD["ListResponse"],
        typeof subscriptionPlanListIntegration.nestedFields
    >(
        client,
        "getSubscriptionPlans",
        {
            schema: buildSchema(subscriptionPlanSchema.list),
            defaultRootFields: [...subscriptionPlanListIntegration.responseFields],
            defaultNestedFields: subscriptionPlanListIntegration.nestedFields,
        }
    ),
    
})

export type SubscriptionPlanService = ReturnType<typeof createSubscriptionPlanService>;