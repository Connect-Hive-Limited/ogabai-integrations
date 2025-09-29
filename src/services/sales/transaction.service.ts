import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { transactionSchema } from "./schemas/transaction.schema";
import { 
  AddTransactionRequest, addTransactionResponse, AddTransactionResponse, AddTransactionResponseNestedFields, addTransactionResponseNestedFields, 
  GetTransactionRequest, getTransactionResponse, GetTransactionResponse, GetTransactionResponseNestedFields, getTransactionResponseNestedFields, 
  GetTransactionsRequest, getTransactionsResponse, GetTransactionsResponse, GetTransactionsResponseNestedFields, getTransactionsResponseNestedFields,
  UpdateTransactionRequest,
  updateTransactionResponse,
  UpdateTransactionResponse,
  UpdateTransactionResponseNestedFields,
  updateTransactionResponseNestedFields, 
} from "./types/transaction.type";

export const createTransactionService = (client: GraphQLClient) => ({
  async updateTransaction(
    input: UpdateTransactionRequest, 
    fetchFields?: {
      root?: (keyof UpdateTransactionResponse)[],
      nestedFields?: UpdateTransactionResponseNestedFields
    },
    option?: RequestOption
  ): Promise<UpdateTransactionResponse | null> {
    const res = await client.request<{ updateTransaction: UpdateTransactionResponse }, UpdateTransactionRequest>(
      transactionSchema.updateTransaction(
        gqlQueryStringBuilder<UpdateTransactionResponse, UpdateTransactionResponseNestedFields>(
          fetchFields?.root ?? updateTransactionResponse,
          fetchFields?.nestedFields ?? updateTransactionResponseNestedFields,
        )
      ), 
      input, 
      option
    );
    return res.data?.updateTransaction ?? null;
  },
  async addTransaction(
    input: AddTransactionRequest, 
    fetchFields?: {
      root?: (keyof AddTransactionResponse)[],
      nestedFields?: AddTransactionResponseNestedFields
    },
    option?: RequestOption
  ): Promise<AddTransactionResponse | null> {
    const res = await client.request<{ addTransaction: AddTransactionResponse }, AddTransactionRequest>(
      transactionSchema.addTransaction(
        gqlQueryStringBuilder<AddTransactionResponse, AddTransactionResponseNestedFields>(
          fetchFields?.root ?? addTransactionResponse,
          fetchFields?.nestedFields ?? addTransactionResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.addTransaction ?? null;
  },
  async getTransaction(
    input: GetTransactionRequest, 
    fetchFields?: {
      root?: (keyof GetTransactionResponse)[],
      nestedFields?: GetTransactionResponseNestedFields;
    },
    option?: RequestOption
  ): Promise<GetTransactionResponse | null> {
    const res = await client.request<{ getTransaction: GetTransactionResponse }, GetTransactionRequest>(
      transactionSchema.getTransaction(
        gqlQueryStringBuilder<GetTransactionResponse, GetTransactionResponseNestedFields>(
          fetchFields?.root ?? getTransactionResponse,
          fetchFields?.nestedFields ?? getTransactionResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getTransaction ?? null;
  },
  async getTransactions(
    input: GetTransactionsRequest, 
    fetchFields?: {
      root?: (keyof GetTransactionsResponse)[],
      nestedFields?: GetTransactionsResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetTransactionsResponse | null> {
    const res = await client.request<{ getTransactions: GetTransactionsResponse }, GetTransactionsRequest>(
      transactionSchema.getTransactions(
        gqlQueryStringBuilder<GetTransactionsResponse, GetTransactionsResponseNestedFields>(
          fetchFields?.root ?? getTransactionsResponse,
          fetchFields?.nestedFields ?? getTransactionsResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getTransactions ?? null;
  },
})