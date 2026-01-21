import { Account, MonthlyUserStat, Notification, NotificationChannels, ProductCounts, RestockCounts, SaleCounts, ServiceUpdate, TransactionCounts, User, UserNotification, UserNotificationSettings, UserSetting, UserTypeCounts, Wallet } from "../../types";

export type AccountFields = (keyof Account)[];
export type WalletFields = (keyof Wallet)[];
export type UserFields = (keyof User)[];
export type UserNotificationSettingsFields = (keyof UserNotificationSettings)[];
export type NotificationChannelsFields = (keyof NotificationChannels)[];
export type ServiceUpdateFields = (keyof ServiceUpdate)[]
export type UserSettingFields = (keyof UserSetting)[]
export type ProductCountsFields = (keyof ProductCounts)[];
export type RestockCountsFields = (keyof RestockCounts)[]
export type SaleCountsFields = (keyof SaleCounts)[];
export type TransactionCountsFields = (keyof TransactionCounts)[];
export type UserNotificationFields = (keyof UserNotification)[];
export type NotificationFields = (keyof Notification)[]
export type MonthlyUserStatFields = (keyof MonthlyUserStat)[]
export type UserTypeCountsFields = (keyof UserTypeCounts)[]




export const userTypeCountsQuery:UserTypeCountsFields = [
    "customers", "distributors", "manufacturer", "total"
]
export const monthlyUserStatQuery:MonthlyUserStatFields = [
    "month", "total"
]
export const notificationQuery: NotificationFields = [
    "createdAt",
    "description",
    "id",
    "notificationAction",
    "notificationStatus",
    "notificationType",
    "title",
    "updatedAt"
]
export const userNotificationQuery:UserNotificationFields = [
    "createdAt",
    "id",
    "notificationStatus",
    "updatedAt",
    "userId",
    "itemId",
    "notificationId",
    "notification",
    "storeId"
]
export const transactionCountsQuery:TransactionCountsFields = [
    "totalTx", "totalTxThisMonth", "totalTxThisYear", "totalTxToday"
]
export const saleCountsQuery:SaleCountsFields = [
    "totalSales", "totalSalesThisMonth", "totalSalesThisYear", 
    "totalSalesToday"
]
export const restockCountsQuery:RestockCountsFields = [
    "totalRestock", "totalRestockThisMonth", "totalRestockThisYear", 
    "totalRestockToday"
]
export const productCountsQuery:ProductCountsFields = [
    "totalProduct", "totalProductThisMonth", "totalProductThisYear",
    "totalProductToday"
]


export const accountQuery:AccountFields = [
    "_id", "accountStatus", "bvn", "createdAt", "nin", "totalBalance", "userId", "wallets",
]
export const walletQuery: WalletFields = [
    "_id", "accountId", "balance", "createdAt", "currency", "status", "storeId",
]
export const userQuery:UserFields = [
    "_id", "country", "createdAt", "dob", "email",
    "firstName", "lastName", "phone",
    "phoneVerified", "phoneVerifiedAt", "profileImageUrl", 
    "updatedAt"
]
export const notificationChannelsQuery:NotificationChannelsFields = [
    "emailNotification", "pushNotification", "smsNotification"
]
export const serviceUpdateQuery:ServiceUpdateFields = [
    "debtorAlert", "deliveryStatus", "inventory", "priceMovement", "saleAlert",
]
export const userNotificationSettingsQuery:UserNotificationSettingsFields = [
    "_id", "notificationChannels", "serviceUpdate", "userId"
]
export const userSettingQuery:UserSettingFields = [
    "_id", "defaultStoreId", "hasFa2", "hasTransactionPin",
    "subBillType", "subscriptionPlanID", "userId"
]