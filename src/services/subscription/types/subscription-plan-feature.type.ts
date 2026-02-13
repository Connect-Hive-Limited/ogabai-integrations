import { SubscriptionPlanFeature } from "../../../types";
import { SubscriptionPlanFeatureFields, subscriptionPlanFeatureQuery } from "../subscription.entity";

export interface GetSubscriptionPlanFeatureRequest {
    subscriptionPlanFeature: Partial<SubscriptionPlanFeature>;
}
export interface GetSubscriptionPlanFeatureResponse {
    subscriptionPlanFeature: SubscriptionPlanFeature
}
export const getSubscriptionPlanFeatureResponse: (keyof GetSubscriptionPlanFeatureResponse)[] = [
    "subscriptionPlanFeature"
]
export interface GetSubscriptionPlanFeatureResponseNestedFields {
    subscriptionPlanFeature: SubscriptionPlanFeatureFields
}
export const _getSubscriptionPlanFeatureResponseNestedFields: 
Omit<GetSubscriptionPlanFeatureResponseNestedFields, "subscriptionPlanFeature"> = {
    
}
export const getSubscriptionPlanFeatureResponseNestedFields: GetSubscriptionPlanFeatureResponseNestedFields = {
    ..._getSubscriptionPlanFeatureResponseNestedFields,
    subscriptionPlanFeature: subscriptionPlanFeatureQuery
}


// gets
export interface GetSubscriptionPlanFeaturesRequest {
    subscriptionPlanFeature?: Partial<SubscriptionPlanFeature>;
    subscriptionPlanFeatureIds?: string[];
    search?: string;
    limit: number;
    skip: number;
}
export interface GetSubscriptionPlanFeaturesResponse {
    subscriptionPlanFeatures: SubscriptionPlanFeature[]
    total: number
}
export const getSubscriptionPlanFeaturesResponse: (keyof GetSubscriptionPlanFeaturesResponse)[] = [
    "subscriptionPlanFeatures",
    "total"
]
export interface GetSubscriptionPlanFeaturesResponseNestedFields extends 
Omit<GetSubscriptionPlanFeatureResponseNestedFields, "subscriptionPlanFeature"> {
    subscriptionPlanFeatures: SubscriptionPlanFeatureFields
}
export const getSubscriptionPlanFeaturesResponseNestedFields: GetSubscriptionPlanFeaturesResponseNestedFields = {
    ..._getSubscriptionPlanFeatureResponseNestedFields,
    subscriptionPlanFeatures: subscriptionPlanFeatureQuery
}

// create 
export interface AddSubscriptionPlanFeatureRequest {
    subscriptionPlanFeature: Partial<SubscriptionPlanFeature>;
}
export interface AddSubscriptionPlanFeatureResponse {
    subscriptionPlanFeature: SubscriptionPlanFeature
}
export const addSubscriptionPlanFeatureResponse: (keyof AddSubscriptionPlanFeatureResponse)[] = getSubscriptionPlanFeatureResponse;
export type AddSubscriptionPlanFeatureResponseNestedFields = GetSubscriptionPlanFeatureResponseNestedFields;
export const addSubscriptionPlanFeatureResponseNestedFields: AddSubscriptionPlanFeatureResponseNestedFields = getSubscriptionPlanFeatureResponseNestedFields;

// update
export interface UpdateSubscriptionPlanFeatureRequest {
    subscriptionPlanFeatureId: string;
    subscriptionPlanFeature: Partial<SubscriptionPlanFeature>;
}
export type  UpdateSubscriptionPlanFeatureResponse = GetSubscriptionPlanFeatureResponse;
export const updateSubscriptionPlanFeatureResponse: (keyof UpdateSubscriptionPlanFeatureResponse)[] = getSubscriptionPlanFeatureResponse;
export type UpdateSubscriptionPlanFeatureResponseNestedFields = GetSubscriptionPlanFeatureResponseNestedFields;
export const updateSubscriptionPlanFeatureResponseNestedFields: UpdateSubscriptionPlanFeatureResponseNestedFields = getSubscriptionPlanFeatureResponseNestedFields;

// remove 
export interface RemoveSubscriptionPlanFeatureRequest {
    subscriptionPlanFeatureId: string;
}
export interface RemoveSubscriptionPlanFeatureResponse {
    subscriptionPlanFeatureId: string;
}
export const removeSubscriptionPlanFeatureResponse: (keyof RemoveSubscriptionPlanFeatureResponse)[] = [
    "subscriptionPlanFeatureId"
];
