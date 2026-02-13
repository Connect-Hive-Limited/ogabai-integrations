export interface SubscriptionPlanFeature {
    id: string;
    title: string;
    description: string;
    featureStatus: "active" | "inactive";
    createdAt: string;
}
export interface SubscriptionPlan {
    id: string;
    code: string;
    title: string;
    description: string;
    price: number;
    currency: string;
    period: "none" | "monthly" | "yearly";
    trialDays: number;
    subscriptionPlanStatus: "none" | "active" | "inactive";
    createdAt: string;
    updatedAt: string;
    subscriptionPlanFeatureIds: string[];
    features: SubscriptionPlanFeature[]
}
export interface Subscription {
    id: string;
    userId: string;
    subscriptionPlanId: string;
    price: number;
    currency: string;
    subscriptionStatus: "active"|"past_due"|"cancelled"|"trail"
    currentPeriodStart: string;
    currentPeriodEnd: string;
    trialEnd: string;
    cancelAtPeriodEnd: string;
    canceledAt: string;
    defaultPaymentMethodId: string;
    version: number;
    createdAt: string;
    updatedAt: string;
}