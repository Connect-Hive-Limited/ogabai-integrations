import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { Transaction } from "../../types";
import { createFileService } from "../file/file.service";
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

type SelectFields<
  T,
  R extends keyof T,
  O extends keyof T = never,
> = Required<Pick<T, R>> &
  Partial<Pick<T, O>>;

export const createTransactionService = (client: GraphQLClient) => {
  async function addTransaction(
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
  }
  return ({
    /**
     * 
     * @param input transactionRequest
     * @param fetchFields filter what is returned (fields)
     * @param option call options - cache
     * @returns TransactionResponse
     */
    async returnSales(
      input: {
        transaction: SelectFields<Transaction, "amountPaid" | "sales", "customerId" | "narration">
      },
      fetchFields?: {
        root?: (keyof UpdateTransactionResponse)[],
        nestedFields?: UpdateTransactionResponseNestedFields
      },
      option?: RequestOption
    ): Promise<UpdateTransactionResponse | null> {
      return addTransaction(input, fetchFields, option);
    },
    /**
     * Uploads a transaction receipt
     * @param form {
     *   file: File;
     *   transactionId: string;
     *   storeId: string;
     * }
     * @returns Transaction with updated receipt URL
     */
    async uploadExpenseReceipt(form: FormData) {
        const fileClient = createFileService(client);
        return ((await fileClient.uploadTxReceipt(form as any)).transaction);
      },
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
    addTransaction,
    async addCustomerDeposit(
      input: Pick<Transaction, "customerId" | "amountPaid" | "createdById">,
      fetchFields?: {
        root?: (keyof AddTransactionResponse)[],
        nestedFields?: AddTransactionResponseNestedFields
      },
      option?: RequestOption
    ): Promise<AddTransactionResponse | null> {
      return this.addTransaction(
        {
          transaction: {
            ...input,
            transactionType: "customerDeposit",
            platform: "pos",
          }
        },
        fetchFields,
        option
      )
    },
    async addCustomerRefund(
      input: Pick<Transaction, "customerId"|"amountPaid">,
      fetchFields?: {
        root?: (keyof AddTransactionResponse)[],
        nestedFields?: AddTransactionResponseNestedFields
      },
      option?: RequestOption
    ): Promise<AddTransactionResponse | null>{
      return this.addTransaction(
        {
          transaction: {
            ...input,
            transactionType: "customerRefund",
            platform: "pos",
          }
        },
        fetchFields,
        option
      )
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
}

export type TransactionService = ReturnType<typeof createTransactionService>