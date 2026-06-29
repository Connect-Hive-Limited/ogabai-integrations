export const stockSchema = {
  getStock: (query: string) => `
    query getStock($stock: StockInput!) {
      stock(stock: $stock) {
        ${query}
      }
    }
  `,

  getStocks: (query: string) => `
    query getStocks($stock: StockInput, $stockIds: [String], $limit: Int!, $skip: Int!) {
      getStocks(stock: $stock, stockIds: $stockIds, limit: $limit, skip: $skip) {
        ${query}
      }
    }
  `,

  addStock: (mutation: string) => `
    mutation addStock($stock: StockInput!) {
      addStock(stock: $stock) {
        ${mutation}
      }
    }
  `,

  updateStock: (mutation: string) => `
    mutation updateStock($stockId: String!, $stock: StockInput!) {
      updateStock(stockId: $stockId, stock: $stock) {
        ${mutation}
      }
    }
  `,

  removeStock: (mutation: string) => `
    mutation removeStock($stockId: String!) {
      removeStock(stockId: $stockId) {
        ${mutation}
      }
    }
  `
}
