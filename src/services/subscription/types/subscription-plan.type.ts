import { SubscriptionPlan } from "../../../types";
import { SubscriptionPlanFeatureFields, subscriptionPlanFeatureQuery, SubscriptionPlanFields, subscriptionPlanQuery } from "../subscription.entity";

export interface GetSubscriptionPlanRequest {
    subscriptionPlan: Partial<SubscriptionPlan>;
}
export interface GetSubscriptionPlanResponse {
    subscriptionPlan: SubscriptionPlan
}
export const getSubscriptionPlanResponse: (keyof GetSubscriptionPlanResponse)[] = [
    "subscriptionPlan"
]
export interface GetSubscriptionPlanResponseNestedFields {
    subscriptionPlan: SubscriptionPlanFields
    features: SubscriptionPlanFeatureFields
}
export const _getSubscriptionPlanResponseNestedFields: 
Omit<GetSubscriptionPlanResponseNestedFields, "subscriptionPlan"> = {
    features: subscriptionPlanFeatureQuery
}
export const getSubscriptionPlanResponseNestedFields: GetSubscriptionPlanResponseNestedFields = {
    ..._getSubscriptionPlanResponseNestedFields,
    subscriptionPlan: subscriptionPlanQuery
}


// gets
export interface GetSubscriptionPlansRequest {
    subscriptionPlan?: Partial<SubscriptionPlan>;
    subscriptionPlanIds?: string[];
    search?: string;
    limit: number;
    skip: number;
}
export interface GetSubscriptionPlansResponse {
    subscriptionPlans: SubscriptionPlan[]
    total: number
}
export const getSubscriptionPlansResponse: (keyof GetSubscriptionPlansResponse)[] = [
    "subscriptionPlans",
    "total"
]
export interface GetSubscriptionPlansResponseNestedFields extends 
Omit<GetSubscriptionPlanResponseNestedFields, "subscriptionPlan"> {
    subscriptionPlans: SubscriptionPlanFields
}
export const getSubscriptionPlansResponseNestedFields: GetSubscriptionPlansResponseNestedFields = {
    ..._getSubscriptionPlanResponseNestedFields,
    subscriptionPlans: subscriptionPlanQuery
}

// create 
export interface AddSubscriptionPlanRequest {
    subscriptionPlan: Partial<SubscriptionPlan>;
}
export interface AddSubscriptionPlanResponse {
    subscriptionPlan: SubscriptionPlan
}
export const addSubscriptionPlanResponse: (keyof AddSubscriptionPlanResponse)[] = getSubscriptionPlanResponse;
export type AddSubscriptionPlanResponseNestedFields = GetSubscriptionPlanResponseNestedFields;
export const addSubscriptionPlanResponseNestedFields: AddSubscriptionPlanResponseNestedFields = getSubscriptionPlanResponseNestedFields;

// update
export interface UpdateSubscriptionPlanRequest {
    subscriptionPlanId: string;
    subscriptionPlan: Partial<SubscriptionPlan>;
}
export type  UpdateSubscriptionPlanResponse = GetSubscriptionPlanResponse;
export const updateSubscriptionPlanResponse: (keyof UpdateSubscriptionPlanResponse)[] = getSubscriptionPlanResponse;
export type UpdateSubscriptionPlanResponseNestedFields = GetSubscriptionPlanResponseNestedFields;
export const updateSubscriptionPlanResponseNestedFields: UpdateSubscriptionPlanResponseNestedFields = getSubscriptionPlanResponseNestedFields;

// remove 
export interface RemoveSubscriptionPlanRequest {
    subscriptionPlanId: string;
}
export interface RemoveSubscriptionPlanResponse {
    subscriptionPlanId: string;
}
export const removeSubscriptionPlanResponse: (keyof RemoveSubscriptionPlanResponse)[] = [
    "subscriptionPlanId"
];
