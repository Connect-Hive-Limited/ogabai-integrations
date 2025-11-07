import FormData from "form-data";
import fetch from "node-fetch";
import type { GraphQLClient } from "../../client";

export const createFileService = (client: GraphQLClient) => ({
  async uploadFile<TResponse = any>(formData: FormData): Promise<TResponse> {
    const url = client["url"].replace("/graphql", "") + "/api/upload";
    const token = await client.token();

    const headers = formData.getHeaders({
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    });

    const res = await fetch(url, {
      method: "POST",
      headers,
      body: formData, // ✅ critical: stream body, not string
    });

    const text = await res.text();
    if (!res.ok) throw new Error(`File upload failed: ${res.status} - ${text}`);
    try {
      return JSON.parse(text);
    } catch {
      return text as any;
    }
  },
});

export type FileService = ReturnType<typeof createFileService>;