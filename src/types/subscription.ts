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
    features: SubscriptionPlanFeature[]
}