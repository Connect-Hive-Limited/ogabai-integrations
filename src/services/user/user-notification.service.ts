import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { userNotificationSchema } from "./schemas/user-notification.schema";
import { GetUserNotificationsRequest, GetUserNotificationsResponse, getUserNotificationsResponseFields, getUserNotificationsResponseNestedFields, GetUserNotificationsResponseNestedFields } from "./types/user-notification.type";

export const createUserNotificationService = (client: GraphQLClient) => ({
    async getUserNotifications(
        input: GetUserNotificationsRequest,
        fetchFields?: {
          root?: (keyof GetUserNotificationsResponse)[],
          nestedFields?: GetUserNotificationsResponseNestedFields
        },
        option?: RequestOption
      ): Promise<GetUserNotificationsResponse|undefined>{
        const res = await  client.request<{ getUserNotifications: GetUserNotificationsResponse }>(
          userNotificationSchema.getUserNotifications(
            gqlQueryStringBuilder<GetUserNotificationsResponse, GetUserNotificationsResponseNestedFields>(
              fetchFields?.root ?? getUserNotificationsResponseFields,
              fetchFields?.nestedFields ?? getUserNotificationsResponseNestedFields
            )
          ), 
          input,
          option
        );
        return res.data?.getUserNotifications;
      },
})

export type UserNotificationService = ReturnType<typeof createUserNotificationService>