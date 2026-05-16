import { Order, Sale, Transaction } from "../../types";

export type TransactionFields = (keyof Transaction)[];
export const transactionQuery: TransactionFields = [
    "_id", 
    "amountPaid",
    "amountTotal",
    "createdAt",
    "from", 
    "fromWallet", 
    "isCredit",
    "paymentDate", 
    "paymentType",
    "platform", 
    "saleIds", 
    "saleStatus", 
    "sales", 
    "storeId",
    "to", 
    "toWallet", 
    "txStatus",
    "customerId",
    "transactionType"
]
export type OrderFields = (keyof Order)[];
export const orderQuery: OrderFields = [
    "_id",
    "createdAt",
    "orderStatus",
    "transactionId",
    "userId"
]
export type SaleFields = (keyof Sale)[];
export const saleQuery: SaleFields = [
    "_id",
    "amountTotal", 
    "createdAt", 
    "packageId", 
    "productId", 
    "quantity", 
    "storeId"
]