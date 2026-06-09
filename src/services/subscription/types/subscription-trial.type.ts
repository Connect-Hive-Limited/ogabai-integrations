import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { SubscriptionTrial } from "../../../types";
import { subscriptionTrialQuery } from "../subscription.entity";

const ENTITY = "subscriptionTrial" as const;

export type SubscriptionTrialCRUD =
  EntityCRUD<SubscriptionTrial, typeof ENTITY>;

export const subscriptionTrialIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: subscriptionTrialQuery,
  });


export const subscriptionTrialListIntegration =
  createListIntegration({
    key: ENTITY,
    fields: subscriptionTrialQuery,
  });

export const subscriptionTrialDeleteIntegration =
  createDeleteIntegration(ENTITY);
