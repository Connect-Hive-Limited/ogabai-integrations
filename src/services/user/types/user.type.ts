import { 
    Account,
    MonthlyUserStat,
    ProductCounts,
    RestockCounts,
    SaleCounts,
    Store,
    TransactionCounts,
    User,
    UserSetting,
    UserType, 
    UserTypeCounts
} from "../../../types";
import { AccountFields, MonthlyUserStatFields, monthlyUserStatQuery, ProductCountsFields, productCountsQuery, RestockCountsFields, restockCountsQuery, SaleCountsFields, saleCountsQuery, TransactionCountsFields, transactionCountsQuery, UserFields, userQuery, UserSettingFields, userSettingQuery, UserTypeCountsFields, userTypeCountsQuery } from "../user.entity";
import { AddressFields, addressQuery, StoreFields, storeQuery } from "../../inventory/entities";
import { getAccountResponseNestedFields } from "./account.type"

// admin dashboard stats 

export interface GetUserTypeCountsResponse {
    userTypeCounts: UserTypeCounts
}
export const getUserTypeCountsResponse:(keyof GetUserTypeCountsResponse)[] = [
    "userTypeCounts"
]
export interface GetUserTypeCountsResponseNestedFields {
    userTypeCounts: UserTypeCountsFields
}
export const getUserTypeCountsResponseNestedFields:GetUserTypeCountsResponseNestedFields = {
    userTypeCounts: userTypeCountsQuery
}


export interface GetMonthlyUserStatsByYearRequest {
    year: number;
}
export interface GetMonthlyUserStatsByYearResponse {
    monthlyUserStat: MonthlyUserStat[];
}
export interface GetMonthlyUserStatsByYearResponseNestedFields {
    monthlyUserStat: MonthlyUserStatFields;
}
export const getMonthlyUserStatsByYearResponse: (keyof GetMonthlyUserStatsByYearResponse)[] = [
    "monthlyUserStat"
]
export const getMonthlyUserStatsByYearResponseNestedFields: GetMonthlyUserStatsByYearResponseNestedFields = {
    monthlyUserStat: monthlyUserStatQuery
}


// user dashboard stats 
export interface GetUserDashStatsResponse {
  outOfStockCount: number;
  productCounts: ProductCounts;
  restockCounts: RestockCounts;
  saleCounts: SaleCounts;
  stockValue: number;
  transactionCounts: TransactionCounts;
}
export const getUserDashStatsResponse:(keyof GetUserDashStatsResponse)[] = [
    "outOfStockCount", "productCounts", "restockCounts", "saleCounts",
    "stockValue", "transactionCounts"
]
export interface GetUserDashStatsResponseNestedFields {
    productCounts: ProductCountsFields;
    restockCounts: RestockCountsFields;
    saleCounts: SaleCountsFields;
    transactionCounts: TransactionCountsFields;
}
export const getUserDashStatsResponseNestedFields:GetUserDashStatsResponseNestedFields = {
    productCounts: productCountsQuery,
    restockCounts: restockCountsQuery,
    saleCounts: saleCountsQuery,
    transactionCounts: transactionCountsQuery
}

// get user 
export interface GetUserRequest {
    userId: string;
}
export interface GetUserResponse {
    user: User;
}
export interface GetUserResponseNestedFields {
    user: UserFields;
    address: AddressFields;
}
export const getUserResponse: (keyof GetUserResponse)[] = [
    "user"
]
export const _getUserResponseNestedFields: Omit<GetUserResponseNestedFields, "user"> = {
    address: addressQuery,
}
export const getUserResponseNestedFields: GetUserResponseNestedFields = {
    user: userQuery,
    ..._getUserResponseNestedFields,
}


// get users
export interface GetUsersRequest {
    // search?: string;
    userIds?: string[];
    user?: Partial<User>;
    limit: number;
    skip: number;
}
export interface GetUsersResponse {
    users: User[];
}
export interface GetUsersResponseNestedFields extends Omit<GetUserResponseNestedFields, "user"> {
    users: UserFields
}
export const getUsersResponse: (keyof GetUsersResponse)[] = [
    "users"
];
export const getUsersResponseNestedFields: GetUsersResponseNestedFields = {
    users: userQuery,
    ..._getUserResponseNestedFields,
}


// add user 
export interface AddUserRequest {
    user: User;
    userType: UserType;
}
export interface AddUserResponse {
    user: User;
}
export type AddUserResponseNestedFields = GetUserResponseNestedFields;
export const addUserResponse = getUserResponse;
export const addUserResponseNestedFields = getUserResponseNestedFields;

// update user 
export interface UpdateUserRequest {
    userId: string;
    user: Partial<User>;
}
export interface UploadUserImageResponse {
    url: string;
    fileUrl: string;
}
export interface UpdateUserResponse {
    user: User;
    uploadImageResponse: UploadUserImageResponse
}
export interface UpdateUserResponseNestedFields {
    uploadImageResponse: (keyof UploadUserImageResponse)[]
    user: UserFields
}
export const updateUserResponse: (keyof UpdateUserResponse)[] = [
    "uploadImageResponse", "user"
]

export const updateUserResponseNestedFields: UpdateUserResponseNestedFields = {
    uploadImageResponse: ["fileUrl", "url"],
    user: userQuery,
}

// me 
export interface MeResponse {
    user: User;
    account?: Account;
    stores?: Store[];
    userSetting?: UserSetting;
}
export const meResponse: (keyof MeResponse)[] = [
    "user",
    "account",
    "stores",
    "userSetting"
]
export interface MeResponseNestedFields extends GetUserResponseNestedFields {
    user: UserFields;
    account: AccountFields;
    stores: StoreFields;
    userSetting: UserSettingFields;
}
export const meResponseNestedFields: MeResponseNestedFields = {
    stores: storeQuery,
    userSetting: userSettingQuery,
    ...getUserResponseNestedFields,
    ...getAccountResponseNestedFields,
}