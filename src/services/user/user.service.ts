import type { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import userSchema from "./schemas/user.schema";
import { getUserDashStatsResponse, GetUserDashStatsResponse, getUserDashStatsResponseNestedFields, GetUserDashStatsResponseNestedFields, GetUserRequest, getUserResponse, GetUserResponse, GetUserResponseNestedFields, getUserResponseNestedFields, GetUsersRequest, getUsersResponse, GetUsersResponse, getUsersResponseNestedFields, GetUsersResponseNestedFields, meResponse, MeResponse, meResponseNestedFields, MeResponseNestedFields } from "./types/user.type";
import { GraphQLResponse } from "../../types";

export const createUserService = (client: GraphQLClient) => ({  
  async getUserDashStats(
    fetchFields?: {
      root?: (keyof GetUserDashStatsResponse)[],
      nestedFields?: GetUserDashStatsResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GraphQLResponse<{ getUserDashStats: GetUserDashStatsResponse }>> {
    return client.request<{ getUserDashStats: GetUserDashStatsResponse }>(
      userSchema.getUserDashStats(
        gqlQueryStringBuilder<GetUserDashStatsResponse, GetUserDashStatsResponseNestedFields>(
          fetchFields?.root ?? getUserDashStatsResponse,
          fetchFields?.nestedFields ?? getUserDashStatsResponseNestedFields
        )
      ), 
      {},
      option
    );
  },
  async me(
    fetchFields?: {
      root?: (keyof MeResponse)[],
      nestedFields?: MeResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GraphQLResponse<{ me: MeResponse }>> {
    return client.request<{ me: MeResponse }>(
      userSchema.me(
        gqlQueryStringBuilder<MeResponse, MeResponseNestedFields>(
          fetchFields?.root ?? meResponse,
          fetchFields?.nestedFields ?? meResponseNestedFields
        )
      ), 
      {},
      option
    );
  },
  async getUser(
      input: GetUserRequest,
      fetchFields?: {
        root?: (keyof GetUserResponse)[],
        nestedFields?: GetUserResponseNestedFields
      },
      option?: RequestOption
    ): Promise<GraphQLResponse<{ getUser: GetUserResponse }>> {
      return client.request<{ getUser: GetUserResponse }>(
        userSchema.getUser(
          gqlQueryStringBuilder<GetUserResponse, GetUserResponseNestedFields>(
            fetchFields?.root ?? getUserResponse,
            fetchFields?.nestedFields ?? getUserResponseNestedFields
          )
        ), 
        input,
        option
      );
    },
  async getUsers(
      input: GetUsersRequest,
      fetchFields?: {
        root?: (keyof GetUsersResponse)[],
        nestedFields?: GetUsersResponseNestedFields
      },
      option?: RequestOption
    ): Promise<GraphQLResponse<{ getUsers: GetUsersResponse }>> {
      return client.request<{ getUsers: GetUsersResponse }>(
        userSchema.getUsers(
          gqlQueryStringBuilder<GetUsersResponse, GetUsersResponseNestedFields>(
            fetchFields?.root ?? getUsersResponse,
            fetchFields?.nestedFields ?? getUsersResponseNestedFields
          )
        ), 
        input,
        option
      );
    },
});

export type UserService = ReturnType<typeof createUserService>