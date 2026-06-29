import { Product, ProductPackage } from "../../../types/inventory";
import { PackageFields, packageQuery, PriceFields, priceQuery, ProductFields, productQuery, StockFields, stockQuery } from "../inventory.entities";
import { getProductResponseNestedFields, GetProductResponseNestedFields } from "./product.type";

// get package
export interface GetPackageRequest {
    productPackage: Partial<ProductPackage>;
    template?: boolean;
}
export interface GetPackageResponse {
    productPackage: ProductPackage;
}
export interface GetPackageResponseFields {
    productPackage: PackageFields;
    price: PriceFields;
    stocks: StockFields;
}
export const getPackageResponseFields: (keyof GetPackageResponse)[] = [
    "productPackage",
]
export const _getPackageResponseNestedFields: Omit<GetPackageResponseFields, "productPackage"> = {
    price: priceQuery,
    stocks: stockQuery
}
export const getPackageResponseNestedFields: GetPackageResponseFields = {
    productPackage: packageQuery,
    ..._getPackageResponseNestedFields,
}

// remove package
export interface RemovePackageRequest {
    packageId: string;
    template?: boolean;
}
export interface RemovePackageResponse {
    packageId: string;
}
export const removePackageResponseFields: (keyof RemovePackageResponse)[] = [
    "packageId"
];

// update package
export interface UpdatePackagesRequest {
    packages: UpdatePackageRequest[];
}
export interface UpdatePackagesResponse {
    packages: ProductPackage[];
}
export interface UpdatePackageRequest {
    packageId: string;
    productPackage: Partial<ProductPackage>;
    template?: boolean;
}
export interface UpdatePackageResponse {
    productPackage: ProductPackage;
}
export type UpdatePackageResponseFields = GetPackageResponseFields;
export const updatePackageResponseFields = getPackageResponseFields;
export const updatePackageResponseNestedFields = getPackageResponseNestedFields;

// add packages
export interface AddPackagesRequest {
    productPackages: Partial<ProductPackage>[];
    template?: boolean;
}
export interface AddPackagesResponse {
    productPackages: ProductPackage[];
}
export interface AddPackagesResponseFields extends Omit<GetPackageResponseFields, "productPackage"> {
    productPackages: PackageFields;
}
export const addPackagesResponseFields: (keyof AddPackagesResponse)[] = [
    "productPackages",
]
export const addPackagesResponseNestedFields: AddPackagesResponseFields = {
    productPackages: packageQuery,
    ..._getPackageResponseNestedFields,
}

// add package
export interface AddPackageRequest {
    productPackage: Partial<ProductPackage>;
    template?: boolean;
}
export interface AddPackageResponse {
    productPackage: ProductPackage; 
}
export type AddPackageResponseFields = GetPackageResponseFields;
export const addPackageResponseFields = getPackageResponseFields;
export const addPackageResponseNestedFields = getPackageResponseNestedFields;

export interface GetPackagesRequest {
    productPackage?: Partial<ProductPackage>;
    packageIds?: string[];
    search?: string;
    template?: boolean;
    shouldGetFromAllStores?: boolean;
    limit: number;
    skip: number;
}
export interface GetPackagesResponse {
    productPackages: ProductPackage[];
    uniqueProducts: Product[];
}
export interface GetPackagesResponseFields extends Omit<GetPackageResponseFields, "productPackage">, GetProductResponseNestedFields {
    productPackages: PackageFields;
    uniqueProducts: ProductFields
}
export const getPackagesResponseFields: (keyof GetPackagesResponse)[] = [
    "productPackages", "uniqueProducts"
]
export const getPackagesResponseNestedFields: GetPackagesResponseFields = {
    // productPackages: packageQuery, product already contained this 
    uniqueProducts: productQuery,
    ...getPackageResponseNestedFields,
    ...getProductResponseNestedFields
}