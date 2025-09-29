import { Order } from "../../../types";
import { OrderFields, orderQuery } from "../sale.entity";

export interface GetOrderRequest {
    order: Promise<Order>;
}
export interface GetOrderResponse {
    order: Order
}
export const getOrderResponse: (keyof GetOrderResponse)[] = ["order"];
export interface GetOrderResponseNestedFields {
    order: OrderFields
}
export const getOrderResponseNestedFields: GetOrderResponseNestedFields = {
    order: orderQuery,
}


// get orders
export interface GetOrdersRequest {
    order?: Promise<Order>;
    orderIds?: string[];
    limit: number;
    skip: number;
}
export interface GetOrdersResponse {
    orders: Order[];
}
export const getOrdersResponse: (keyof GetOrdersResponse)[] = ["orders"];
export interface GetOrdersResponseNestedFields extends Omit<GetOrderResponseNestedFields, "order"> {
    orders: OrderFields
}
export const getOrdersResponseNestedFields: GetOrdersResponseNestedFields = {
    orders: orderQuery,
}