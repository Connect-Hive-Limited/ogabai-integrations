import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { storeSchema } from "./schema/store.schema";
import { 
  AddStoreRequest, addStoreResponse, AddStoreResponse, AddStoreResponseNestedFields, addStoreResponseNestedFields, 
  GetStoreRequest, getStoreResponse, GetStoreResponse, GetStoreResponseNestedFields, getStoreResponseNestedFields, 
  GetStoresRequest, getStoresResponse, GetStoresResponse, GetStoresResponseNestedFields, getStoresResponseNestedFields,
  RemoveStoreRequest,
  removeStoreResponse,
  RemoveStoreResponse,
  UpdateStoreRequest,
  updateStoreResponse,
  UpdateStoreResponse,
  UpdateStoreResponseNestedFields,
  updateStoreResponseNestedFields, 
} from "./types/store.type";

export const createStoreService = (client: GraphQLClient) => ({
  async updateStore(
    input: UpdateStoreRequest, 
    fetchFields?: {
      root?: (keyof UpdateStoreResponse)[],
      nestedFields?: UpdateStoreResponseNestedFields
    },
    option?: RequestOption
  ): Promise<UpdateStoreResponse | null> {
    const res = await client.request<{ updateStore: UpdateStoreResponse }, UpdateStoreRequest>(
      storeSchema.updateStore(
        gqlQueryStringBuilder<UpdateStoreResponse, UpdateStoreResponseNestedFields>(
          fetchFields?.root ?? updateStoreResponse,
          fetchFields?.nestedFields ?? updateStoreResponseNestedFields,
        )
      ), 
      input, 
      option
    );
    return res.data?.updateStore ?? null;
  },
  async removeStore(
    input: RemoveStoreRequest, 
    fetchFields?: {
      root?: (keyof RemoveStoreResponse)[],
    },
    option?: RequestOption
  ): Promise<RemoveStoreResponse | null> {
    const res = await client.request<{ deleteStore: RemoveStoreResponse }, RemoveStoreRequest>(
      storeSchema.deleteStore(
        gqlQueryStringBuilder<RemoveStoreResponse>(
          fetchFields?.root ?? removeStoreResponse,
        )
      ), 
      input, 
      option
    );
    return res.data?.deleteStore ?? null;
  },
  async addStore(
    input: AddStoreRequest, 
    fetchFields?: {
      root?: (keyof AddStoreResponse)[],
      nestedFields?: AddStoreResponseNestedFields
    },
    option?: RequestOption
  ): Promise<AddStoreResponse | null> {
    const res = await client.request<{ createStore: AddStoreResponse }, AddStoreRequest>(
      storeSchema.createStore(
        gqlQueryStringBuilder<AddStoreResponse, AddStoreResponseNestedFields>(
          fetchFields?.root ?? addStoreResponse,
          fetchFields?.nestedFields ?? addStoreResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.createStore ?? null;
  },
  async getStore(
    input: GetStoreRequest, 
    fetchFields?: {
      root?: (keyof GetStoreResponse)[],
      nestedFields?: GetStoreResponseNestedFields;
    },
    option?: RequestOption
  ): Promise<GetStoreResponse | null> {
    const res = await client.request<{ getStore: GetStoreResponse }, GetStoreRequest>(
      storeSchema.getStore(
        gqlQueryStringBuilder<GetStoreResponse, GetStoreResponseNestedFields>(
          fetchFields?.root ?? getStoreResponse,
          fetchFields?.nestedFields ?? getStoreResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getStore ?? null;
  },
  async getStores(
    input: GetStoresRequest, 
    fetchFields?: {
      root?: (keyof GetStoresResponse)[],
      nestedFields?: GetStoresResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetStoresResponse | null> {
    const res = await client.request<{ getStores: GetStoresResponse }, GetStoresRequest>(
      storeSchema.getStores(
        gqlQueryStringBuilder<GetStoresResponse, GetStoresResponseNestedFields>(
          fetchFields?.root ?? getStoresResponse,
          fetchFields?.nestedFields ?? getStoresResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getStores ?? null;
  },
})

export type StoreService = ReturnType<typeof createStoreService>;