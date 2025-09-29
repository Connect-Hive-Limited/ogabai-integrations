export const saleSchema = {
    getSales: (query: string) => `
        query getSales($saleIds: [String], $saleFilter: SaleFilterInput, $ShouldGetFromAllStores: Boolean, $dateFilter: DateFilterInput, $limit: Int, $skip: Int) {
            getSales(saleIds: $saleIds, saleFilter: $saleFilter, ShouldGetFromAllStores: $ShouldGetFromAllStores, dateFilter: $dateFilter, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
    updateSale: (query: string) => `
        mutation updateSale($saleId: String!, $sale: SaleInput!) {
            updateSale(saleId: $saleId, sale: $sale) {
                ${query}
            }
        }
    `,
}