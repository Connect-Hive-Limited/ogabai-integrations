export const storeCategoryProductSchema = {
    createStoreCategoryProduct: (query: string) => `
        mutation createStoreCategoryProduct($storeCategoryProduct: StoreCategoryProductInput!) {
            createStoreCategoryProduct(storeCategoryProduct: $storeCategoryProduct) {
                ${query}
            }
        }
    `,
    updateStoreCategoryProduct: (query: string) => `
        mutation updateStoreCategoryProduct($storeCategoryProductId: String!, $storeCategoryProduct: StoreCategoryProductInput!) {
            updateStoreCategoryProduct(storeCategoryProductId: $storeCategoryProductId, storeCategoryProduct: $storeCategoryProduct) {
                ${query}
            }
        }
    `,
    removeStoreCategoryProduct: (query: string) => `
        mutation removeStoreCategoryProduct($storeCategoryProductId: String!) {
            removeStoreCategoryProduct(storeCategoryProductId: $storeCategoryProductId) {
                ${query}
            }
        }
    `,
    // get 
    getStoreCategoryProduct: (query: string) => `
        query getStoreCategoryProduct($storeCategoryProduct: StoreCategoryProductInput!) {
            getStoreCategoryProduct(storeCategoryProduct: $storeCategoryProduct) {
                ${query}
            }
        }
    `,
    getStoreCategoryProducts: (query: string) => `
        query getStoreCategoryProducts($search: String, $storeCategoryProduct: StoreCategoryProductInput, $storeCategoryProductIds: [String], $limit: Int!, $skip: Int!) {
            getStoreCategoryProducts(search: $search, storeCategoryProduct: $storeCategoryProduct, storeCategoryProductIds: $storeCategoryProductIds, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
}