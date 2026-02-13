import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { subscriptionPlanFeatureSchema } from "./schemas/subscription-plan-feature.schema";
import { AddSubscriptionPlanFeatureRequest, addSubscriptionPlanFeatureResponse, AddSubscriptionPlanFeatureResponse, addSubscriptionPlanFeatureResponseNestedFields, AddSubscriptionPlanFeatureResponseNestedFields, GetSubscriptionPlanFeatureRequest, getSubscriptionPlanFeatureResponse, GetSubscriptionPlanFeatureResponse, getSubscriptionPlanFeatureResponseNestedFields, GetSubscriptionPlanFeatureResponseNestedFields, GetSubscriptionPlanFeaturesRequest, getSubscriptionPlanFeaturesResponse, GetSubscriptionPlanFeaturesResponse, getSubscriptionPlanFeaturesResponseNestedFields, GetSubscriptionPlanFeaturesResponseNestedFields, RemoveSubscriptionPlanFeatureRequest, removeSubscriptionPlanFeatureResponse, RemoveSubscriptionPlanFeatureResponse, UpdateSubscriptionPlanFeatureRequest, updateSubscriptionPlanFeatureResponse, UpdateSubscriptionPlanFeatureResponse, updateSubscriptionPlanFeatureResponseNestedFields, UpdateSubscriptionPlanFeatureResponseNestedFields } from "./types/subscription-plan-feature.type";

export const createSubscriptionPlanFeatureService = (client: GraphQLClient) => ({
      async removeSubscriptionPlanFeature(
            input: RemoveSubscriptionPlanFeatureRequest, 
            fetchFields?: {
                root?: (keyof RemoveSubscriptionPlanFeatureResponse)[],
            },
            option?: RequestOption
        ): Promise<RemoveSubscriptionPlanFeatureResponse | null> {
            const res = await client.request<
                { removeSubscriptionPlanFeature: RemoveSubscriptionPlanFeatureResponse }, 
                RemoveSubscriptionPlanFeatureRequest
            >(
                subscriptionPlanFeatureSchema.removeSubscriptionPlanFeature(
                    gqlQueryStringBuilder<RemoveSubscriptionPlanFeatureResponse>(
                        fetchFields?.root ?? removeSubscriptionPlanFeatureResponse,
                    )
                ), 
                input, 
                option
            );
            return res.data?.removeSubscriptionPlanFeature ?? null;
      },
      async updateSubscriptionPlanFeature(
            input: UpdateSubscriptionPlanFeatureRequest, 
            fetchFields?: {
            root?: (keyof UpdateSubscriptionPlanFeatureResponse)[],
            nestedFields?: UpdateSubscriptionPlanFeatureResponseNestedFields
            },
            option?: RequestOption
        ): Promise<UpdateSubscriptionPlanFeatureResponse | null> {
            const res = await client.request<
                { updateSubscriptionPlanFeature: UpdateSubscriptionPlanFeatureResponse }, 
                UpdateSubscriptionPlanFeatureRequest
            >(
                subscriptionPlanFeatureSchema.updateSubscriptionPlanFeature(
                    gqlQueryStringBuilder<UpdateSubscriptionPlanFeatureResponse, UpdateSubscriptionPlanFeatureResponseNestedFields>(
                    fetchFields?.root ?? updateSubscriptionPlanFeatureResponse,
                    fetchFields?.nestedFields ?? updateSubscriptionPlanFeatureResponseNestedFields
                    )
                ), 
                input, 
                option
            );
            return res.data?.updateSubscriptionPlanFeature ?? null;
      },
      async addSubscriptionPlanFeature(
            input: AddSubscriptionPlanFeatureRequest, 
            fetchFields?: {
            root?: (keyof AddSubscriptionPlanFeatureResponse)[],
            nestedFields?: AddSubscriptionPlanFeatureResponseNestedFields
            },
            option?: RequestOption
        ): Promise<AddSubscriptionPlanFeatureResponse | null> {
            const res = await client.request<
                { addSubscriptionPlanFeature: AddSubscriptionPlanFeatureResponse }, 
                AddSubscriptionPlanFeatureRequest
            >(
                subscriptionPlanFeatureSchema.addSubscriptionPlanFeature(
                    gqlQueryStringBuilder<AddSubscriptionPlanFeatureResponse, AddSubscriptionPlanFeatureResponseNestedFields>(
                    fetchFields?.root ?? addSubscriptionPlanFeatureResponse,
                    fetchFields?.nestedFields ?? addSubscriptionPlanFeatureResponseNestedFields
                    )
                ), 
                input, 
                option
            );
            return res.data?.addSubscriptionPlanFeature ?? null;
      },
      async getSubscriptionPlanFeature(
            input: GetSubscriptionPlanFeatureRequest, 
            fetchFields?: {
            root?: (keyof GetSubscriptionPlanFeatureResponse)[],
            nestedFields?: GetSubscriptionPlanFeatureResponseNestedFields
            },
            option?: RequestOption
        ): Promise<GetSubscriptionPlanFeatureResponse | null> {
            const res = await client.request<
                { getSubscriptionPlanFeature: GetSubscriptionPlanFeatureResponse }, 
                GetSubscriptionPlanFeatureRequest
            >(
                subscriptionPlanFeatureSchema.getSubscriptionPlanFeature(
                    gqlQueryStringBuilder<GetSubscriptionPlanFeatureResponse, GetSubscriptionPlanFeatureResponseNestedFields>(
                    fetchFields?.root ?? getSubscriptionPlanFeatureResponse,
                    fetchFields?.nestedFields ?? getSubscriptionPlanFeatureResponseNestedFields
                    )
                ), 
                input, 
                option
            );
            return res.data?.getSubscriptionPlanFeature ?? null;
      },
      async getSubscriptionPlanFeatures(
            input: GetSubscriptionPlanFeaturesRequest, 
            fetchFields?: {
            root?: (keyof GetSubscriptionPlanFeaturesResponse)[],
            nestedFields?: GetSubscriptionPlanFeaturesResponseNestedFields
            },
            option?: RequestOption
        ): Promise<GetSubscriptionPlanFeaturesResponse | null> {
            const res = await client.request<
                { getSubscriptionPlanFeatures: GetSubscriptionPlanFeaturesResponse }, 
                GetSubscriptionPlanFeaturesRequest
            >(
                subscriptionPlanFeatureSchema.getSubscriptionPlanFeatures(
                    gqlQueryStringBuilder<GetSubscriptionPlanFeaturesResponse, GetSubscriptionPlanFeaturesResponseNestedFields>(
                    fetchFields?.root ?? getSubscriptionPlanFeaturesResponse,
                    fetchFields?.nestedFields ?? getSubscriptionPlanFeaturesResponseNestedFields
                    )
                ), 
                input, 
                option
            );
            return res.data?.getSubscriptionPlanFeatures ?? null;
      },
})