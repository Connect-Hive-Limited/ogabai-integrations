import { UserType } from "../../../types";

export interface AuthenticateWithStoreRequest {
    storeId: string;
    roleId: string;
}
export interface AuthenticateWithStoreResponse {
    accessToken: string;
}
export const authenticateWithStoreResponse: (keyof AuthenticateWithStoreResponse)[] = [
    "accessToken"
]

export interface CheckRegistrationRequest {
    phone: string;
}
export interface CheckRegistrationResponse {
    isRegistered: boolean;
}
export const checkRegistrationResponse:(keyof CheckRegistrationResponse)[] = [
    "isRegistered"
]

// change pin
export interface ChangePinRequest {
    userId: string;
    oldPin: string;
    newPin: string;
}
export interface ChangePinResponse {
    success: boolean;
}
export const changePinResponse:(keyof ChangePinResponse)[] = [
    "success"
]

// update tx pin
export interface UpdateTxPinRequest {
    userId: string;
    pin: string;
    oldPin: string;
}
export interface UpdateTxPinResponse {
    success: boolean;
}
export const updateTxPinResponse:(keyof UpdateTxPinResponse)[] = [
    "success"
]

// reset pin 
export interface ResetPinRequest {
    phone: string;
    pin: string;
}
export interface ResetPinResponse {
    success: boolean;
}
export const resetPinResponse:(keyof ResetPinResponse)[] = [
    "success"
]

// send otp
export interface SendOTPRequest {
    phone: string;
}
export interface SendOTPResponse {
    successful: boolean;
    otp: string;
}
export const sendOTPResponse: (keyof SendOTPResponse)[] = [
    "successful",
    "otp"
]

// verify otp 
export interface VerifyOTPRequest {
    phone: string;
    otp: string;
}
export interface VerifyOTPResponse {
    otpVerifiedAccessToken: string;
}
export const verifyOTPResponse: (keyof VerifyOTPResponse)[] = [
    "otpVerifiedAccessToken"
]

// login
export interface LoginRequest {
    pin: string;
    phone: string;
    userType?: UserType;
}
export interface LoginResponse {
    accessToken: string;
    userId: string;
}
export const loginResponse: (keyof LoginResponse)[] = [
    "accessToken",
    "userId"
]

// sign up 
export interface SignUpRequest {
    phone: string;
    pin: string;
    storeName: string;
    lastName: string;
    firstName: string;

    storeLocation?: string;
    email?: string;
    userType?: UserType;
}
export interface SignUpResponse {
    accessToken: string;
    userId: string;
}
export const signUpResponse: (keyof SignUpResponse)[] = [
    "accessToken",
    "userId"
]

