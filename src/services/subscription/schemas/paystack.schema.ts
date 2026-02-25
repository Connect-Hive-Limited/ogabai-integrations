export const paystackSchema = {
    paystackInitializeSubscription: (query: string) => `
        mutation paystackInitializeSubscription($userId: String!, $planId: String!) {
            paystackInitializeSubscription(userId: $userId, planId: $planId) {
                ${query}
            }
        }
    `,
    paystackInitializePayment: (query: string) => `
        mutation paystackInitializePayment($userId: String!) {
            paystackInitializePayment(userId: $userId) {
                ${query}
            }
        }
    `
}