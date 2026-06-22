import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { paystackSchema } from "./schemas/paystack.schema";
import { PaystackInitializeSubscriptionRequest, PaystackInitializeSubscriptionResponse } from "./types";
import { PaystackInitializePaymentRequest, paystackInitializePaymentResponse, PaystackInitializePaymentResponse, paystackInitializeSubscriptionResponse } from "./types/paystack";

export const createPaystackService = (client: GraphQLClient) => ({
    async paystackInitializeSubscription(
        input: PaystackInitializeSubscriptionRequest, 
        fetchFields?: {
            root?: (keyof PaystackInitializeSubscriptionResponse)[],
        },
        option?: RequestOption
    ): Promise<PaystackInitializeSubscriptionResponse | null> {
        const res = await client.request<
            { paystackInitializeSubscription: PaystackInitializeSubscriptionResponse }, 
            PaystackInitializeSubscriptionRequest
        >(
            paystackSchema.paystackInitializeSubscription(
                gqlQueryStringBuilder<PaystackInitializeSubscriptionResponse>(
                    fetchFields?.root ?? paystackInitializeSubscriptionResponse,
                )
            ), 
            input, 
            option
        );
        return res.data?.paystackInitializeSubscription ?? null;
    },
    async paystackInitializePayment(
            input: PaystackInitializePaymentRequest,
            fetchFields?: {
                root?: (keyof PaystackInitializePaymentResponse)[],
            },
            option?: RequestOption
        ):Promise<PaystackInitializePaymentResponse|undefined> {
            const res = await client.request<{ paystackInitializePayment: PaystackInitializePaymentResponse }>(
                paystackSchema.paystackInitializePayment(
                    gqlQueryStringBuilder<PaystackInitializePaymentResponse>(
                        fetchFields?.root ?? paystackInitializePaymentResponse
                    )
                ),
                input,
                option
            );
            return res.data?.paystackInitializePayment;
        }
})

export type PaystackService = ReturnType<typeof createPaystackService>