import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { SubscriptionPlanFeatureDefinition } from "../../../types";
import { subscriptionPlanFeatureDefinitionQuery } from "../subscription.entity";

const ENTITY = "subscriptionPlanFeatureDefinition" as const;

export type SubscriptionPlanFeatureDefinitionCRUD =
  EntityCRUD<SubscriptionPlanFeatureDefinition, typeof ENTITY>;

export const subscriptionPlanFeatureDefinitionIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: subscriptionPlanFeatureDefinitionQuery,
  });


export const subscriptionPlanFeatureDefinitionListIntegration =
  createListIntegration({
    key: ENTITY,
    fields: subscriptionPlanFeatureDefinitionQuery,
  });

export const subscriptionPlanFeatureDefinitionDeleteIntegration =
  createDeleteIntegration(ENTITY);
