import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { subscriptionSchema } from "./schemas/subscription.schema";
import { AddSubscriptionRequest, addSubscriptionResponse, AddSubscriptionResponse, addSubscriptionResponseNestedFields, AddSubscriptionResponseNestedFields, GetSubscriptionRequest, getSubscriptionResponse, GetSubscriptionResponse, getSubscriptionResponseNestedFields, GetSubscriptionResponseNestedFields, GetSubscriptionsRequest, getSubscriptionsResponse, GetSubscriptionsResponse, getSubscriptionsResponseNestedFields, GetSubscriptionsResponseNestedFields, RemoveSubscriptionRequest, removeSubscriptionResponse, RemoveSubscriptionResponse, UpdateSubscriptionRequest, updateSubscriptionResponse, UpdateSubscriptionResponse, updateSubscriptionResponseNestedFields, UpdateSubscriptionResponseNestedFields } from "./types/subscription.type";

export const createSubscriptionService = (client: GraphQLClient) => ({
      async removeSubscription(
            input: RemoveSubscriptionRequest, 
            fetchFields?: {
                root?: (keyof RemoveSubscriptionResponse)[],
            },
            option?: RequestOption
        ): Promise<RemoveSubscriptionResponse | null> {
            const res = await client.request<
                { removeSubscription: RemoveSubscriptionResponse }, 
                RemoveSubscriptionRequest
            >(
                subscriptionSchema.removeSubscription(
                    gqlQueryStringBuilder<RemoveSubscriptionResponse>(
                        fetchFields?.root ?? removeSubscriptionResponse,
                    )
                ), 
                input, 
                option
            );
            return res.data?.removeSubscription ?? null;
      },
      async updateSubscription(
            input: UpdateSubscriptionRequest, 
            fetchFields?: {
            root?: (keyof UpdateSubscriptionResponse)[],
            nestedFields?: UpdateSubscriptionResponseNestedFields
            },
            option?: RequestOption
        ): Promise<UpdateSubscriptionResponse | null> {
            const res = await client.request<
                { updateSubscription: UpdateSubscriptionResponse }, 
                UpdateSubscriptionRequest
            >(
                subscriptionSchema.updateSubscription(
                    gqlQueryStringBuilder<UpdateSubscriptionResponse, UpdateSubscriptionResponseNestedFields>(
                    fetchFields?.root ?? updateSubscriptionResponse,
                    fetchFields?.nestedFields ?? updateSubscriptionResponseNestedFields
                    )
                ), 
                input, 
                option
            );
            return res.data?.updateSubscription ?? null;
      },
      async addSubscription(
            input: AddSubscriptionRequest, 
            fetchFields?: {
            root?: (keyof AddSubscriptionResponse)[],
            nestedFields?: AddSubscriptionResponseNestedFields
            },
            option?: RequestOption
        ): Promise<AddSubscriptionResponse | null> {
            const res = await client.request<
                { addSubscription: AddSubscriptionResponse }, 
                AddSubscriptionRequest
            >(
                subscriptionSchema.addSubscription(
                    gqlQueryStringBuilder<AddSubscriptionResponse, AddSubscriptionResponseNestedFields>(
                    fetchFields?.root ?? addSubscriptionResponse,
                    fetchFields?.nestedFields ?? addSubscriptionResponseNestedFields
                    )
                ), 
                input, 
                option
            );
            return res.data?.addSubscription ?? null;
      },
      async getSubscription(
            input: GetSubscriptionRequest, 
            fetchFields?: {
            root?: (keyof GetSubscriptionResponse)[],
            nestedFields?: GetSubscriptionResponseNestedFields
            },
            option?: RequestOption
        ): Promise<GetSubscriptionResponse | null> {
            const res = await client.request<
                { getSubscription: GetSubscriptionResponse }, 
                GetSubscriptionRequest
            >(
                subscriptionSchema.getSubscription(
                    gqlQueryStringBuilder<GetSubscriptionResponse, GetSubscriptionResponseNestedFields>(
                    fetchFields?.root ?? getSubscriptionResponse,
                    fetchFields?.nestedFields ?? getSubscriptionResponseNestedFields
                    )
                ), 
                input, 
                option
            );
            return res.data?.getSubscription ?? null;
      },
      async getSubscriptions(
            input: GetSubscriptionsRequest, 
            fetchFields?: {
            root?: (keyof GetSubscriptionsResponse)[],
            nestedFields?: GetSubscriptionsResponseNestedFields
            },
            option?: RequestOption
        ): Promise<GetSubscriptionsResponse | null> {
            const res = await client.request<
                { getSubscriptions: GetSubscriptionsResponse }, 
                GetSubscriptionsRequest
            >(
                subscriptionSchema.getSubscriptions(
                    gqlQueryStringBuilder<GetSubscriptionsResponse, GetSubscriptionsResponseNestedFields>(
                    fetchFields?.root ?? getSubscriptionsResponse,
                    fetchFields?.nestedFields ?? getSubscriptionsResponseNestedFields
                    )
                ), 
                input, 
                option
            );
            return res.data?.getSubscriptions ?? null;
      },
})

export type SubscriptionService = ReturnType<typeof createSubscriptionService>