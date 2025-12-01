export const storeCategorySchema = {
    createStoreCategory: (query: string) => `
        mutation createStoreCategory($storeCategory: StoreCategoryInput!) {
            createStoreCategory(storeCategory: $storeCategory) {
                ${query}
            }
        }
    `,
    updateStoreCategory: (query: string) => `
        mutation updateStoreCategory($storeCategoryId: String!, $storeCategory: StoreCategoryInput!) {
            updateStoreCategory(storeCategoryId: $storeCategoryId, storeCategory: $storeCategory) {
                ${query}
            }
        }
    `,
    removeStoreCategory: (query: string) => `
        mutation removeStoreCategory($storeCategoryId: String!) {
            removeStoreCategory(storeCategoryId: $storeCategoryId) {
                ${query}
            }
        }
    `,
    // get 
    getStoreCategory: (query: string) => `
        query getStoreCategory($storeCategory: StoreCategoryInput!) {
            getStoreCategory(storeCategory: $storeCategory) {
                ${query}
            }
        }
    `,
    getStoreCategories: (query: string) => `
        query getStoreCategories($search: String, $storeCategory: StoreCategoryInput, $storeCategoryIds: [String], $limit: Int!, $skip: Int!) {
            getStoreCategories(search: $search, storeCategory: $storeCategory, storeCategoryIds: $storeCategoryIds, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
}