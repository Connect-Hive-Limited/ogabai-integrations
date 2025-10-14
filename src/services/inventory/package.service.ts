import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { packageSchema } from "./schema/package.schema";
import { 
  AddPackageRequest, AddPackageResponse, addPackageResponseFields, AddPackageResponseFields, addPackageResponseNestedFields, 
  AddPackagesRequest, 
  AddPackagesResponse, 
  addPackagesResponseFields, 
  AddPackagesResponseFields, 
  addPackagesResponseNestedFields, 
  GetPackageRequest, GetPackageResponse, getPackageResponseFields, GetPackageResponseFields, getPackageResponseNestedFields, 
  GetPackagesRequest, GetPackagesResponse, getPackagesResponseFields, GetPackagesResponseFields, getPackagesResponseNestedFields,
  RemovePackageRequest,
  RemovePackageResponse,
  removePackageResponseFields,
  UpdatePackageRequest,
  UpdatePackageResponse,
  UpdatePackageResponseFields,
  updatePackageResponseFields,
  updatePackageResponseNestedFields, 
} from "./types/package.type";

export const createPackageService = (client: GraphQLClient) => ({
  async updatePackage(
    input: UpdatePackageRequest, 
    fetchFields?: {
      root?: (keyof UpdatePackageResponse)[],
      nestedFields?: UpdatePackageResponseFields
    },
    option?: RequestOption
  ): Promise<UpdatePackageResponse | null> {
    const res = await client.request<{ updatePackage: UpdatePackageResponse }, UpdatePackageRequest>(
      packageSchema.updatePackage(
        gqlQueryStringBuilder<UpdatePackageResponse, UpdatePackageResponseFields>(
          fetchFields?.root ?? updatePackageResponseFields,
          fetchFields?.nestedFields ?? updatePackageResponseNestedFields,
        )
      ), 
      input, 
      option
    );
    return res.data?.updatePackage ?? null;
  },
  async removePackage(
    input: RemovePackageRequest, 
    fetchFields?: {
      root?: (keyof RemovePackageResponse)[],
    },
    option?: RequestOption
  ): Promise<RemovePackageResponse | null> {
    const res = await client.request<{ removePackage: RemovePackageResponse }, RemovePackageRequest>(
      packageSchema.removePackage(
        gqlQueryStringBuilder<RemovePackageResponse>(
          fetchFields?.root ?? removePackageResponseFields,
        )
      ), 
      input, 
      option
    );
    return res.data?.removePackage ?? null;
  },
  async addPackages(
    input: AddPackagesRequest, 
    fetchFields?: {
      root?: (keyof AddPackagesResponse)[],
      nestedFields?: AddPackagesResponseFields
    },
    option?: RequestOption
  ): Promise<AddPackagesResponse | null> {
    const res = await client.request<{ addPackages: AddPackagesResponse }, AddPackagesRequest>(
      packageSchema.addPackages(
        gqlQueryStringBuilder<AddPackagesResponse, AddPackagesResponseFields>(
          fetchFields?.root ?? addPackagesResponseFields,
          fetchFields?.nestedFields ?? addPackagesResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.addPackages ?? null;
  },
  async addPackage(
    input: AddPackageRequest, 
    fetchFields?: {
      root?: (keyof AddPackageResponse)[],
      nestedFields?: AddPackageResponseFields
    },
    option?: RequestOption
  ): Promise<AddPackageResponse | null> {
    const res = await client.request<{ addPackage: AddPackageResponse }, AddPackageRequest>(
      packageSchema.addPackage(
        gqlQueryStringBuilder<AddPackageResponse, AddPackageResponseFields>(
          fetchFields?.root ?? addPackageResponseFields,
          fetchFields?.nestedFields ?? addPackageResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.addPackage ?? null;
  },
  async getPackage(
    input: GetPackageRequest, 
    fetchFields?: {
      root?: (keyof GetPackageResponse)[],
      nestedFields?: GetPackageResponseFields
    },
    option?: RequestOption
  ): Promise<GetPackageResponse | null> {
    const res = await client.request<{ getPackage: GetPackageResponse }, GetPackageRequest>(
      packageSchema.getPackage(
        gqlQueryStringBuilder<GetPackageResponse, GetPackageResponseFields>(
          fetchFields?.root ?? getPackageResponseFields,
          fetchFields?.nestedFields ?? getPackageResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getPackage ?? null;
  },
  async getPackages(
    input: GetPackagesRequest, 
    fetchFields?: {
      root?: (keyof GetPackagesResponse)[],
      nestedFields?: GetPackagesResponseFields
    },
    option?: RequestOption
  ): Promise<GetPackagesResponse | null> {
    const res = await client.request<{ getPackages: GetPackagesResponse }, GetPackagesRequest>(
      packageSchema.getPackages(
        gqlQueryStringBuilder<GetPackagesResponse, GetPackagesResponseFields>(
          fetchFields?.root ?? getPackagesResponseFields,
          fetchFields?.nestedFields ?? getPackagesResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getPackages ?? null;
  },
})

export type ProductPackageService = ReturnType<typeof createPackageService> 
export type PackageService = ReturnType<typeof createPackageService> 