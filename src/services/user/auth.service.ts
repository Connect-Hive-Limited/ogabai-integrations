import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { GraphQLResponse } from "../../types";
import {authSchema} from "./schemas/auth.schema";
import { 
  AuthenticateWithStoreRequest,
  authenticateWithStoreResponse,
  AuthenticateWithStoreResponse,
  ChangePinRequest,
  changePinResponse,
  ChangePinResponse,
  CheckRegistrationRequest,
  checkRegistrationResponse,
  CheckRegistrationResponse,
  LoginRequest, loginResponse, LoginResponse, 
  ResetPinRequest, resetPinResponse, ResetPinResponse, 
  SendOTPRequest, sendOTPResponse, SendOTPResponse, 
  SignUpRequest, signUpResponse, SignUpResponse, 
  UpdateTxPinRequest, updateTxPinResponse, UpdateTxPinResponse, 
  VerifyOTPRequest, verifyOTPResponse, VerifyOTPResponse 
} from "./types/auth.type";

export const createAuthService = (client: GraphQLClient) => ({
  async authenticateWithStore(
    input: AuthenticateWithStoreRequest,
    fetchFields?: {
      root?: (keyof AuthenticateWithStoreResponse)[],
    },
    option?: RequestOption
  ): Promise<GraphQLResponse<{ authenticateWithStore: AuthenticateWithStoreResponse }>> {
    return client.request<{ authenticateWithStore: AuthenticateWithStoreResponse }, AuthenticateWithStoreRequest>(
      authSchema.authenticateWithStore(
        gqlQueryStringBuilder<AuthenticateWithStoreResponse>(
          fetchFields?.root ?? authenticateWithStoreResponse,
        )
      ), 
      input, 
      option
    );
  },
  async checkRegistration(
    input: CheckRegistrationRequest, 
    fetchFields?: {
      root?: (keyof CheckRegistrationResponse)[],
    },
    option?: RequestOption
  ): Promise<GraphQLResponse<{ checkRegistration: CheckRegistrationResponse }>> {
    return client.request<{ checkRegistration: CheckRegistrationResponse }, CheckRegistrationRequest>(
      authSchema.checkRegistration(
        gqlQueryStringBuilder<CheckRegistrationResponse>(
          fetchFields?.root ?? checkRegistrationResponse,
        )
      ), 
      input, 
      option
    );
  },
  async changePin(
    input: ChangePinRequest, 
    fetchFields?: {
      root?: (keyof ChangePinResponse)[],
    },
    option?: RequestOption
  ): Promise<GraphQLResponse<{ changePin: ChangePinResponse }>> {
    return client.request<{ changePin: ChangePinResponse }, ChangePinRequest>(
      authSchema.changePin(
        gqlQueryStringBuilder<ChangePinResponse>(
          fetchFields?.root ?? changePinResponse,
        )
      ), 
      input,
      option
    );
  },
  async updateTxPin(
    input: UpdateTxPinRequest, 
    fetchFields?: {
      root?: (keyof UpdateTxPinResponse)[],
    },
    option?: RequestOption
  ): Promise<GraphQLResponse<{ updateTxPin: UpdateTxPinResponse }>> {
    return client.request<{ updateTxPin: UpdateTxPinResponse }, UpdateTxPinRequest>(
      authSchema.updateTxPin(
        gqlQueryStringBuilder<UpdateTxPinResponse>(
          fetchFields?.root ?? updateTxPinResponse,
        )
      ), 
      input, 
      option
    );
  },
  async verifyOTP(
    input: VerifyOTPRequest, 
    fetchFields?: {
      root?: (keyof VerifyOTPResponse)[],
    },
    option?: RequestOption
  ): Promise<GraphQLResponse<{ verifyOTP: VerifyOTPResponse }>> {
      return client.request<{ verifyOTP: VerifyOTPResponse }, VerifyOTPRequest>(
      authSchema.verifyOTP(
        gqlQueryStringBuilder<VerifyOTPResponse>(
          fetchFields?.root ?? verifyOTPResponse,
        )
      ), 
      input, 
      option
    );
  },
  async sendOTP(
    input: SendOTPRequest, 
    fetchFields?: {
      root?: (keyof SendOTPResponse)[],
    },
    option?: RequestOption
  ): Promise<GraphQLResponse<{ sendOTP: SendOTPResponse }>> {
    return client.request<{ sendOTP: SendOTPResponse }, SendOTPRequest>(
      authSchema.sendOTP(
        gqlQueryStringBuilder<SendOTPResponse>(
          fetchFields?.root ?? sendOTPResponse,
        )
      ), 
      input, 
      option
    );
  },
  async resetPin(
    input: ResetPinRequest, 
    fetchFields?: {
      root?: (keyof ResetPinResponse)[],
    },
    option?: RequestOption
  ): Promise<GraphQLResponse<{resetPin: ResetPinResponse}>> {
      return client.request<{ resetPin: ResetPinResponse }, ResetPinRequest>(
      authSchema.resetPin(
        gqlQueryStringBuilder<ResetPinResponse>(
          fetchFields?.root ?? resetPinResponse,
        )
      ), 
      input, 
      option
    );
  },
  async signUp(
    input: SignUpRequest, 
    fetchFields?: {
      root?: (keyof SignUpResponse)[],
    },
    option?: RequestOption
  ): Promise<GraphQLResponse<{ signUp: SignUpResponse }>> {
    return client.request<{ signUp: SignUpResponse }, SignUpRequest>(
      authSchema.signUp(
        gqlQueryStringBuilder<SignUpResponse>(
          fetchFields?.root ?? signUpResponse,
        )
      ), 
      input, 
      option
    );
  },
  async login(
    input: LoginRequest, 
    fetchFields?: {
      root?: (keyof LoginResponse)[],
    },
    option?: RequestOption
  ): Promise<GraphQLResponse<{ login: LoginResponse }>> {
    return client.request<{ login: LoginResponse }, LoginRequest>(
      authSchema.login(
        gqlQueryStringBuilder<LoginResponse>(
          fetchFields?.root ?? loginResponse,
        )
      ), 
      input, 
      option
    );
  },
})

export type AuthService = ReturnType<typeof createAuthService>