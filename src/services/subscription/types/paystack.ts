export interface PaystackInitializePaymentRequest{
    userId: string;
}
export interface PaystackInitializePaymentResponse{
    authorizationUrl: string;
    accessCode: string;
    reference: string;
}
export const paystackInitializePaymentResponse:(keyof PaystackInitializePaymentResponse)[] = [
    "accessCode", 
    "authorizationUrl", 
    "reference"
]
export interface PaystackInitializeSubscriptionRequest {
    userId: string;
    planId: string;
    subscriptionFrequencyType: "annually" | "monthly";
}

export type  PaystackInitializeSubscriptionResponse = PaystackInitializePaymentResponse;
export const paystackInitializeSubscriptionResponse: (keyof PaystackInitializeSubscriptionResponse)[] = paystackInitializePaymentResponse

