import { Address, Price, Product, ProductAttribute, ProductCategory, ProductName, ProductPackage, Stock, Store } from "../../types";


export type AttributeFields = (keyof ProductAttribute)[]
export const attributeQuery: AttributeFields = [
    "name",
    "value",
]
export type PriceFields = (keyof Price)[];
export const priceQuery:PriceFields = [
    "_id",
    "packageId",
    "sellingPrice",
    "costPrice",
    "newSellingPrice",
    "newCostPrice",
    "deduction",
    "storeId",
    "timestamp",
    "createdAt"
]
export type StockFields = (keyof Stock)[]
export const stockQuery: StockFields = [
    "_id",
    "packageId",
    "stockQty",
    "costPerPackage",
    "sellPerPackage",
    "deduction",
    "timestamp",
    "storeId",
    "createdAt"
]
export type StoreFields = (keyof Store)[]
export const storeQuery: StoreFields = [
    "_id",
    "name",
    "address",
    "shopType",
    "ownerId",
    "createdAt",
    "storeLocation"
]
export type AddressFields = (keyof Address)[]
export const addressQuery:AddressFields = [
    "city", "country", "state", "zipcode"
]
export type CategoryFields = (keyof ProductCategory)[]
export const categoryQuery: CategoryFields = [
    "_id",
    "name",
    "description",
    "categoryStatus",
    "storeId",
    "createdAt",
    "status",
    "isTemplate"
]

export type PackageFields = (keyof ProductPackage)[]
export const productQuery:ProductFields = [
    "_id",
    "barcode",
    "category",
    "categoryId",
    "createdAt",
    "description",
    "images",
    "metricPackage",
    "metricPackageId",
    "name",
    "productAttributes",
    "productPackages",
    "storeId",
    "tag", 
    "totalStockInMetricPackage",
]
export type ProductNamesFields = (keyof ProductName)[]
export const productNameQuery: ProductNamesFields = [
    "_id",
    "name"
]
export type ProductFields = (keyof Product)[]
export const packageQuery: PackageFields = [
    "_id",
    "name",
    "description",
    "trackIndex",
    "productId",
    "unit",
    "unitQuantity",
    "totalStock",
    "barcode",
    "priorityPrice",
    "stockLimit",
    "storeId",
    "createdAt",
    "price",
    "deduction",
    "stocks"
]