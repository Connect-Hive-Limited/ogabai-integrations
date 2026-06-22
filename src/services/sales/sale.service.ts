import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { saleSchema } from "./schemas/sale.schema";
import { 
  GetSalesRequest, getSalesResponse, GetSalesResponse, GetSalesResponseNestedFields, getSalesResponseNestedFields,
  UpdateSaleRequest,
  UpdateSaleResponse,
  UpdateSaleResponseNestedFields,
  updateSaleResponseNestedFields, 
} from "./types/sale.type";

export const createSaleService = (client: GraphQLClient) => ({
  async updateSale(
    input: UpdateSaleRequest, 
    fetchFields?: {
      root?: (keyof UpdateSaleResponse)[],
      nestedFields?: UpdateSaleResponseNestedFields
    },
    option?: RequestOption
  ): Promise<UpdateSaleResponse | null> {
    const res = await client.request<{ updateSale: UpdateSaleResponse }, UpdateSaleRequest>(
      saleSchema.updateSale(
        gqlQueryStringBuilder<UpdateSaleResponse, UpdateSaleResponseNestedFields>(
          fetchFields?.root ?? UpdateSaleResponse,
          fetchFields?.nestedFields ?? updateSaleResponseNestedFields,
        )
      ), 
      input, 
      option
    );
    return res.data?.updateSale ?? null;
  },
  async getSales(
    input: GetSalesRequest, 
    fetchFields?: {
      root?: (keyof GetSalesResponse)[],
      nestedFields?: GetSalesResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetSalesResponse | null> {
    const res = await client.request<{ getSales: GetSalesResponse }, GetSalesRequest>(
      saleSchema.getSales(
        gqlQueryStringBuilder<GetSalesResponse, GetSalesResponseNestedFields>(
          fetchFields?.root ?? getSalesResponse,
          fetchFields?.nestedFields ?? getSalesResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getSales ?? null;
  },
})

export type SaleService = ReturnType<typeof createSaleService>