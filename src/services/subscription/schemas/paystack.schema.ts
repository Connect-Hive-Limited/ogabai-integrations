export const paystackSchema = {
    paystackInitializeSubscription: (query: string) => `
        mutation paystackInitializeSubscription($userId: String!, $planId: String!, $subscriptionFrequencyType: SubscriptionFrequencyTypeEnum!) {
            paystackInitializeSubscription(userId: $userId, planId: $planId, subscriptionFrequencyType: $subscriptionFrequencyType) {
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