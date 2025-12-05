import { Store } from "../../../types";
import { AddressFields, addressQuery, storeQuery, type StoreFields } from "../entities"

export interface GetStoreRequest {
    store: Partial<Store>;
}
export interface GetStoreResponse {
    store?: Store;
}
export const getStoreResponse: (keyof GetStoreResponse)[] = [
    "store"
]
export interface GetStoreResponseNestedFields {
    store: StoreFields
    address: AddressFields;
}
export const _getStoreResponseNestedFields: Omit<GetStoreResponseNestedFields, "store"> = {
    address: addressQuery
}
export const getStoreResponseNestedFields: GetStoreResponseNestedFields = {
    store: storeQuery,
    ..._getStoreResponseNestedFields,
}

// get stores 
export interface GetStoresRequest {
    store?: Partial<Store>;
    storeIds?: string[];
    limit: number;
    skip: number;
}
export interface GetStoresResponse {
    stores?: Store[];
}
export const getStoresResponse:(keyof GetStoresResponse)[] = [
    "stores"
]
export interface GetStoresResponseNestedFields extends Omit<GetStoreResponseNestedFields, "store"> {
    stores: StoreFields;
}
export const getStoresResponseNestedFields: GetStoresResponseNestedFields = {
    stores: storeQuery,
    address: addressQuery,
}

// add store 
export type AddStoreRequest = GetStoreRequest;
export type AddStoreResponse = GetStoreResponse;
export const addStoreResponse = getStoreResponse;
export type AddStoreResponseNestedFields = GetStoreResponseNestedFields;
export const addStoreResponseNestedFields = getStoreResponseNestedFields;

// update store 
export interface UpdateStoreRequest {
    storeId: string;
    store: Partial<Store>;
}
export type UpdateStoreResponse = GetStoreResponse;
export const updateStoreResponse = getStoreResponse;
export type UpdateStoreResponseNestedFields = GetStoreResponseNestedFields;
export const updateStoreResponseNestedFields = getStoreResponseNestedFields;

// remove store 
export interface RemoveStoreRequest {
    storeId: string;
}
export interface RemoveStoreResponse {
    storeId: string;
}    
export const removeStoreResponse: (keyof RemoveStoreResponse)[] = [
    "storeId"
]
