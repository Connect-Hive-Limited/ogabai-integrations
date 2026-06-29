import { Price } from "../../../types/inventory";
import { PriceFields, priceQuery } from "../inventory.entities";
export interface GetPriceRequest {
    price: Partial<Price>
}
export interface GetPriceResponse {
    price: Price
}
export interface GetPriceResponseFields {
    price: PriceFields
}
export const getPriceResponseFields: (keyof GetPriceResponse)[] = ["price"]
const _getPriceResponseNestedFields: Omit<GetPriceResponseFields, "price"> = {}
export const getPriceResponseNestedFields: GetPriceResponseFields = {
    price: priceQuery,
    ..._getPriceResponseNestedFields
}

// get prices
export interface GetPricesRequest {
    price?: Partial<Price>
    priceIds?: string[]
    limit: number
    skip: number
}
export interface GetPricesResponse {
    prices: Price[]
}
export interface GetPricesResponseFields extends Omit<GetPriceResponseFields, "price"> {
    prices: PriceFields
}
export const getPricesResponseFields: (keyof GetPricesResponse)[] = ["prices"]
export const getPricesResponseNestedFields: GetPricesResponseFields = {
    ..._getPriceResponseNestedFields,
    prices: priceQuery
}

// add price 
export interface AddPriceRequest {
    price: Partial<Price>
}
export interface AddPriceResponse {
    price: Price
}
export type AddPriceResponseFields = GetPriceResponseFields
export const addPriceResponseFields = getPriceResponseFields;
export const addPriceResponseNestedFields = getPriceResponseNestedFields;

// update price 
export interface UpdatePriceRequest {
    priceId: string
    price: Partial<Price>
}
export interface UpdatePriceResponse {
    price: Price
}
export type UpdatePriceResponseFields = GetPriceResponseFields
export const updatePriceResponseFields = getPriceResponseFields;
export const updatePriceResponseNestedFields = getPriceResponseNestedFields;

// remove price 
export interface RemovePriceRequest {
    priceId: string
}
export interface RemovePriceResponse {
    priceId: string
}
export const removePriceResponseFields: (keyof RemovePriceResponse)[] = [
    "priceId"
]