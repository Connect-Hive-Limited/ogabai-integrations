import { SubscriptionPlan, 
    SubscriptionPlanFeature } from "../../types";

export type SubscriptionPlanFeatureFields = (keyof SubscriptionPlanFeature)[];
export type SubscriptionPlanFields = (keyof SubscriptionPlan)[];


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
    "price", 
    "currency", 
    "period", 
    "trialDays", 
    "subscriptionPlanStatus", 
    "createdAt", 
    "updatedAt", 
    "features"
]