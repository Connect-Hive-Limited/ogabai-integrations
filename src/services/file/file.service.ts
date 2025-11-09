import type { GraphQLClient } from "../../client";

export const createFileService = (client: GraphQLClient) => ({
  async uploadFile<TResponse = any>(formData: FormData): Promise<TResponse> {
    const url = client["url"].replace("/graphql", "") + "/api/upload";
    const token = await client.token();

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
  },
});

export type FileService = ReturnType<typeof createFileService>;
