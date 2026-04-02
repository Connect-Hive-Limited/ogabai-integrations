import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { SubscriptionPlan } from "../../../types";
import { subscriptionPlanFeatureQuery, subscriptionPlanQuery } from "../subscription.entity";

const ENTITY = "subscriptionPlan" as const;

export type SubscriptionPlanCRUD =
  EntityCRUD<SubscriptionPlan, typeof ENTITY>;

export const subscriptionPlanIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: subscriptionPlanQuery,
    nested: {
        features: subscriptionPlanFeatureQuery
    }
  });


export const subscriptionPlanListIntegration =
  createListIntegration({
    key: "subscriptionPlans",
    fields: subscriptionPlanQuery,
    nested: {
        features: subscriptionPlanFeatureQuery
    }
  });

export const subscriptionPlanDeleteIntegration =
  createDeleteIntegration(ENTITY);
