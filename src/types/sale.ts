// -------------------- DateFilter --------------------
export type DateFilter = {
  startDate: string;
  endDate: string;
};

// -------------------- Sale --------------------
export type Sale = {
  _id: string;
  productId: string;
  packageId: string;
  quantity: number;              // int32
  amountTotal: number;           // float
  quantityInMetricUnit: number;  // int64
  createdAt: string;
  storeId: string;
  transactionId?: string;
};

// -------------------- Transaction --------------------

// "paid" | "credit"
export type SaleStatus = "paid" | "credit";

// "cash" | "card" | "transfer" | "wallet"
export type PaymentType = "cash" | "card" | "transfer" | "wallet";

// "pos" | "commerce" | "wallet"
export type Platform = "pos" | "commerce" | "wallet";

// "pending" | "processing" | "completed" | "failed"
export type TxStatus = "pending" | "processing" | "completed" | "failed";

export type Transaction = {
  _id: string;
  from: string;
  to: string;
  saleStatus: SaleStatus;
  paymentType: PaymentType;
  paymentDate: string;
  amountTotal: number;
  amountPaid: number;
  saleIds: string[];
  txStatus: TxStatus;
  platform: Platform;
  fromWallet: string;
  toWallet: string;
  isCredit: string;   // (can be boolean if backend supports it)
  createdAt: string;
  sales: Sale[];
  storeId: string;
};

// -------------------- Order --------------------
export type OrderStatus = "pending" | "processing" | "routing" | "delivered";

export type Order = {
  _id: string;
  userId: string;
  orderStatus: OrderStatus;
  transactionId: string;
  storeId: string;
  createdAt: string;
};

// -------------------- User Stats --------------------
export type UserSaleCounts = {
  totalSales: bigint;
  totalSalesThisYear: bigint;
  totalSalesThisMonth: bigint;
  totalSalesToday: bigint;
};

export type UserTxAmounts = {
  totalTx: bigint;
  totalTxThisYear: bigint;
  totalTxThisMonth: bigint;
  totalTxToday: bigint;
};
