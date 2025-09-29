import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { orderSchema } from "./schemas/order.schema";
import { 
  GetOrderRequest, getOrderResponse, GetOrderResponse, GetOrderResponseNestedFields, getOrderResponseNestedFields, 
  GetOrdersRequest, getOrdersResponse, GetOrdersResponse, GetOrdersResponseNestedFields, getOrdersResponseNestedFields,

} from "./types/order.type";

export const createOrderService = (client: GraphQLClient) => ({
  async getOrder(
    input: GetOrderRequest, 
    fetchFields?: {
      root?: (keyof GetOrderResponse)[],
      nestedFields?: GetOrderResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetOrderResponse | null> {
    const res = await client.request<{ getOrder: GetOrderResponse }, GetOrderRequest>(
      orderSchema.getOrder(
        gqlQueryStringBuilder<GetOrderResponse, GetOrderResponseNestedFields>(
          fetchFields?.root ?? getOrderResponse,
          fetchFields?.nestedFields ?? getOrderResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getOrder ?? null;
  },
  async getOrders(
    input: GetOrdersRequest, 
    fetchFields?: {
      root?: (keyof GetOrdersResponse)[],
      nestedFields?: GetOrdersResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetOrdersResponse | null> {
    const res = await client.request<{ getOrders: GetOrdersResponse }, GetOrdersRequest>(
      orderSchema.getOrders(
        gqlQueryStringBuilder<GetOrdersResponse, GetOrdersResponseNestedFields>(
          fetchFields?.root ?? getOrdersResponse,
          fetchFields?.nestedFields ?? getOrdersResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getOrders ?? null;
  },
})