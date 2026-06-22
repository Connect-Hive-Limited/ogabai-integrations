import { Product, Transaction } from "../..";
import type { GraphQLClient } from "../../client";

export const createFileService = (client: GraphQLClient) => {
    async function uploadFile<TResponse = any>(path: string, formData: FormData): Promise<TResponse> {
        const url = client["url"].replace("/graphql", "") + path; // /api/upload/product
        const token = await client["tokenProvider"]();

        const headers: Record<string, string> = {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        };
        // ✅ Do not use formData.getHeaders() — not available in React Native/browser
        const res = await fetch(url, {
          method: "POST",
          headers,
          body: formData, // native FormData works fine
        });

        const text = await res.text();
        if (!res.ok) throw new Error(`File upload failed: ${res.status} - ${text}`);
        try {
          return JSON.parse(text);
        } catch {
          return text as any;
        }
    }
    return ({
      /**
       * 
       * @param form { storeId: string; productId: string; file: File;}
       * @returns Transaction
       */
      uploadFileProductImage(form: FormData) {
        return uploadFile<{product: Product}>("/api/upload/product", form as any);
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
      uploadTxReceipt(form: FormData) {
        return uploadFile<{transaction: Transaction}>("/api/upload/transaction-receipt", form as any);
      }
    });
}

export type FileService = ReturnType<typeof createFileService>;
