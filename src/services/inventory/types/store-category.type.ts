import { StoreCategory } from "../../../types";
import { StoreCategoryFields, storeCategoryQuery } from "../entities";

export interface GetStoreCategoryRequest {
    storeCategory: Partial<StoreCategory>;
}
export interface GetStoreCategoryResponse {
    storeCategory: StoreCategory;
}
export const getStoreCategoryResponseFields: (keyof GetStoreCategoryResponse)[] = [
    "storeCategory"
]
export interface GetStoreCategoryResponseNestedFields {
    storeCategory: StoreCategoryFields;
}
export const getStoreCategoryResponseNestedFields: GetStoreCategoryResponseNestedFields = {
    storeCategory: storeCategoryQuery
}

// get store categories 
export interface GetStoreCategoriesRequest {
    search?: string;
    storeCategoryIds?: string[];
    storeCategory?: Partial<StoreCategory>[];
    limit: number;
    skip: number;
}
export interface GetStoreCategoriesResponse {
    storeCategories: StoreCategory[];
}
export const getStoreCategoriesResponseFields: (keyof GetStoreCategoriesResponse)[] = [
    "storeCategories"
]
export interface GetStoreCategoriesResponseNestedFields extends Omit<GetStoreCategoryResponseNestedFields, "storeCategory"> {
    storeCategories: StoreCategoryFields;
}
export const getStoreCategoriesResponseNestedFields: GetStoreCategoriesResponseNestedFields = {
    storeCategories: storeCategoryQuery
}

export type CreateStoreCategoryRequest = GetStoreCategoryRequest;
export type CreateStoreCategoryResponse = GetStoreCategoryResponse;
export const createStoreCategoryResponseFields = getStoreCategoryResponseFields;
export type CreateStoreCategoryResponseNestedFields = GetStoreCategoryResponseNestedFields;
export const createStoreCategoryResponseNestedFields = getStoreCategoryResponseNestedFields;

export interface UpdateStoreCategoryRequest {
    storeCategory: Partial<StoreCategory>;
    storeCategoryId: string;
}
export type UpdateStoreCategoryResponse = GetStoreCategoryResponse;
export const updateStoreCategoryResponseFields = getStoreCategoryResponseFields;
export type UpdateStoreCategoryResponseNestedFields = GetStoreCategoryResponseNestedFields;
export const updateStoreCategoryResponseNestedFields = getStoreCategoryResponseNestedFields;

export interface RemoveStoreCategoryRequest {
    storeCategoryId: string;
}
export type RemoveStoreCategoryResponse = RemoveStoreCategoryRequest;
export const removeStoreCategoryResponseFields: (keyof RemoveStoreCategoryResponse)[] = [
    "storeCategoryId"
];