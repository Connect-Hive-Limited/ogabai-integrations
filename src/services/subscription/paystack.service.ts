import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { paystackSchema } from "./schemas/paystack.schema";
import { PaystackInitializePaymentRequest, paystackInitializePaymentResponse, PaystackInitializePaymentResponse } from "./types/paystack";

export const createPaystackService = (client: GraphQLClient) => ({
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