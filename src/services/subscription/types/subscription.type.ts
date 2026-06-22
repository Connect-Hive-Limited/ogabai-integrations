import { Subscription } from "../../../types";
import { SubscriptionFields, subscriptionQuery } from "../subscription.entity";

export interface GetSubscriptionRequest {
    subscription: Partial<Subscription>;
}
export interface GetSubscriptionResponse {
    subscription: Subscription
}
export const getSubscriptionResponse: (keyof GetSubscriptionResponse)[] = [
    "subscription"
]
export interface GetSubscriptionResponseNestedFields {
    subscription: SubscriptionFields
}
export const _getSubscriptionResponseNestedFields: 
Omit<GetSubscriptionResponseNestedFields, "subscription"> = {
    
}
export const getSubscriptionResponseNestedFields: GetSubscriptionResponseNestedFields = {
    ..._getSubscriptionResponseNestedFields,
    subscription: subscriptionQuery
}


// gets
export interface GetSubscriptionsRequest {
    subscription?: Partial<Subscription>;
    subscriptionIds?: string[];
    search?: string;
    limit: number;
    skip: number;
}
export interface GetSubscriptionsResponse {
    subscriptions: Subscription[]
    total: number
}
export const getSubscriptionsResponse: (keyof GetSubscriptionsResponse)[] = [
    "subscriptions",
    "total"
]
export interface GetSubscriptionsResponseNestedFields extends 
Omit<GetSubscriptionResponseNestedFields, "subscription"> {
    subscriptions: SubscriptionFields
}
export const getSubscriptionsResponseNestedFields: GetSubscriptionsResponseNestedFields = {
    ..._getSubscriptionResponseNestedFields,
    subscriptions: subscriptionQuery
}

// create 
export interface AddSubscriptionRequest {
    subscription: Partial<Subscription>;
}
export interface AddSubscriptionResponse {
    subscription: Subscription
}
export const addSubscriptionResponse: (keyof AddSubscriptionResponse)[] = getSubscriptionResponse;
export type AddSubscriptionResponseNestedFields = GetSubscriptionResponseNestedFields;
export const addSubscriptionResponseNestedFields: AddSubscriptionResponseNestedFields = getSubscriptionResponseNestedFields;

// update
export interface UpdateSubscriptionRequest {
    subscriptionId: string;
    subscription: Partial<Subscription>;
}
export type  UpdateSubscriptionResponse = GetSubscriptionResponse;
export const updateSubscriptionResponse: (keyof UpdateSubscriptionResponse)[] = getSubscriptionResponse;
export type UpdateSubscriptionResponseNestedFields = GetSubscriptionResponseNestedFields;
export const updateSubscriptionResponseNestedFields: UpdateSubscriptionResponseNestedFields = getSubscriptionResponseNestedFields;

// remove 
export interface RemoveSubscriptionRequest {
    subscriptionId: string;
}
export interface RemoveSubscriptionResponse {
    subscriptionId: string;
}
export const removeSubscriptionResponse: (keyof RemoveSubscriptionResponse)[] = [
    "subscriptionId"
];
