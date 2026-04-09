import { Subscription, SubscriptionPlan, 
    SubscriptionPlanFeature,
    SubscriptionPlanFeatureBehaviour,
    SubscriptionPlanFeatureLimitValue, 
    SubscriptionPlanFeatureAccessValue,
    SubscriptionPlanFeatureBehaviourValue,
    SubscriptionPlanFeatureDefinition,
    SubscriptionTrial
} from "../../types";

export type SubscriptionPlanFeatureFields = (keyof SubscriptionPlanFeature)[];
export type SubscriptionPlanFields = (keyof SubscriptionPlan)[];
export type SubscriptionFields = (keyof Subscription)[]
export type SubscriptionPlanFeatureBehaviourFields = (keyof SubscriptionPlanFeatureBehaviour)[];
export type SubscriptionPlanFeatureDefinitionFields = (keyof SubscriptionPlanFeatureDefinition)[];


export type SubscriptionLimitValueFields = (keyof SubscriptionPlanFeatureLimitValue)[];
export type SubscriptionAccessValueFields = (keyof SubscriptionPlanFeatureAccessValue)[];
export type SubscriptionBehaviourValueFields = (keyof SubscriptionPlanFeatureBehaviourValue)[];

export type SubscriptionTrialFields = (keyof SubscriptionTrial)[];



export const subscriptionTrialQuery: SubscriptionTrialFields = [
    "createdAt",
    "endedAt",
    "id",
    "planId",
    "storeId",
    "userId"
]
export const subscriptionPlanFeatureDefinitionQuery: SubscriptionPlanFeatureDefinitionFields = [
    "id",
    "title",
    "description",
    "subscriptionPlanFeatureKey",
    "featureDefnitionStatus",
    "accessDefinition",
    "limitDefinition",
    "behaviourDefinition",
    "createdAt",
]
export const subscriptionLimitValueQuery: SubscriptionLimitValueFields = [
    "featureKey",
    "limitValue"
]
export const subscriptionAccessValueQuery: SubscriptionAccessValueFields = [
    "featureKey",
    "featureAccessValue"
]
export const subscriptionBehaviourValueQuery: SubscriptionBehaviourValueFields = [
    "featureKey",
    "behaviourIds"
]
export const subscriptionPlanFeatureBehaviourQuery: SubscriptionPlanFeatureBehaviourFields = [
    "id",
    "createdAt",
    "description",
    "shortname",
    "subscriptionPlanFeatureKey",
    "title",
]
export const subscriptionQuery: SubscriptionFields = [
    "cancelAtPeriodEnd",
    "canceledAt",
    "createdAt",
    "currency",
    "currentPeriodEnd",
    "currentPeriodStart",
    "defaultPaymentMethodId",
    "id",
    "price",
    "subscriptionPlanId",
    "subscriptionStatus",
    "trialEnd",
    "updatedAt",
    "userId",
    "version"
]
export const subscriptionPlanFeatureQuery: SubscriptionPlanFeatureFields = [
    "limitValue",
    "accessValue",
    "behaviourIds",
    "subscriptionPlanFeatureKey",
]
export const subscriptionPlanQuery: SubscriptionPlanFields = [
    "id", 
    "code", 
    "title", 
    "description", 
    "currency", 
    "period", 
    "trialDays", 
    "subscriptionPlanStatus", 
    "createdAt", 
    "updatedAt", 
    "features", 
    "monthlyPlanPrice",
    "annuallyPlanPrice"
]