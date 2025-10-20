import { DateFilter, Product, Sale, Transaction, TransactionPin } from "../../../types";
import { _getProductResponseNestedFields, GetProductResponseNestedFields } from "../../inventory";
import { ProductFields, productNameQuery } from "../../inventory/entities";
import { SaleFields, saleQuery, TransactionFields, transactionQuery } from "../sale.entity";

export interface GetTransactionRequest {
    transaction: Promise<Transaction>;
}
export interface GetTransactionResponse {
    transaction: Transaction
}
export const getTransactionResponse: (keyof GetTransactionResponse)[] = [
    "transaction"
]
export interface GetTransactionResponseNestedFields {
    transaction: TransactionFields
    sales: SaleFields;
}
export const _getTransactionResponseNestedFields: Omit<GetTransactionResponseNestedFields, "transaction"> = {
    sales: saleQuery
}
export const getTransactionResponseNestedFields: GetTransactionResponseNestedFields = {
    transaction: transactionQuery,
    ..._getTransactionResponseNestedFields
}


// get transactions
export interface GetTransactionsRequest {
    transactionIds?: string[];
    transaction?: Partial<Transaction>;
    dateFilter?: Partial<DateFilter>;
    shouldGetFromAllStores?: boolean;
    limit: number;
    skip: number;
}
export interface GetTransactionsResponse {
    transactions: Transaction[];
    uniqueProducts: Product[];
}
export const getTransactionsResponse: (keyof GetTransactionsResponse)[] = [
    "transactions", "uniqueProducts"
]
export interface GetTransactionsResponseNestedFields extends Omit<GetProductResponseNestedFields, "product"> {
    transactions: TransactionFields;
    sales: SaleFields;
    uniqueProducts: ProductFields;
}
export const _getTransactionsResponseNestedFields: Omit<GetTransactionsResponseNestedFields, "transactions"> = {
    sales: saleQuery,
    uniqueProducts: productNameQuery,
    ..._getProductResponseNestedFields
}
export const getTransactionsResponseNestedFields: GetTransactionsResponseNestedFields = {
    transactions: transactionQuery,
    ..._getTransactionsResponseNestedFields
}

// add transactions 
export interface AddTransactionRequest {
    transaction: Partial<Omit<Transaction, "txStatus"|"saleStatus"|"storeId">>;
}
export type AddTransactionResponse = GetTransactionResponse;
export const addTransactionResponse = getTransactionResponse;
export type AddTransactionResponseNestedFields = GetTransactionResponseNestedFields;
export const addTransactionResponseNestedFields = getTransactionResponseNestedFields;

// update transaction 
export interface UpdateTransactionRequest {
    transactionId: string;
    transaction: Partial<Transaction>;
}
export type UpdateTransactionResponse = GetTransactionResponse;
export const updateTransactionResponse = getTransactionResponse;
export type UpdateTransactionResponseNestedFields = GetTransactionResponseNestedFields;
export const updateTransactionResponseNestedFields = getTransactionResponseNestedFields;