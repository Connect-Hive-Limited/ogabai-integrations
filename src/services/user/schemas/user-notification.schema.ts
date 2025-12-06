export const userNotificationSchema = {
    getUserNotifications: (query: string) => `
        query getUserNotifications($search: String, $userNotification: UserNotificationInput, $userNotificationIds: [String], $limit: Int!, $skip: Int!) {
            getUserNotifications(search: $search, userNotification: $userNotification, userNotificationIds: $userNotificationIds, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
}