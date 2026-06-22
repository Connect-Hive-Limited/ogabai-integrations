import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { stockSchema } from "./schema/stock.schema";
import { 
  AddStockRequest, addStockResponse, AddStockResponse, AddStockResponseNestedFields, addStockResponseNestedFields, 
  GetStockRequest, getStockResponse, GetStockResponse, GetStockResponseNestedFields, getStockResponseNestedFields, 
  GetStocksRequest, getStocksResponse, GetStocksResponse, GetStocksResponseNestedFields, getStocksResponseNestedFields,
  RemoveStockRequest,
  removeStockResponse,
  RemoveStockResponse,
  UpdateStockRequest,
  updateStockResponse,
  UpdateStockResponse,
  UpdateStockResponseNestedFields,
  updateStockResponseNestedFields, 
} from "./types/stock.type";

export const createStockService = (client: GraphQLClient) => ({
  async updateStock(
    input: UpdateStockRequest, 
    fetchFields?: {
      root?: (keyof UpdateStockResponse)[],
      nestedFields?: UpdateStockResponseNestedFields
    },
    option?: RequestOption
  ): Promise<UpdateStockResponse | null> {
    const res = await client.request<{ updateStock: UpdateStockResponse }, UpdateStockRequest>(
      stockSchema.updateStock(
        gqlQueryStringBuilder<UpdateStockResponse, UpdateStockResponseNestedFields>(
          fetchFields?.root ?? updateStockResponse,
          fetchFields?.nestedFields ?? updateStockResponseNestedFields,
        )
      ), 
      input, 
      option
    );
    return res.data?.updateStock ?? null;
  },
  async removeStock(
    input: RemoveStockRequest, 
    fetchFields?: {
      root?: (keyof RemoveStockResponse)[],
    },
    option?: RequestOption
  ): Promise<RemoveStockResponse | null> {
    const res = await client.request<{ removeStock: RemoveStockResponse }, RemoveStockRequest>(
      stockSchema.removeStock(
        gqlQueryStringBuilder<RemoveStockResponse>(
          fetchFields?.root ?? removeStockResponse,
        )
      ), 
      input, 
      option
    );
    return res.data?.removeStock ?? null;
  },
  async addStock(
    input: AddStockRequest, 
    fetchFields?: {
      root?: (keyof AddStockResponse)[],
      nestedFields?: AddStockResponseNestedFields
    },
    option?: RequestOption
  ): Promise<AddStockResponse | null> {
    const res = await client.request<{ addStock: AddStockResponse }, AddStockRequest>(
      stockSchema.addStock(
        gqlQueryStringBuilder<AddStockResponse, AddStockResponseNestedFields>(
          fetchFields?.root ?? addStockResponse,
          fetchFields?.nestedFields ?? addStockResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.addStock ?? null;
  },
  async getStock(
    input: GetStockRequest, 
    fetchFields?: {
      root?: (keyof GetStockResponse)[],
      nestedFields?: GetStockResponseNestedFields;
    },
    option?: RequestOption
  ): Promise<GetStockResponse | null> {
    const res = await client.request<{ getStock: GetStockResponse }, GetStockRequest>(
      stockSchema.getStock(
        gqlQueryStringBuilder<GetStockResponse, GetStockResponseNestedFields>(
          fetchFields?.root ?? getStockResponse,
          fetchFields?.nestedFields ?? getStockResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getStock ?? null;
  },
  async getStocks(
    input: GetStocksRequest, 
    fetchFields?: {
      root?: (keyof GetStocksResponse)[],
      nestedFields?: GetStocksResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetStocksResponse | null> {
    const res = await client.request<{ getStocks: GetStocksResponse }, GetStocksRequest>(
      stockSchema.getStocks(
        gqlQueryStringBuilder<GetStocksResponse, GetStocksResponseNestedFields>(
          fetchFields?.root ?? getStocksResponse,
          fetchFields?.nestedFields ?? getStocksResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getStocks ?? null;
  },
})

export type CreateStockService = ReturnType<typeof createStockService>