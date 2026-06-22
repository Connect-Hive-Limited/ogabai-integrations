export const storeSchema = {
  getStoreCount: (query: string) => `
    query getStoreCount($store: StoreInput!) {
      getStoreCount(store: $store) {
        ${query}
      }
    }
  `,
  getStore: (query: string) => `
    query getStore($store: StoreInput!) {
      getStore(store: $store) {
        ${query}
      }
    }
  `,

  getStores: (query: string) => `
    query getStores($search: String, $store: StoreInput, $storeIds: [String], $limit: Int, $skip: Int) {
      getStores(search: $search, store: $store, storeIds: $storeIds, limit: $limit, skip: $skip) {
        ${query}
      }
    }
  `,

  createStore: (mutation: string) => `
    mutation createStore($store: StoreInput) {
      createStore(store: $store) {
        ${mutation}
      }
    }
  `,

  updateStore: (mutation: string) => `
    mutation updateStore($storeId: String, $store: StoreInput) {
      updateStore(storeId: $storeId, store: $store) {
        ${mutation}
      }
    }
  `,

  deleteStore: (mutation: string) => `
    mutation deleteStore($storeId: String) {
      deleteStore(storeId: $storeId) {
        ${mutation}
      }
    }
  `
}

export default storeSchema