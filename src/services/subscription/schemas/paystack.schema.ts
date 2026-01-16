export const paystackSchema = {
    paystackInitializePayment: (query: string) => `
        mutation paystackInitializePayment($userId: String!) {
            paystackInitializePayment(userId: $userId) {
                ${query}
            }
        }
    `
}