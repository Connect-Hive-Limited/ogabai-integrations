import fs from "fs";
import path from "path";
import { GraphQLClient } from "../src/client";

const CACHE_PATH = path.resolve(__dirname, ".global-env-cache.json");

export type GlobalTestEnv = {
  backendUrl: string;
  accessToken: string;
  userId: string;
  storeId: string;
  userData: any;
  pin?: string;
  password?: string;
  storeClient?: GraphQLClient;
  privateClient?: GraphQLClient;
  publicClient?: GraphQLClient;
};
let cachedEnv: GlobalTestEnv | null = null;


export const createClient = (backendUrl: string, accessToken?: string, storeId?: string) =>
    new GraphQLClient({
        url: `${backendUrl}/graphql`,
        headersFactory: async () => ({
          "ojami-store-id": storeId || "",
        }),
        tokenProvider: async () => accessToken || "",
    });

export async function initTestEnv(): Promise<GlobalTestEnv|null> {
  if (cachedEnv) return cachedEnv;

  if (!fs.existsSync(CACHE_PATH)) {
    throw new Error("❌ Global test environment not found. Did you run Vitest with globalSetup?");
  }

  const raw = fs.readFileSync(CACHE_PATH, "utf8");
  const envData = JSON.parse(raw);

  const publicClient = createClient(envData.backendUrl);
  const privateClient = createClient(envData.backendUrl, envData.accessToken);
  const storeClient = createClient(envData.backendUrl, envData.accessToken, envData.storeId);

  cachedEnv = {
    ...envData,
    storeClient,
    privateClient,
    publicClient,
  };

  return cachedEnv;
}
export const writeCache = (data: GlobalTestEnv) => {
    fs.writeFileSync(CACHE_PATH, JSON.stringify(data, null, 2));
}
