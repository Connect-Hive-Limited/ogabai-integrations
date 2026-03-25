export type SubscriptionPlanFeaturePolicy =
  | "limit"
  | "access"
  | "tier"
  | "unlimited";

export type SubscriptionPlanFeatureStatus =
  | "active"
  | "inactive";

export type SubscriptionPlanFeatureTier =
  | "basic"
  | "standard"
  | "pro";

export type SubscriptionPlanFeatureKey =
  | "product"
  | "stock"
  | "sale"
  | "store"
  | "expense"
  | "scanAdd"
  | "report"
  | "order"
  | "export"
  | "offline"
  | "tax"
  | "loyalty"
  | "staff"
  | "scanSell"
  | "stockAlert";

export type SubscriptionPlanFeatureAccess =
  | "true"
  | "false";
export type SubscriptionPlanFeature = {
  id: string;
  title: string;
  description: string;

  subscriptionPlanFeatureKey: SubscriptionPlanFeatureKey;
  planId: string;

  meta?: Record<string, string>;

  featureStatus: SubscriptionPlanFeatureStatus;
  createdAt: string;
  limitValue: number;
  accessValue: SubscriptionPlanFeatureAccess;
  tierValue: SubscriptionPlanFeatureTier;
};


export interface SubscriptionPlan {
    id: string;
    code: string;
    title: string;
    description: string;
    currency: string;
    period: "none" | "monthly" | "yearly";
    trialDays: number;
    subscriptionPlanStatus: "none" | "active" | "inactive";
    createdAt: string;
    updatedAt: string;
    subscriptionPlanFeatureIds: string[];
    features: SubscriptionPlanFeature[]
    paystackPlanId?: string;
    monthlyPlanPrice: number;
    annuallyPlanPrice: number;
}

export interface SubscriptionPlanFeatureTierValue {
  featureKey: SubscriptionPlanFeatureKey;
  featureTierValue: SubscriptionPlanFeatureTier;
}
export interface SubscriptionPlanFeatureLimitValue {
  featureKey: SubscriptionPlanFeatureKey;
  limitValue: number;
}
export interface SubscriptionPlanFeatureAccessValue {
  featureKey: SubscriptionPlanFeatureKey;
  featureAccessValue: SubscriptionPlanFeatureAccess;
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
    subscriptionTiers: SubscriptionPlanFeatureTierValue[];
    subscriptionLimits: SubscriptionPlanFeatureLimitValue[];
    subscriptionAccesses: SubscriptionPlanFeatureAccessValue[];
}