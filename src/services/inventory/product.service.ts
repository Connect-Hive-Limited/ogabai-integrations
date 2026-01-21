import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { Product } from "../../types";
import { productSchema } from "./schema/product.schema";
import { 
  AddProductRequest, AddProductResponse, addProductResponseFields, addProductResponseNestedFields, 
  GetProductRequest, GetProductResponse, getProductResponseFields, getProductResponseNestedFields, 
  GetProductsRequest, GetProductsResponse, getProductsResponseFields, getProductsResponseNestedFields,
  RemoveProductRequest,
  RemoveProductResponse,
  removeProductResponseFields,
  UpdateProductRequest,
  UpdateProductResponse,
  UpdateProductResponseNestedFields,
  updateProductResponseFields,
  updateProductResponseNestedFields,
  AddProductResponseNestedFields,
  GetProductResponseNestedFields,
  GetProductsResponseNestedFields,
  SearchProductNamesRequest,
  SearchProductNamesResponse,
  SearchProductNamesResponseNestedFields,
  searchProductNamesResponse,
  searchProductNamesResponseNestedFields,
  SearchCategoriesAndTemplateResponse,
  SearchCategoriesAndTemplateResponseNestedFields,
  SearchCategoriesAndTemplateRequest,
  searchCategoriesAndTemplateResponse,
  searchCategoriesAndTemplateResponseNestedFields,
  GetCustomerProductCountsByIdsRequest,
  GetCustomerProductCountsByIdsResponse,
  getCustomerProductCountsByIdsResponse,
  GetCustomerProductCountsByIdsResponseNestedFields,
  getCustomerProductCountsByIdsResponseNestedFields, 
} from "./types/product.type";
import { createFileService } from "../file/file.service";

