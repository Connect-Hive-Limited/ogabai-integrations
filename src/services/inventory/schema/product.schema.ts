export const productSchema = {
  getProduct: (query: string) => `
    query getProduct($product: ProductInput!, $template: Boolean) {
      product(product: $product, template: $template) {
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
      productByBarcode(barcode: $barcode, fetchFromGS1IfNotFound: $fetchFromGS1IfNotFound, template: $template) {
        ${query}
      }
    }
  `,
  searchProductName: (query: string) => `
    query searchProductName($search: String!, $limit: Int, $skip: Int, $template: Boolean) {
      searchProductName(search: $search, limit: $limit, skip: $skip, template: $template) {
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