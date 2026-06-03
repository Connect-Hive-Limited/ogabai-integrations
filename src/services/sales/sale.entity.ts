import { Expense, ExpenseCategory, Order, Sale, Transaction } from "../../types";


export type ExpenseFields = (keyof Expense)[];
export const expenseQuery: ExpenseFields = [
    "amount",
    "createdAt",
    "createdById",
    "description",
    "dispenseStaffIds",
    "expenseCategoryId",
    "expenseType",
    "id",
    "narration",
    "paymentType",
    "repeatedEvery",
    "title",
    "storeId"
];

export type ExpenseCategoryFields = (keyof ExpenseCategory)[];
export const expenseCategoryQuery: ExpenseCategoryFields = [
    "id",
    "createdAt",
    "description",
    "storeId",
    "title"
]


export type TransactionFields = (keyof Transaction)[];
export const transactionQuery: TransactionFields = [
    "_id", 
    "amountPaid",
    "amountTotal",
    "createdAt",
    "createdById",
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
    "transactionType",
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