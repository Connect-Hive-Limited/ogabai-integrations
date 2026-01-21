import type { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import userSchema from "./schemas/user.schema";
import { GetMonthlyUserStatsByYearRequest, getMonthlyUserStatsByYearResponse, GetMonthlyUserStatsByYearResponse, getMonthlyUserStatsByYearResponseNestedFields, GetMonthlyUserStatsByYearResponseNestedFields, getUserDashStatsResponse, GetUserDashStatsResponse, getUserDashStatsResponseNestedFields, GetUserDashStatsResponseNestedFields, GetUserRequest, getUserResponse, GetUserResponse, GetUserResponseNestedFields, getUserResponseNestedFields, GetUsersRequest, getUsersResponse, GetUsersResponse, getUsersResponseNestedFields, GetUsersResponseNestedFields, getUserTypeCountsResponse, GetUserTypeCountsResponse, getUserTypeCountsResponseNestedFields, GetUserTypeCountsResponseNestedFields, meResponse, MeResponse, meResponseNestedFields, MeResponseNestedFields, UpdateUserRequest, updateUserResponse, UpdateUserResponse, updateUserResponseNestedFields, UpdateUserResponseNestedFields } from "./types/user.type";
import { GraphQLResponse } from "../../types";

export const createUserService = (client: GraphQLClient) => ({  
  // admin dashboard stats 
  async getUserTypeCounts(
    fetchFields?: {
      root?: (keyof GetUserTypeCountsResponse)[],
      nestedFields?: GetUserTypeCountsResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetUserTypeCountsResponse|undefined>{
    const res = await  client.request<{ getUserTypeCounts: GetUserTypeCountsResponse }>(
      userSchema.getUserTypeCounts(
        gqlQueryStringBuilder<GetUserTypeCountsResponse, GetUserTypeCountsResponseNestedFields>(
          fetchFields?.root ?? getUserTypeCountsResponse,
          fetchFields?.nestedFields ?? getUserTypeCountsResponseNestedFields
        )
      ), 
      {},
      option
    );
    return res.data?.getUserTypeCounts;
  },
  async getMonthlyUserStatsByYear(
    input: GetMonthlyUserStatsByYearRequest,
    fetchFields?: {
      root?: (keyof GetMonthlyUserStatsByYearResponse)[],
      nestedFields?: GetMonthlyUserStatsByYearResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetMonthlyUserStatsByYearResponse|undefined>{
    const res = await  client.request<{ getMonthlyUserStatsByYear: GetMonthlyUserStatsByYearResponse }>(
      userSchema.getMonthlyUserStatsByYear(
        gqlQueryStringBuilder<GetMonthlyUserStatsByYearResponse, GetMonthlyUserStatsByYearResponseNestedFields>(
          fetchFields?.root ?? getMonthlyUserStatsByYearResponse,
          fetchFields?.nestedFields ?? getMonthlyUserStatsByYearResponseNestedFields
        )
      ), 
      input,
      option
    );
    return res.data?.getMonthlyUserStatsByYear;
  },
  // user dashboard stats
  async getUserDashStats(
    fetchFields?: {
      root?: (keyof GetUserDashStatsResponse)[],
      nestedFields?: GetUserDashStatsResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetUserDashStatsResponse|undefined>{
    const res = await  client.request<{ getUserDashStats: GetUserDashStatsResponse }>(
      userSchema.getUserDashStats(
        gqlQueryStringBuilder<GetUserDashStatsResponse, GetUserDashStatsResponseNestedFields>(
          fetchFields?.root ?? getUserDashStatsResponse,
          fetchFields?.nestedFields ?? getUserDashStatsResponseNestedFields
        )
      ), 
      {},
      option
    );
    return res.data?.getUserDashStats;
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
  async updateUser(
      input: UpdateUserRequest,
      fetchFields?: {
        root?: (keyof UpdateUserResponse)[],
        nestedFields?: UpdateUserResponseNestedFields
      },
      option?: RequestOption
    ): Promise<GraphQLResponse<{ updateUser: UpdateUserResponse }>> {
      return client.request<{ updateUser: UpdateUserResponse }>(
        userSchema.updateUser(
          gqlQueryStringBuilder<UpdateUserResponse, UpdateUserResponseNestedFields>(
            fetchFields?.root ?? updateUserResponse,
            fetchFields?.nestedFields ?? updateUserResponseNestedFields
          )
        ), 
        input,
        option
      );
    },
});

export type UserService = ReturnType<typeof createUserService>