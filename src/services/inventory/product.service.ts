import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
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
} from "./types/product.type";

export const createProductService = (client: GraphQLClient) => ({
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