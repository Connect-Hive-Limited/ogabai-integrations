import { Subscription, SubscriptionPlan, 
    SubscriptionPlanFeature,
    SubscriptionPlanFeatureBehaviour,
    SubscriptionPlanFeatureLimitValue, 
    SubscriptionPlanFeatureAccessValue,
    SubscriptionPlanFeatureBehaviourValue
} from "../../types";

export type SubscriptionPlanFeatureFields = (keyof SubscriptionPlanFeature)[];
export type SubscriptionPlanFields = (keyof SubscriptionPlan)[];
export type SubscriptionFields = (keyof Subscription)[]
export type SubscriptionPlanFeatureBehaviourFields = (keyof SubscriptionPlanFeatureBehaviour)[];


export type SubscriptionLimitValueFields = (keyof SubscriptionPlanFeatureLimitValue)[];
export type SubscriptionAccessValueFields = (keyof SubscriptionPlanFeatureAccessValue)[];
export type SubscriptionBehaviourValueFields = (keyof SubscriptionPlanFeatureBehaviourValue)[];



export const subscriptionLimitValueFields: SubscriptionLimitValueFields = [
    "featureKey",
    "limitValue"
]
export const subscriptionAccessValueFields: SubscriptionAccessValueFields = [
    "featureKey",
    "featureAccessValue"
]
export const subscriptionBehaviourValueFields: SubscriptionBehaviourValueFields = [
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
    "id", 
    "title", 
    "description", 
    "createdAt"
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