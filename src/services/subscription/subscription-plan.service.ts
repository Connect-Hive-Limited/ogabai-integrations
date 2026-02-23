import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { subscriptionPlanSchema } from "./schemas/subscription-plan.schema";
import { AddSubscriptionPlanRequest, addSubscriptionPlanResponse, AddSubscriptionPlanResponse, addSubscriptionPlanResponseNestedFields, AddSubscriptionPlanResponseNestedFields, GetSubscriptionPlanRequest, getSubscriptionPlanResponse, GetSubscriptionPlanResponse, getSubscriptionPlanResponseNestedFields, GetSubscriptionPlanResponseNestedFields, GetSubscriptionPlansRequest, getSubscriptionPlansResponse, GetSubscriptionPlansResponse, getSubscriptionPlansResponseNestedFields, GetSubscriptionPlansResponseNestedFields, RemoveSubscriptionPlanRequest, removeSubscriptionPlanResponse, RemoveSubscriptionPlanResponse, UpdateSubscriptionPlanRequest, updateSubscriptionPlanResponse, UpdateSubscriptionPlanResponse, updateSubscriptionPlanResponseNestedFields, UpdateSubscriptionPlanResponseNestedFields } from "./types/subscription-plan.type";

export const createSubscriptionPlanService = (client: GraphQLClient) => ({
      async removeSubscriptionPlan(
            input: RemoveSubscriptionPlanRequest, 
            fetchFields?: {
                root?: (keyof RemoveSubscriptionPlanResponse)[],
            },
            option?: RequestOption
        ): Promise<RemoveSubscriptionPlanResponse | null> {
            const res = await client.request<
                { removeSubscriptionPlan: RemoveSubscriptionPlanResponse }, 
                RemoveSubscriptionPlanRequest
            >(
                subscriptionPlanSchema.removeSubscriptionPlan(
                    gqlQueryStringBuilder<RemoveSubscriptionPlanResponse>(
                        fetchFields?.root ?? removeSubscriptionPlanResponse,
                    )
                ), 
                input, 
                option
            );
            return res.data?.removeSubscriptionPlan ?? null;
      },
      async updateSubscriptionPlan(
            input: UpdateSubscriptionPlanRequest, 
            fetchFields?: {
            root?: (keyof UpdateSubscriptionPlanResponse)[],
            nestedFields?: UpdateSubscriptionPlanResponseNestedFields
            },
            option?: RequestOption
        ): Promise<UpdateSubscriptionPlanResponse | null> {
            const res = await client.request<
                { updateSubscriptionPlan: UpdateSubscriptionPlanResponse }, 
                UpdateSubscriptionPlanRequest
            >(
                subscriptionPlanSchema.updateSubscriptionPlan(
                    gqlQueryStringBuilder<UpdateSubscriptionPlanResponse, UpdateSubscriptionPlanResponseNestedFields>(
                    fetchFields?.root ?? updateSubscriptionPlanResponse,
                    fetchFields?.nestedFields ?? updateSubscriptionPlanResponseNestedFields
                    )
                ), 
                input, 
                option
            );
            return res.data?.updateSubscriptionPlan ?? null;
      },
      async addSubscriptionPlan(
            input: AddSubscriptionPlanRequest, 
            fetchFields?: {
            root?: (keyof AddSubscriptionPlanResponse)[],
            nestedFields?: AddSubscriptionPlanResponseNestedFields
            },
            option?: RequestOption
        ): Promise<AddSubscriptionPlanResponse | null> {
            const res = await client.request<
                { addSubscriptionPlan: AddSubscriptionPlanResponse }, 
                AddSubscriptionPlanRequest
            >(
                subscriptionPlanSchema.addSubscriptionPlan(
                    gqlQueryStringBuilder<AddSubscriptionPlanResponse, AddSubscriptionPlanResponseNestedFields>(
                    fetchFields?.root ?? addSubscriptionPlanResponse,
                    fetchFields?.nestedFields ?? addSubscriptionPlanResponseNestedFields
                    )
                ), 
                input, 
                option
            );
            return res.data?.addSubscriptionPlan ?? null;
      },
      async getSubscriptionPlan(
            input: GetSubscriptionPlanRequest, 
            fetchFields?: {
            root?: (keyof GetSubscriptionPlanResponse)[],
            nestedFields?: GetSubscriptionPlanResponseNestedFields
            },
            option?: RequestOption
        ): Promise<GetSubscriptionPlanResponse | null> {
            const res = await client.request<
                { getSubscriptionPlan: GetSubscriptionPlanResponse }, 
                GetSubscriptionPlanRequest
            >(
                subscriptionPlanSchema.getSubscriptionPlan(
                    gqlQueryStringBuilder<GetSubscriptionPlanResponse, GetSubscriptionPlanResponseNestedFields>(
                    fetchFields?.root ?? getSubscriptionPlanResponse,
                    fetchFields?.nestedFields ?? getSubscriptionPlanResponseNestedFields
                    )
                ), 
                input, 
                option
            );
            return res.data?.getSubscriptionPlan ?? null;
      },
      async getSubscriptionPlans(
            input: GetSubscriptionPlansRequest, 
            fetchFields?: {
            root?: (keyof GetSubscriptionPlansResponse)[],
            nestedFields?: GetSubscriptionPlansResponseNestedFields
            },
            option?: RequestOption
        ): Promise<GetSubscriptionPlansResponse | null> {
            const res = await client.request<
                { getSubscriptionPlans: GetSubscriptionPlansResponse }, 
                GetSubscriptionPlansRequest
            >(
                subscriptionPlanSchema.getSubscriptionPlans(
                    gqlQueryStringBuilder<GetSubscriptionPlansResponse, GetSubscriptionPlansResponseNestedFields>(
                    fetchFields?.root ?? getSubscriptionPlansResponse,
                    fetchFields?.nestedFields ?? getSubscriptionPlansResponseNestedFields
                    )
                ), 
                input, 
                option
            );
            return res.data?.getSubscriptionPlans ?? null;
      },
})

export type SubscriptionPlanService = ReturnType<typeof createSubscriptionPlanService>