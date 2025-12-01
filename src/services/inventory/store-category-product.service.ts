import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { storeCategoryProductSchema } from "./schema/store-category-product.schema";
import { CreateStoreCategoryProductRequest, CreateStoreCategoryProductResponse, createStoreCategoryProductResponseFields, createStoreCategoryProductResponseNestedFields, CreateStoreCategoryProductResponseNestedFields, GetStoreCategoryProductsRequest, GetStoreCategoryProductsResponse, getStoreCategoryProductsResponseFields, getStoreCategoryProductsResponseNestedFields, GetStoreCategoryProductsResponseNestedFields, GetStoreCategoryProductRequest, GetStoreCategoryProductResponse, getStoreCategoryProductResponseFields, getStoreCategoryProductResponseNestedFields, GetStoreCategoryProductResponseNestedFields, RemoveStoreCategoryProductRequest, RemoveStoreCategoryProductResponse, removeStoreCategoryProductResponseFields, UpdateStoreCategoryProductRequest, UpdateStoreCategoryProductResponse, updateStoreCategoryProductResponseFields, updateStoreCategoryProductResponseNestedFields, UpdateStoreCategoryProductResponseNestedFields } from "./types/store-category-product.type";

export const createStoreCategoryProductService = (client: GraphQLClient) => ({
    async getStoreCategoryProducts(
        input: GetStoreCategoryProductsRequest, 
        fetchFields?: {
          root?: (keyof GetStoreCategoryProductsResponse)[],
          nestedFields?: GetStoreCategoryProductsResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetStoreCategoryProductsResponse | null> {
        const res = await client.request<{ getStoreCategoryProducts: GetStoreCategoryProductsResponse }, GetStoreCategoryProductsRequest>(
            storeCategoryProductSchema.getStoreCategoryProducts(
                gqlQueryStringBuilder<GetStoreCategoryProductsResponse, GetStoreCategoryProductsResponseNestedFields>(
                    fetchFields?.root ?? getStoreCategoryProductsResponseFields,
                    fetchFields?.nestedFields ?? getStoreCategoryProductsResponseNestedFields,
                )
            ), 
            input, 
            option
        )  
        return res.data?.getStoreCategoryProducts ?? null;
    },
    async getStoreCategoryProduct(
        input: GetStoreCategoryProductRequest, 
        fetchFields?: {
          root?: (keyof GetStoreCategoryProductResponse)[],
          nestedFields?: GetStoreCategoryProductResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetStoreCategoryProductResponse | null> {
        const res = await client.request<{ getStoreCategoryProduct: GetStoreCategoryProductResponse }, GetStoreCategoryProductRequest>(
            storeCategoryProductSchema.getStoreCategoryProduct(
                gqlQueryStringBuilder<GetStoreCategoryProductResponse, GetStoreCategoryProductResponseNestedFields>(
                    fetchFields?.root ?? getStoreCategoryProductResponseFields,
                    fetchFields?.nestedFields ?? getStoreCategoryProductResponseNestedFields,
                )
            ), 
            input, 
            option
        )  
        return res.data?.getStoreCategoryProduct ?? null;
    },
    async updateStoreCategoryProduct(
        input: UpdateStoreCategoryProductRequest, 
        fetchFields?: {
          root?: (keyof UpdateStoreCategoryProductResponse)[],
          nestedFields?: UpdateStoreCategoryProductResponseNestedFields
        },
        option?: RequestOption
    ): Promise<UpdateStoreCategoryProductResponse | null> {
        const res = await client.request<{ updateStoreCategoryProduct: UpdateStoreCategoryProductResponse }, UpdateStoreCategoryProductRequest>(
        storeCategoryProductSchema.updateStoreCategoryProduct(
            gqlQueryStringBuilder<UpdateStoreCategoryProductResponse, UpdateStoreCategoryProductResponseNestedFields>(
            fetchFields?.root ?? updateStoreCategoryProductResponseFields,
            fetchFields?.nestedFields ?? updateStoreCategoryProductResponseNestedFields,
            )
        ), 
        input, 
        option
        );
        return res.data?.updateStoreCategoryProduct ?? null;
    },
    async createStoreCategoryProduct(
        input: CreateStoreCategoryProductRequest, 
        fetchFields?: {
          root?: (keyof CreateStoreCategoryProductResponse)[],
          nestedFields?: CreateStoreCategoryProductResponseNestedFields
        },
        option?: RequestOption
    ): Promise<CreateStoreCategoryProductResponse | null> {
        const res = await client.request<{ createStoreCategoryProduct: CreateStoreCategoryProductResponse }, CreateStoreCategoryProductRequest>(
        storeCategoryProductSchema.createStoreCategoryProduct(
            gqlQueryStringBuilder<CreateStoreCategoryProductResponse, CreateStoreCategoryProductResponseNestedFields>(
                fetchFields?.root ?? createStoreCategoryProductResponseFields,
                    fetchFields?.nestedFields ?? createStoreCategoryProductResponseNestedFields,
                )
            ), 
            input, 
            option
        );
        return res.data?.createStoreCategoryProduct ?? null;
    },
    async removeStoreCategoryProduct(
        input: RemoveStoreCategoryProductRequest, 
        fetchFields?: {
          root?: (keyof RemoveStoreCategoryProductResponse)[],
        },
        option?: RequestOption
    ): Promise<RemoveStoreCategoryProductResponse | null> {
        const res = await client.request<{ removeStoreCategoryProduct: RemoveStoreCategoryProductResponse }, RemoveStoreCategoryProductRequest>(
        storeCategoryProductSchema.removeStoreCategoryProduct(
            gqlQueryStringBuilder<RemoveStoreCategoryProductResponse>(
                fetchFields?.root ?? removeStoreCategoryProductResponseFields,
            )
        ), 
        input, 
        option
        );
        return res.data?.removeStoreCategoryProduct ?? null;
    },
})

export type StoreCategoryProductService = ReturnType<typeof createStoreCategoryProductService>