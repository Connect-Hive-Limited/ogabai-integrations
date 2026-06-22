import { StoreCategoryProduct } from "../../../types";
import { StoreCategoryProductFields, storeCategoryProductQuery } from "../entities";

export interface GetStoreCategoryProductRequest {
    storeCategoryProduct: Partial<StoreCategoryProduct>;
}
export interface GetStoreCategoryProductResponse {
    storeCategoryProduct: StoreCategoryProduct;
}
export const getStoreCategoryProductResponseFields: (keyof GetStoreCategoryProductResponse)[] = [
    "storeCategoryProduct"
]
export interface GetStoreCategoryProductResponseNestedFields {
    storeCategoryProduct: StoreCategoryProductFields;
}
export const getStoreCategoryProductResponseNestedFields: GetStoreCategoryProductResponseNestedFields = {
    storeCategoryProduct: storeCategoryProductQuery
}

// get store categories 
export interface GetStoreCategoryProductsRequest {
    search?: string;
    storeCategoryProductIds?: string[];
    storeCategoryProduct?: Partial<StoreCategoryProduct>[];
    limit: number;
    skip: number;
}
export interface GetStoreCategoryProductsResponse {
    storeCategoryProducts: StoreCategoryProduct[];
}
export const getStoreCategoryProductsResponseFields: (keyof GetStoreCategoryProductsResponse)[] = [
    "storeCategoryProducts"
]
export interface GetStoreCategoryProductsResponseNestedFields extends Omit<GetStoreCategoryProductResponseNestedFields, "storeCategoryProduct"> {
    storeCategoryProducts: StoreCategoryProductFields;
}
export const getStoreCategoryProductsResponseNestedFields: GetStoreCategoryProductsResponseNestedFields = {
    storeCategoryProducts: storeCategoryProductQuery
}

export type CreateStoreCategoryProductRequest = GetStoreCategoryProductRequest;
export type CreateStoreCategoryProductResponse = GetStoreCategoryProductResponse;
export const createStoreCategoryProductResponseFields = getStoreCategoryProductResponseFields;
export type CreateStoreCategoryProductResponseNestedFields = GetStoreCategoryProductResponseNestedFields;
export const createStoreCategoryProductResponseNestedFields = getStoreCategoryProductResponseNestedFields;

export interface UpdateStoreCategoryProductRequest {
    storeCategoryProduct: Partial<StoreCategoryProduct>;
    storeCategoryProductId: string;
}
export type UpdateStoreCategoryProductResponse = GetStoreCategoryProductResponse;
export const updateStoreCategoryProductResponseFields = getStoreCategoryProductResponseFields;
export type UpdateStoreCategoryProductResponseNestedFields = GetStoreCategoryProductResponseNestedFields;
export const updateStoreCategoryProductResponseNestedFields = getStoreCategoryProductResponseNestedFields;

export interface RemoveStoreCategoryProductRequest {
    storeCategoryProductId: string;
}
export type RemoveStoreCategoryProductResponse = RemoveStoreCategoryProductRequest;
export const removeStoreCategoryProductResponseFields: (keyof RemoveStoreCategoryProductResponse)[] = [
    "storeCategoryProductId"
];