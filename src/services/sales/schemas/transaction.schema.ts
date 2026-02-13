export const transactionSchema = {
    getTransaction: (query: string) => `
        query getTransaction($transaction: TransactionInput!){
            getTransaction(transaction: $transaction){
                ${query}
            }
        }
    `,

    getTransactions: (query: string) => `
        query getTransactions($dateFilter: DateFilterInput, $transactionIds: [String], $transaction: TransactionInput, $limit: Int, $skip: Int, $shouldGetFromAllStores: Boolean){
            getTransactions(dateFilter: $dateFilter, transactionIds: $transactionIds, transaction: $transaction, limit: $limit, skip: $skip, shouldGetFromAllStores: $shouldGetFromAllStores){
                ${query}
            }
        }
    `,
    addTransaction: (query: string) => `
        mutation addTransaction($transaction: TransactionInput!){
            addTransaction(transaction: $transaction){
                ${query}
            }
        }
    `,
    updateTransaction: (query: string) => `
        mutation updateTransaction($transactionId: String!, $transaction: TransactionInput!){
            updateTransaction(transactionId: $transactionId, transaction: $transaction){
                ${query}
            }
        }
    `,
}