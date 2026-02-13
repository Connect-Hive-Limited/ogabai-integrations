export const subscriptionSchema = {
    getSubscription: (query: string) => `
        query getSubscription($subscription: SubscriptionInput!) {
            getSubscription(subscription: $subscription) {
                ${query}
            }
        }
    `,
    getSubscriptions: (query: string) => `
        query getSubscriptions($search String, $subscriptionIds: [String], $subscription: SubscriptionInput, $limit: Int!, $skip: Int!) {
            getSubscriptions(search: $search, subscriptionIds: $subscriptionIds, subscription: $subscription, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
    addSubscription: (query: string) => `
        mutation addSubscription($subscription: SubscriptionInput!) {
            addSubscription(subscription: $subscription) {
                ${query}
            }
        }
    `,
    updateSubscription: (query: string) => `
        mutation updateSubscription($subscriptionId: String!, $subscription: SubscriptionInput!) {
            updateSubscription(subscriptionId: $subcriptionId, subscription: $subscription) {
                ${query}
            }
        }
    `,
    removeSubscription: (query: string) => `
        mutation removeSubscription($subscriptionId: String!) {
            removeSubscription(subscriptionId: $subcriptionId) {
                ${query}
            }
        }
    `
}