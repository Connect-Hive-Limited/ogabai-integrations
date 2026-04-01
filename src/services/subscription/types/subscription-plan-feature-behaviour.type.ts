import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { SubscriptionPlanFeatureBehaviour } from "../../../types";
import { subscriptionPlanFeatureBehaviourQuery } from "../subscription.entity";

const ENTITY = "subscriptionPlanFeatureBehaviour" as const;

export type SubscriptionPlanFeatureBehaviourCRUD =
  EntityCRUD<SubscriptionPlanFeatureBehaviour, typeof ENTITY>;

export const subscriptionPlanFeatureBehaviourIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: subscriptionPlanFeatureBehaviourQuery,
  });


export const subscriptionPlanFeatureBehaviourListIntegration =
  createListIntegration({
    key: "subscriptionPlanFeatureBehaviours",
    fields: subscriptionPlanFeatureBehaviourQuery,
  });

export const subscriptionPlanFeatureBehaviourDeleteIntegration =
  createDeleteIntegration(ENTITY);
