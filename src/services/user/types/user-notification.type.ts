import { UserNotification } from "../../../types";
import { NotificationFields, notificationQuery, UserNotificationFields, userNotificationQuery } from "../user.entity";

export interface GetUserNotificationsRequest {
    search?: string;
    userNotificationIds?: string[]
    userNotification?: Partial<UserNotification>
    limit: number
    skip: number    
}
export interface GetUserNotificationsResponse {
    userNotifications: UserNotification[]
}
export const getUserNotificationsResponseFields: (keyof GetUserNotificationsResponse)[] = ["userNotifications"]
export interface GetUserNotificationsResponseNestedFields {
    notification: NotificationFields
    userNotifications: UserNotificationFields
}
export const getUserNotificationsResponseNestedFields: GetUserNotificationsResponseNestedFields = {
    notification: notificationQuery,
    userNotifications: userNotificationQuery
}