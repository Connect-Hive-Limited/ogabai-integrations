import { Account, NotificationChannels, ServiceUpdate, User, UserNotificationSettings, UserSetting, Wallet } from "../../types";

export type AccountFields = (keyof Account)[];
export type WalletFields = (keyof Wallet)[];
export type UserFields = (keyof User)[];
export type UserNotificationSettingsFields = (keyof UserNotificationSettings)[];
export type NotificationChannelsFields = (keyof NotificationChannels)[];
export type ServiceUpdateFields = (keyof ServiceUpdate)[]
export type UserSettingFields = (keyof UserSetting)[]


export const accountQuery:AccountFields = [
    "_id", "accountStatus", "bvn", "createdAt", "nin", "totalBalance", "userId", "wallets",
]
export const walletQuery: WalletFields = [
    "_id", "accountId", "balance", "createdAt", "currency", "status", "storeId",
]
export const userQuery:UserFields = [
    "_id", "country", "createdAt", "dob", "email",
    "firstName", "isAdmin", "lastName", "phone",
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