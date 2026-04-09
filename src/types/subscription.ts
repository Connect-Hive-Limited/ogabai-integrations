export interface SubscriptionPlanFeatureBehaviour {
  id: string;
  subscriptionPlanFeatureKey: SubscriptionPlanFeatureKey;
  shortname: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface SubscriptionPlanFeatureDefinition {
  id: string;
  subscriptionPlanFeatureKey: SubscriptionPlanFeatureKey;
  title: string;
  description: string;
  featureDefnitionStatus: "active" | "inactive";
  limitDefinition: string;
  accessDefinition: string;
  behaviourDefinition: string;
  createdAt: string;
}

export type SubscriptionPlanFeatureStatus =
  | "active"
  | "inactive";

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

export const SubscriptionPlanFeatureKeyLabels: Partial<Record<SubscriptionPlanFeatureKey, string>> = {
  product: "Product",
  stock: "Stock",
  sale: "Sale",
  store: "Store",
  scanAdd: "Scan & Add",
  // expense: "Expense",
  // report: "Report",
  // order: "Order",
  // export: "Export",
  // offline: "Offline Mode",
  // tax: "Tax Management",
  // loyalty: "Loyalty Program",
  // staff: "Staff Management",
  // scanSell: "Scan & Sell",
  // stockAlert: "Stock Alert"
};

export type SubscriptionPlanFeatureAccess =
  | "yes"
  | "no";
export type SubscriptionPlanFeature = {
  subscriptionPlanFeatureKey: SubscriptionPlanFeatureKey;
  limitValue: number;
  accessValue: SubscriptionPlanFeatureAccess;
  behaviourIds: string[];
};

export interface SubscriptionTrial {
  id: string;
  userId: string;
  planId: string;
  storeId: string;
  createdAt: string;
  endedAt: string;
}

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
    features: SubscriptionPlanFeature[]
    paystackPlanId?: string;
    monthlyPlanPrice: number;
    annuallyPlanPrice: number;
}

export interface SubscriptionPlanFeatureBehaviourValue {
  featureKey: SubscriptionPlanFeatureKey;
  behaviourIds: string[];
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
    subscriptionTiers: SubscriptionPlanFeatureBehaviourValue[];
    subscriptionLimits: SubscriptionPlanFeatureLimitValue[];
    subscriptionAccesses: SubscriptionPlanFeatureAccessValue[];
}