import { Subscription, SubscriptionPlan, 
    SubscriptionPlanFeature } from "../../types";

export type SubscriptionPlanFeatureFields = (keyof SubscriptionPlanFeature)[];
export type SubscriptionPlanFields = (keyof SubscriptionPlan)[];
export type SubscriptionFields = (keyof Subscription)[]



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
    "subscriptionPlanFeatureIds",
    "features", 
    "monthlyPlanPrice",
    "annuallyPlanPrice"
]