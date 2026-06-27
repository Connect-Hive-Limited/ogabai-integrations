import { Stock } from "../../../types";
import { stockQuery, type StockFields } from "../inventory.entities"

export interface GetStockRequest {
    stock: Partial<Stock>;
}
export interface GetStockResponse {
    stock?: Stock;
}
export const getStockResponse: (keyof GetStockResponse)[] = [
    "stock"
]
export interface GetStockResponseNestedFields {
    stock: StockFields
}
export const getStockResponseNestedFields: GetStockResponseNestedFields = {
    stock: stockQuery,
}

// get stocks 
export interface GetStocksRequest {
    stock?: Partial<Stock>;
    stockIds?: string[];
    limit: number;
    skip: number;
}
export interface GetStocksResponse {
    stocks?: Stock[];
}
export const getStocksResponse:(keyof GetStocksResponse)[] = [
    "stocks"
]
export interface GetStocksResponseNestedFields {
    stocks: StockFields;
}
export const getStocksResponseNestedFields: GetStocksResponseNestedFields = {
    stocks: stockQuery
}

// add stock 
export type AddStockRequest = GetStockRequest;
export type AddStockResponse = GetStockResponse;
export const addStockResponse = getStockResponse;
export type AddStockResponseNestedFields = GetStockResponseNestedFields;
export const addStockResponseNestedFields = getStockResponseNestedFields;

// update stock 
export interface UpdateStockRequest {
    stockId: string;
    stock: Partial<Stock>;
}
export type UpdateStockResponse = GetStockResponse;
export const updateStockResponse = getStockResponse;
export type UpdateStockResponseNestedFields = GetStockResponseNestedFields;
export const updateStockResponseNestedFields = getStockResponseNestedFields;

// remove stock 
export interface RemoveStockRequest {
    stockId: string;
}
export interface RemoveStockResponse {
    stockId: string;
}    
export const removeStockResponse: (keyof RemoveStockResponse)[] = [
    "stockId"
]
