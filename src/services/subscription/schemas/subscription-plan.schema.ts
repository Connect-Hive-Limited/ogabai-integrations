export const subscriptionPlanSchema = {
    getSubscriptionPlan: (query: string) => `
        query getSubscriptionPlan($subscriptionPlan: SubscriptionPlanInput!) {
            getSubscriptionPlan(subscriptionPlan: $subscriptionPlan) {
                ${query}
            }
        }
    `,
    getSubscriptionPlans: (query: string) => `
        query getSubscriptionPlans($search: String, $subscriptionPlanIds: [String], $subscriptionPlan: SubscriptionPlanInput, $limit: Int!, $skip: Int!) {
            getSubscriptionPlans(search: $search, subscriptionPlanIds: $subscriptionPlanIds, subscriptionPlan: $subscriptionPlan, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
    addSubscriptionPlan: (query: string) => `
        mutation addSubscriptionPlan($subscriptionPlan: SubscriptionPlanInput!) {
            addSubscriptionPlan(subscriptionPlan: $subscriptionPlan) {
                ${query}
            }
        }
    `,
    updateSubscriptionPlan: (query: string) => `
        mutation updateSubscriptionPlan($subscriptionPlanId: String!, $subscriptionPlan: SubscriptionPlanInput!) {
            updateSubscriptionPlan(subscriptionPlanId: $subcriptionPlanId, subscriptionPlan: $subscriptionPlan) {
                ${query}
            }
        }
    `,
    removeSubscriptionPlan: (query: string) => `
        mutation removeSubscriptionPlan($subscriptionPlanId: String!) {
            removeSubscriptionPlan(subscriptionPlanId: $subcriptionPlanId) {
                ${query}
            }
        }
    `
}