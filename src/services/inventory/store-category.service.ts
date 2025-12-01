import { get } from "http";
import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { storeCategorySchema } from "./schema/store-category.schema";
import { CreateStoreCategoryRequest, CreateStoreCategoryResponse, createStoreCategoryResponseFields, createStoreCategoryResponseNestedFields, CreateStoreCategoryResponseNestedFields, GetStoreCategoriesRequest, GetStoreCategoriesResponse, getStoreCategoriesResponseFields, getStoreCategoriesResponseNestedFields, GetStoreCategoriesResponseNestedFields, GetStoreCategoryRequest, GetStoreCategoryResponse, getStoreCategoryResponseFields, getStoreCategoryResponseNestedFields, GetStoreCategoryResponseNestedFields, RemoveStoreCategoryRequest, RemoveStoreCategoryResponse, removeStoreCategoryResponseFields, UpdateStoreCategoryRequest, UpdateStoreCategoryResponse, updateStoreCategoryResponseFields, updateStoreCategoryResponseNestedFields, UpdateStoreCategoryResponseNestedFields } from "./types/store-category.type";

export const createStoreCategoryService = (client: GraphQLClient) => ({
    async getStoreCategories(
        input: GetStoreCategoriesRequest, 
        fetchFields?: {
          root?: (keyof GetStoreCategoriesResponse)[],
          nestedFields?: GetStoreCategoriesResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetStoreCategoriesResponse | null> {
        const res = await client.request<{ getStoreCategories: GetStoreCategoriesResponse }, GetStoreCategoriesRequest>(
            storeCategorySchema.getStoreCategories(
                gqlQueryStringBuilder<GetStoreCategoriesResponse, GetStoreCategoriesResponseNestedFields>(
                    fetchFields?.root ?? getStoreCategoriesResponseFields,
                    fetchFields?.nestedFields ?? getStoreCategoriesResponseNestedFields,
                )
            ), 
            input, 
            option
        )  
        return res.data?.getStoreCategories ?? null;
    },
    async getStoreCategory(
        input: GetStoreCategoryRequest, 
        fetchFields?: {
          root?: (keyof GetStoreCategoryResponse)[],
          nestedFields?: GetStoreCategoryResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetStoreCategoryResponse | null> {
        const res = await client.request<{ getStoreCategory: GetStoreCategoryResponse }, GetStoreCategoryRequest>(
            storeCategorySchema.getStoreCategory(
                gqlQueryStringBuilder<GetStoreCategoryResponse, GetStoreCategoryResponseNestedFields>(
                    fetchFields?.root ?? getStoreCategoryResponseFields,
                    fetchFields?.nestedFields ?? getStoreCategoryResponseNestedFields,
                )
            ), 
            input, 
            option
        )  
        return res.data?.getStoreCategory ?? null;
    },
    async updateStoreCategory(
        input: UpdateStoreCategoryRequest, 
        fetchFields?: {
          root?: (keyof UpdateStoreCategoryResponse)[],
          nestedFields?: UpdateStoreCategoryResponseNestedFields
        },
        option?: RequestOption
    ): Promise<UpdateStoreCategoryResponse | null> {
        const res = await client.request<{ updateStoreCategory: UpdateStoreCategoryResponse }, UpdateStoreCategoryRequest>(
        storeCategorySchema.updateStoreCategory(
            gqlQueryStringBuilder<UpdateStoreCategoryResponse, UpdateStoreCategoryResponseNestedFields>(
            fetchFields?.root ?? updateStoreCategoryResponseFields,
            fetchFields?.nestedFields ?? updateStoreCategoryResponseNestedFields,
            )
        ), 
        input, 
        option
        );
        return res.data?.updateStoreCategory ?? null;
    },
    async createStoreCategory(
        input: CreateStoreCategoryRequest, 
        fetchFields?: {
          root?: (keyof CreateStoreCategoryResponse)[],
          nestedFields?: CreateStoreCategoryResponseNestedFields
        },
        option?: RequestOption
    ): Promise<CreateStoreCategoryResponse | null> {
        const res = await client.request<{ createStoreCategory: CreateStoreCategoryResponse }, CreateStoreCategoryRequest>(
        storeCategorySchema.createStoreCategory(
            gqlQueryStringBuilder<CreateStoreCategoryResponse, CreateStoreCategoryResponseNestedFields>(
                fetchFields?.root ?? createStoreCategoryResponseFields,
                    fetchFields?.nestedFields ?? createStoreCategoryResponseNestedFields,
                )
            ), 
            input, 
            option
        );
        return res.data?.createStoreCategory ?? null;
    },
    async removeStoreCategory(
        input: RemoveStoreCategoryRequest, 
        fetchFields?: {
          root?: (keyof RemoveStoreCategoryResponse)[],
        },
        option?: RequestOption
    ): Promise<RemoveStoreCategoryResponse | null> {
        const res = await client.request<{ removeStoreCategory: RemoveStoreCategoryResponse }, RemoveStoreCategoryRequest>(
        storeCategorySchema.removeStoreCategory(
            gqlQueryStringBuilder<RemoveStoreCategoryResponse>(
                fetchFields?.root ?? removeStoreCategoryResponseFields,
            )
        ), 
        input, 
        option
        );
        return res.data?.removeStoreCategory ?? null;
    },
})

export type StoreCategoryService = ReturnType<typeof createStoreCategoryService>