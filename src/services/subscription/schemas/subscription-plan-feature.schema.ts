export const subscriptionPlanFeatureSchema = {
    getSubscriptionPlanFeature: (query: string) => `
        query getSubscriptionPlanFeature($subscriptionPlanFeature: SubscriptionPlanFeatureInput!) {
            getSubscriptionPlanFeature(subscriptionPlanFeature: $subscriptionPlanFeature) {
                ${query}
            }
        }
    `,
    getSubscriptionPlanFeatures: (query: string) => `
        query getSubscriptionPlanFeatures($search: String, $subscriptionPlanFeatureIds: [String], $subscriptionPlanFeature: SubscriptionPlanFeatureInput, $limit: Int!, $skip: Int!) {
            getSubscriptionPlanFeatures(search: $search, subscriptionPlanFeatureIds: $subscriptionPlanFeatureIds, subscriptionPlanFeature: $subscriptionPlanFeature, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
    addSubscriptionPlanFeature: (query: string) => `
        mutation addSubscriptionPlanFeature($subscriptionPlanFeature: SubscriptionPlanFeatureInput!) {
            addSubscriptionPlanFeature(subscriptionPlanFeature: $subscriptionPlanFeature) {
                ${query}
            }
        }
    `,
    updateSubscriptionPlanFeature: (query: string) => `
        mutation updateSubscriptionPlanFeature($subscriptionPlanFeatureId: String!, $subscriptionPlanFeature: SubscriptionPlanFeatureInput!) {
            updateSubscriptionPlanFeature(subscriptionPlanFeatureId: $subcriptionPlanFeatureId, subscriptionPlanFeature: $subscriptionPlanFeature) {
                ${query}
            }
        }
    `,
    removeSubscriptionPlanFeature: (query: string) => `
        mutation removeSubscriptionPlanFeature($subscriptionPlanFeatureId: String!) {
            removeSubscriptionPlanFeature(subscriptionPlanFeatureId: $subcriptionPlanFeatureId) {
                ${query}
            }
        }
    `
}