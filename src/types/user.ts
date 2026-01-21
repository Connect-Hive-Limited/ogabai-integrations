export interface UserTypeCounts {
  total: number;
  customers: number;
  manufacturer: number;
  distributors: number;
}

export interface Notification {
  id: string;
  notificationType: "product" | "sale" | "order" | "transaction" | "setting" |"stock"|"debt"|"debtor";
  notificationAction: "new" | "update" | "delete";
  notificationStatus: "active"|"inactive"
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
export interface UserNotification {
  id: string;
  userId: string;
  storeId: string;
  notificationStatus: "read" | "unread";
  createdAt: string;
  updatedAt: string;
  itemId?: string;
  notificationId: string;
  notification?: Notification
}

// --------------------Admin Dashboard Statistics --------------
export interface MonthlyUserStat {
  month: number;
  total: number;
}
// -------------------- Dashboard Statistics --------------
export interface ProductCounts {
  totalProduct: number;
  totalProductThisMonth: number;
  totalProductThisYear: number;
  totalProductToday: number;
}
export interface RestockCounts {
  totalRestock: number;
  totalRestockThisMonth: number;
  totalRestockThisYear: number;
  totalRestockToday: number;
}
export interface SaleCounts {
  totalSales: number;
  totalSalesThisMonth: number;
  totalSalesThisYear: number;
  totalSalesToday: number;
}
export interface TransactionCounts {
  totalTx: number;
  totalTxThisMonth: number;
  totalTxThisYear: number;
  totalTxToday: number;
}


// -------------------- Enums as Unions --------------------
export type UserStatus = "active" | "suspended" | "inactive";
export type UserType = "manufacturer" | "distributor" | "admin";

// -------------------- Core Entities --------------------
export interface Manufacturer {
  _id: string;
  userId: string;
  referralCode: string;
  userStatus: UserStatus;
  createdAt: string;
}

export interface Distributor {
  _id: string;
  userId: string;
  referralCode: string;
  userStatus: UserStatus;
  createdAt: string;
}

export interface Admin {
  _id: string;
  userId: string;
  userStatus: UserStatus;
  createdAt: string;
}

export interface User {
  _id: string;
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  phoneVerifiedAt: string;
  phoneVerified: string;   // could be boolean in practice
  country: string;
  profileImageUrl: string;
  dob: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserDevice {
  _id: string;
  userId: string;
  identifier: string;
  createdAt: string;
  lastUsedAt: string;
}

// -------------------- Never Returned --------------------
export interface Auth {
  _id: string;
  userId: string;
  passwordHash: string;
  token: string;
  pinHash: string;
}

export interface OTP {
  _id: string;
  otp: string;
  code: string;
}

export interface UserSetting {
  _id: string;
  userId: string;
  defaultStoreId: string;
  hasFa2: string;              // could be boolean
  hasTransactionPin: string;   // could be boolean
  subscriptionPlanID: string;
  subBillType: string;
}

export interface TransactionPin {
  _id: string;
  userId: string;
  pin: string;
}

// -------------------- Notifications --------------------
export interface UserNotificationSettings {
  _id: string;
  userId: string;
  notificationChannels: NotificationChannels;
  serviceUpdate: ServiceUpdate;
}

export interface NotificationChannels {
  emailNotification: boolean;
  smsNotification: boolean;
  pushNotification: boolean;
}

export interface ServiceUpdate {
  debtorAlert: boolean;
  priceMovement: boolean;
  inventory: boolean;
  deliveryStatus: boolean;
  saleAlert: boolean;
}
