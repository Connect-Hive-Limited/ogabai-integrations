import { DateFilter, Product, Sale } from "../../../types";
import { SaleFields, saleQuery } from "../sale.entity"
import { ProductFields, productQuery } from "../../inventory/inventory.entities"
import { _getProductResponseNestedFields, GetProductResponseNestedFields } from "../../inventory/types"
export interface GetSalesRequest {
    sale: Promise<Sale>;
}

export interface GetSalesResponse {
    sale: Sale;
}

export const getSaleResponse: (keyof GetSalesResponse)[] = ["sale"]
export interface GetSaleResponseNestedFields extends Omit<GetProductResponseNestedFields, "product"> {
    sale: SaleFields;
}
export const _getSaleResponseNestedFields: Omit<GetSaleResponseNestedFields, "sale"> = {
    ..._getProductResponseNestedFields
}
export const getSaleResponseNestedFields: GetSaleResponseNestedFields = {
    sale: saleQuery,
    ..._getSaleResponseNestedFields
}

export interface GetSalesRequest {
    saleIds?: string[];
    saleFilter?: Promise<Sale>;
    ShouldGetFromAllStores?: boolean;
    dateFilter?: DateFilter;
    limit?: number;
    skip?: number;
}
export interface GetSalesResponse {
    sales: Sale[];
    uniqueProducts: Product[]
}

export const getSalesResponse: (keyof GetSalesResponse)[] = [
    "sales", "uniqueProducts"
]
export interface GetSalesResponseNestedFields extends Omit<GetSaleResponseNestedFields, "sale"> {
    sales: SaleFields;
    uniqueProducts: ProductFields;
}
export const getSalesResponseNestedFields: GetSalesResponseNestedFields = {
    sales: saleQuery,
    uniqueProducts: productQuery,
    ..._getSaleResponseNestedFields
}

// update sale 

export interface UpdateSaleRequest {
    saleId: string;
    sale: Promise<Sale>;
}

export interface UpdateSaleResponse {
    sale: Sale;
}
export const UpdateSaleResponse: (keyof UpdateSaleResponse)[] = ["sale"];
export type UpdateSaleResponseNestedFields = GetSaleResponseNestedFields;
export const updateSaleResponseNestedFields: UpdateSaleResponseNestedFields = getSaleResponseNestedFields