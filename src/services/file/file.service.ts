// src/services/file/file.service.ts
import type { GraphQLClient } from "../../client";

export interface UploadFileOptions {
  /** Optional override URL if you want to target a specific endpoint */
  endpoint?: string;
  /** Optional store or context ID */
  storeId?: string;
}

/**
 * Generic file upload service using the same GraphQLClient for auth + headers
 */
export const createFileService = (client: GraphQLClient) => ({
  /**
   * Upload a file with a custom input type `TInput` and a response type `TResponse`.
   *
   * @param input - an object that includes your file(s) and other form data
   * @param options - optional config such as endpoint override or storeId
   */
  async uploadFile<TInput extends Record<string, any>, TResponse = any>(
    input: TInput,
    options?: UploadFileOptions
  ): Promise<TResponse> {
    const token = await client.token();
    const headers = await client.headers();

    const formData = new FormData();
    for (const [key, value] of Object.entries(input)) {
      // support both single and multiple files
      if (value instanceof File || value instanceof Blob) {
        formData.append(key, value);
      } else if (Array.isArray(value) && value[0] instanceof File) {
        value.forEach((file) => formData.append(`${key}[]`, file));
      } else {
        formData.append(key, String(value));
      }
    }

    const uploadUrl = options?.endpoint ?? `${client.getUrl()}/upload`;

    const res = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
        // DO NOT manually set Content-Type — fetch handles it
      },
      body: formData,
    });

    console.log("******************************")
    console.log({ res})
    console.log("******************************")

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`File upload failed: ${res.status} ${text}`);
    }

    return (await res.json()) as TResponse;
  },
});
