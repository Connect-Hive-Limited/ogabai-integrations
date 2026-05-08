export const productSchema = {
  getCustomerProductCountsByIds: (query: string) => `
    query getCustomerProductCountsByIds($userIds: [String]!) {
      getCustomerProductCountsByIds(userIds: $userIds) {
        ${query}
      }
    }
  `,
  searchCategoriesAndTemplate: (query: string) => `
    query searchCategoriesAndTemplate($search: String, $shouldGetFromAllStores: Boolean){
      searchCategoriesAndTemplate(search: $search, shouldGetFromAllStores: $shouldGetFromAllStores) {
        ${query}
      }
    }
  `,
  getProduct: (query: string) => `
    query getProduct($product: ProductInput!, $template: Boolean) {
      getProduct(product: $product, template: $template) {
        ${query}
      }
    }
  `,

  getProducts: (query: string) => `
    query getProducts($product: ProductInput, $productIds: [String], $search: String, $limit: Int!, $skip: Int!, $template: Boolean, $shouldGetFromAllStores: Boolean) {
      getProducts(product: $product, productIds: $productIds, search: $search, limit: $limit, skip: $skip, template: $template, shouldGetFromAllStores: $shouldGetFromAllStores) {
        ${query}
      }
    }
  `,
  getProductByBarcode: (query: string) => `
    query getProductByBarcode($barcode: String!, $fetchFromGS1IfNotFound: Boolean, $template: Boolean) {
      getProductByBarcode(barcode: $barcode, fetchFromGS1IfNotFound: $fetchFromGS1IfNotFound, template: $template) {
        ${query}
      }
    }
  `,
  searchProductNames: (query: string) => `
    query searchProductNames($search: String!, $product: ProductInput, $limit: Int, $skip: Int, $template: Boolean) {
      searchProductNames(search: $search, product: $product, limit: $limit, skip: $skip, template: $template) {
        ${query}
      }
    }
  `,

  addProduct: (mutation: string) => `
    mutation addProduct($product: ProductInput!, $imageTypes: [String], $template: Boolean) {
      addProduct(product: $product, imageTypes: $imageTypes, template: $template) {
        ${mutation}
      }
    }
  `,
  addProducts: (mutation: string) => `
    mutation addProducts($products: ProductsInput!, $template: Boolean) {
      addProducts(products: $products, template: $template) {
        ${mutation}
      }
    }
  `,

  updateProduct: (mutation: string) => `
    mutation updateProduct($productId: String!, $product: ProductInput!, $template: Boolean) {
      updateProduct(productId: $productId, product: $product, template: $template) {
        ${mutation}
      }
    }
  `,

  removeProduct: (mutation: string) => `
    mutation removeProduct($productId: String!, $template: Boolean) {
      removeProduct(productId: $productId, template: $template) {
        ${mutation}
      }
    }
  `
}
export default productSchema