export const createProductService = (client: GraphQLClient) => ({
  async uploadProductImage(form: FormData) {
    const fileClient = createFileService(client);
    return ((await fileClient.uploadFile<{product: Product}>(form as any)).product);
  },
  async getCustomerProductCountsByIds(
    input: GetCustomerProductCountsByIdsRequest, 
    fetchFields?: {
      root?: (keyof GetCustomerProductCountsByIdsResponse)[],
      nestedFields?: GetCustomerProductCountsByIdsResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetCustomerProductCountsByIdsResponse | null> {
    const res = await client.request<{ getCustomerProductCountsByIds: GetCustomerProductCountsByIdsResponse }, GetCustomerProductCountsByIdsRequest>(
      productSchema.getCustomerProductCountsByIds(
        gqlQueryStringBuilder<GetCustomerProductCountsByIdsResponse, GetCustomerProductCountsByIdsResponseNestedFields>(
          fetchFields?.root ?? getCustomerProductCountsByIdsResponse,
          fetchFields?.nestedFields ?? getCustomerProductCountsByIdsResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getCustomerProductCountsByIds ?? null;
  },
  async searchCategoriesAndTemplate(
    input: SearchCategoriesAndTemplateRequest, 
    fetchFields?: {
      root?: (keyof SearchCategoriesAndTemplateResponse)[],
      nestedFields?: SearchCategoriesAndTemplateResponseNestedFields
    },
    option?: RequestOption
  ): Promise<SearchCategoriesAndTemplateResponse | null> {
    const res = await client.request<{ searchCategoriesAndTemplate: SearchCategoriesAndTemplateResponse }, SearchCategoriesAndTemplateRequest>(
      productSchema.searchCategoriesAndTemplate(
        gqlQueryStringBuilder<SearchCategoriesAndTemplateResponse, SearchCategoriesAndTemplateResponseNestedFields>(
          fetchFields?.root ?? searchCategoriesAndTemplateResponse,
          fetchFields?.nestedFields ?? searchCategoriesAndTemplateResponseNestedFields,
        )
      ), 
      input, 
      option
    );
    return res.data?.searchCategoriesAndTemplate ?? null;
  },
  async searchProductNames(
    input: SearchProductNamesRequest, 
    fetchFields?: {
      root?: (keyof SearchProductNamesResponse)[],
      nestedFields?: SearchProductNamesResponseNestedFields
    },
    option?: RequestOption
  ): Promise<SearchProductNamesResponse | null> {
    const res = await client.request<{ searchProductNames: SearchProductNamesResponse }, SearchProductNamesRequest>(
      productSchema.searchProductNames(
        gqlQueryStringBuilder<SearchProductNamesResponse, SearchProductNamesResponseNestedFields>(
          fetchFields?.root ?? searchProductNamesResponse,
          fetchFields?.nestedFields ?? searchProductNamesResponseNestedFields,
        )
      ), 
      input, 
      option
    );
    return res.data?.searchProductNames ?? null;
  },
  async updateProduct(
    input: UpdateProductRequest, 
    fetchFields?: {
      root?: (keyof UpdateProductResponse)[],
      nestedFields?: UpdateProductResponseNestedFields
    },
    option?: RequestOption
  ): Promise<UpdateProductResponse | null> {
    const res = await client.request<{ updateProduct: UpdateProductResponse }, UpdateProductRequest>(
      productSchema.updateProduct(
        gqlQueryStringBuilder<UpdateProductResponse, UpdateProductResponseNestedFields>(
          fetchFields?.root ?? updateProductResponseFields,
          fetchFields?.nestedFields ?? updateProductResponseNestedFields,
        )
      ), 
      input, 
      option
    );
    return res.data?.updateProduct ?? null;
  },
  async removeProduct(
    input: RemoveProductRequest, 
    fetchFields?: {
      root?: (keyof RemoveProductResponse)[],
    },
    option?: RequestOption
  ): Promise<RemoveProductResponse | null> {
    const res = await client.request<{ removeProduct: RemoveProductResponse }, RemoveProductRequest>(
      productSchema.removeProduct(
        gqlQueryStringBuilder<RemoveProductResponse>(
          fetchFields?.root ?? removeProductResponseFields,
        )
      ), 
      input, 
      option
    );
    return res.data?.removeProduct ?? null;
  },
  async addProduct(
    input: AddProductRequest, 
    fetchFields?: {
      root?: (keyof AddProductResponse)[],
      nestedFields?: AddProductResponseNestedFields
    },
    option?: RequestOption
  ): Promise<AddProductResponse | null> {
    const res = await client.request<{ addProduct: AddProductResponse }, AddProductRequest>(
      productSchema.addProduct(
        gqlQueryStringBuilder<AddProductResponse, AddProductResponseNestedFields>(
          fetchFields?.root ?? addProductResponseFields,
          fetchFields?.nestedFields ?? addProductResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.addProduct ?? null;
  },
  async getProduct(
    input: GetProductRequest, 
    fetchFields?: {
      root?: (keyof GetProductResponse)[],
      nestedFields?: GetProductResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetProductResponse | null> {
    const res = await client.request<{ getProduct: GetProductResponse }, GetProductRequest>(
      productSchema.getProduct(
        gqlQueryStringBuilder<GetProductResponse, GetProductResponseNestedFields>(
          fetchFields?.root ?? getProductResponseFields,
          fetchFields?.nestedFields ?? getProductResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getProduct ?? null;
  },
  async getProducts(
    input: GetProductsRequest, 
    fetchFields?: {
      root?: (keyof GetProductsResponse)[],
      nestedFields?: GetProductsResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetProductsResponse | null> {
    const res = await client.request<{ getProducts: GetProductsResponse }, GetProductsRequest>(
      productSchema.getProducts(
        gqlQueryStringBuilder<GetProductsResponse, GetProductsResponseNestedFields>(
          fetchFields?.root ?? getProductsResponseFields,
          fetchFields?.nestedFields ?? getProductsResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getProducts ?? null;
  },
})

export type ProductService = ReturnType<typeof createProductService>;