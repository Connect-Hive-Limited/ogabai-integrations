import { GraphQLClient } from "../../client";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";
import { SubscriptionPlanFeatureDefinitionCRUD, subscriptionPlanFeatureDefinitionDeleteIntegration, subscriptionPlanFeatureDefinitionIntegration, subscriptionPlanFeatureDefinitionListIntegration } from "./types/subscription-plan-feature-definition.type";
import { subscriptionPlanFeatureDefinitionSchema } from "./schemas/subscription-plan-feature-definition.schema";

export const createSubscriptionPlanFeatureDefinitionService = (client: GraphQLClient) =>  ({
    createSubscriptionPlanFeatureDefinition: createOperationExecutor<
        "createSubscriptionPlanFeatureDefinition",
        SubscriptionPlanFeatureDefinitionCRUD["CreateRequest"],
        SubscriptionPlanFeatureDefinitionCRUD["CreateResponse"],
        typeof subscriptionPlanFeatureDefinitionIntegration.create.nestedFields
    >(
        client,
        "createSubscriptionPlanFeatureDefinition",
        {
            schema: buildSchema(subscriptionPlanFeatureDefinitionSchema.create),
            defaultRootFields: subscriptionPlanFeatureDefinitionIntegration.create.responseFields,
            defaultNestedFields: subscriptionPlanFeatureDefinitionIntegration.create.nestedFields,
        }
    ),
    updateSubscriptionPlanFeatureDefinition: createOperationExecutor<
        "updateSubscriptionPlanFeatureDefinition",
        SubscriptionPlanFeatureDefinitionCRUD["UpdateRequest"],
        SubscriptionPlanFeatureDefinitionCRUD["UpdateResponse"],
        typeof subscriptionPlanFeatureDefinitionIntegration.update.nestedFields
    >(
        client,
        "updateSubscriptionPlanFeatureDefinition",
        {
            schema: buildSchema(subscriptionPlanFeatureDefinitionSchema.update),
            defaultRootFields: subscriptionPlanFeatureDefinitionIntegration.update.responseFields,
            defaultNestedFields: subscriptionPlanFeatureDefinitionIntegration.update.nestedFields,
        }
    ),
    getSubscriptionPlanFeatureDefinition: createOperationExecutor<
        "getSubscriptionPlanFeatureDefinition",
        SubscriptionPlanFeatureDefinitionCRUD["GetRequest"],
        SubscriptionPlanFeatureDefinitionCRUD["GetResponse"],
        typeof subscriptionPlanFeatureDefinitionIntegration.get.nestedFields
    >(
        client,
        "getSubscriptionPlanFeatureDefinition",
        {
            schema: buildSchema(subscriptionPlanFeatureDefinitionSchema.get),
            defaultRootFields: subscriptionPlanFeatureDefinitionIntegration.get.responseFields,
            defaultNestedFields: subscriptionPlanFeatureDefinitionIntegration.get.nestedFields,
        }
    ),
    removeSubscriptionPlanFeatureDefinition: createOperationExecutor<
        "removeSubscriptionPlanFeatureDefinition",
        SubscriptionPlanFeatureDefinitionCRUD["DeleteRequest"],
        SubscriptionPlanFeatureDefinitionCRUD["DeleteResponse"],
        {}
    >(
        client,
        "removeSubscriptionPlanFeatureDefinition",
        {
            schema: buildSchema(subscriptionPlanFeatureDefinitionSchema.delete),
            defaultRootFields: subscriptionPlanFeatureDefinitionDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    getSubscriptionPlanFeatureDefinitions: createOperationExecutor<
        "getSubscriptionPlanFeatureDefinitions",
        SubscriptionPlanFeatureDefinitionCRUD["ListRequest"],
        SubscriptionPlanFeatureDefinitionCRUD["ListResponse"],
        typeof subscriptionPlanFeatureDefinitionListIntegration.nestedFields
    >(
        client,
        "getSubscriptionPlanFeatureDefinitions",
        {
            schema: buildSchema(subscriptionPlanFeatureDefinitionSchema.list),
            defaultRootFields: [...subscriptionPlanFeatureDefinitionListIntegration.responseFields],
            defaultNestedFields: subscriptionPlanFeatureDefinitionListIntegration.nestedFields,
        }
    ),
    
})

export type SubscriptionPlanFeatureDefinitionService = ReturnType<typeof createSubscriptionPlanFeatureDefinitionService>;