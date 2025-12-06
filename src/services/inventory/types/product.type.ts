import { Product, ProductCategory } from "../../../types"
import { 
    AttributeFields,
    attributeQuery,
    CategoryFields,
    categoryQuery,
    PackageFields, packageQuery, 
    PriceFields, 
    priceQuery, 
    ProductFields, productNameQuery, ProductNamesFields, 
    productQuery, 
    StockFields,
    stockQuery} from "../entities"

export interface GetProductRequest {
    product: Partial<Product>
    template?: boolean;
}
export interface GetProductResponse {
    product: Product
}
export interface GetProductResponseNestedFields {
    product: ProductFields;
    productPackages: PackageFields;
    smallestPackage: PackageFields;
    category: CategoryFields;
    price: PriceFields;
    stocks: StockFields;
    productAttributes: AttributeFields;
}
export const getProductResponseFields: (keyof GetProductResponse)[] = [
    "product"
]
export const _getProductResponseNestedFields: Omit<GetProductResponseNestedFields, "product"> = {
    productPackages: packageQuery,
    smallestPackage: packageQuery,
    category: categoryQuery,
    price: priceQuery,
    stocks: stockQuery,
    productAttributes: attributeQuery,
}
export const getProductResponseNestedFields: GetProductResponseNestedFields = {
    product: productQuery,
    ..._getProductResponseNestedFields
}


// get products
export interface GetProductsRequest {
    product?: Partial<Product>
    productIds?: string[]
    search?: string
    limit: number
    skip: number
    template?: boolean
    shouldGetFromAllStores?: boolean
}
export interface GetProductsResponse {
    products: Product[]
}
export interface GetProductsResponseNestedFields extends Omit<GetProductResponseNestedFields, "product">{
    products: ProductFields;
}
export const getProductsResponseFields: (keyof GetProductsResponse)[] = [
    "products"
]
export const getProductsResponseNestedFields: GetProductsResponseNestedFields = {
    products: productQuery,
    ..._getProductResponseNestedFields
}


export interface GetProductByBarcodeRequest {
    barcode: string
    fetchFromGS1IfNotFound?: boolean
    template?: boolean
}
export interface GetProductByBarcodeResponse {
    Product: Product; // this is Capital letter for now
    fromGS1: boolean;
    gs1ProductInfo: any;
    productLookup: any;
}
export interface GetProductByBarcodeResponseNestedFields extends Omit<GetProductResponseNestedFields, "product"> {
    Product: ProductFields;
}
export const getProductByBarcodeResponse:(keyof GetProductByBarcodeResponse)[] = [
    "Product"
]
export const getProductByBarcodeResponseNestedFields: GetProductByBarcodeResponseNestedFields = {
    Product: productQuery,
    ..._getProductResponseNestedFields
}

//search product names 
export interface SearchProductNamesRequest {
    search: string
    product?: Partial<Product>;
    limit?: number
    skip?: number
    template?: boolean
}
export interface SearchProductNamesResponse {
    productNames: Product[]
}
export const searchProductNamesResponse: (keyof SearchProductNamesResponse)[] = [
    "productNames"
]
export interface SearchProductNamesResponseNestedFields {
    productNames: ProductNamesFields;
}
export const searchProductNamesResponseNestedFields: SearchProductNamesResponseNestedFields = {
    productNames: productNameQuery
}

// 

// add product 
export interface UploadImageResponse {
    fileUrl: string
    url: string
}
export interface AddProductRequest {
    product: Partial<Product>
    imageTypes?: string[]
    template?: boolean
}
export interface AddProductResponse {
    product: Product;
    uploadImageResponse: UploadImageResponse
}
export interface AddProductResponseNestedFields extends Omit<GetProductResponseNestedFields, "product"> {
    product: ProductFields;
    uploadImageResponse: (keyof UploadImageResponse)[];

}
export const addProductResponseFields: (keyof AddProductResponse)[] = [
    "product"
]
export const addProductResponseNestedFields: AddProductResponseNestedFields = {
    product: productQuery,
    uploadImageResponse: ["fileUrl", "url"],
    ..._getProductResponseNestedFields
}

// update product
export interface UpdateProductRequest {
    productId: string
    product: Partial<Product>
    template?: boolean
}
export interface UpdateProductResponse {
    product: Product
}
export type UpdateProductResponseNestedFields = GetProductResponseNestedFields;
export const updateProductResponseFields = getProductResponseFields
export const updateProductResponseNestedFields = getProductResponseNestedFields

// remove product 
export interface RemoveProductRequest {
    productId: string
    template?: boolean
}
export interface RemoveProductResponse {
    productId: string;
}
export const removeProductResponseFields: (keyof RemoveProductResponse)[] = [
    "productId"
]

// search categories and templates 
export interface SearchCategoriesAndTemplateRequest {
    search?: string
    shouldGetFromAllStores?: boolean
}
export interface SearchCategoriesAndTemplateResponse {
    productCategories: ProductCategory[];
}
export const searchCategoriesAndTemplateResponse: (keyof SearchCategoriesAndTemplateResponse)[] = [
    "productCategories"
]
export interface SearchCategoriesAndTemplateResponseNestedFields {
    productCategories: CategoryFields;
}
export const searchCategoriesAndTemplateResponseNestedFields: SearchCategoriesAndTemplateResponseNestedFields = {
    productCategories: categoryQuery
}