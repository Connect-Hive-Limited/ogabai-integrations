import { GraphQLClient } from "../../client";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";
import { SubscriptionTrialCRUD, subscriptionTrialDeleteIntegration, subscriptionTrialIntegration, subscriptionTrialListIntegration } from "./types/subscription-trial.type";
import { subscriptionTrialSchema } from "./schemas/subscription-trial.schema";

export const createSubscriptionTrialService = (client: GraphQLClient) =>  ({
    createSubscriptionTrial: createOperationExecutor<
        "createSubscriptionTrial",
        SubscriptionTrialCRUD["CreateRequest"],
        SubscriptionTrialCRUD["CreateResponse"],
        typeof subscriptionTrialIntegration.create.nestedFields
    >(
        client,
        "createSubscriptionTrial",
        {
            schema: buildSchema(subscriptionTrialSchema.create),
            defaultRootFields: subscriptionTrialIntegration.create.responseFields,
            defaultNestedFields: subscriptionTrialIntegration.create.nestedFields,
        }
    ),
    updateSubscriptionTrial: createOperationExecutor<
        "updateSubscriptionTrial",
        SubscriptionTrialCRUD["UpdateRequest"],
        SubscriptionTrialCRUD["UpdateResponse"],
        typeof subscriptionTrialIntegration.update.nestedFields
    >(
        client,
        "updateSubscriptionTrial",
        {
            schema: buildSchema(subscriptionTrialSchema.update),
            defaultRootFields: subscriptionTrialIntegration.update.responseFields,
            defaultNestedFields: subscriptionTrialIntegration.update.nestedFields,
        }
    ),
    getSubscriptionTrial: createOperationExecutor<
        "getSubscriptionTrial",
        SubscriptionTrialCRUD["GetRequest"],
        SubscriptionTrialCRUD["GetResponse"],
        typeof subscriptionTrialIntegration.get.nestedFields
    >(
        client,
        "getSubscriptionTrial",
        {
            schema: buildSchema(subscriptionTrialSchema.get),
            defaultRootFields: subscriptionTrialIntegration.get.responseFields,
            defaultNestedFields: subscriptionTrialIntegration.get.nestedFields,
        }
    ),
    removeSubscriptionTrial: createOperationExecutor<
        "removeSubscriptionTrial",
        SubscriptionTrialCRUD["DeleteRequest"],
        SubscriptionTrialCRUD["DeleteResponse"],
        {}
    >(
        client,
        "removeSubscriptionTrial",
        {
            schema: buildSchema(subscriptionTrialSchema.delete),
            defaultRootFields: subscriptionTrialDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    getSubscriptionTrials: createOperationExecutor<
        "getSubscriptionTrials",
        SubscriptionTrialCRUD["ListRequest"],
        SubscriptionTrialCRUD["ListResponse"],
        typeof subscriptionTrialListIntegration.nestedFields
    >(
        client,
        "getSubscriptionTrials",
        {
            schema: buildSchema(subscriptionTrialSchema.list),
            defaultRootFields: [...subscriptionTrialListIntegration.responseFields],
            defaultNestedFields: subscriptionTrialListIntegration.nestedFields,
        }
    ),
    
})

export type SubscriptionTrialService = ReturnType<typeof createSubscriptionTrialService>;