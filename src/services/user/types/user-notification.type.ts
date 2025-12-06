import { UserNotification } from "../../../types";
import { UserNotificationFields, userNotificationQuery } from "../user.entity";

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
    userNotifications: UserNotificationFields
}
export const getUserNotificationsResponseNestedFields: GetUserNotificationsResponseNestedFields = {
    userNotifications: userNotificationQuery
}