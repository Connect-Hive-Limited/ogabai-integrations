import fs from "fs";
import path from "path";
import { GraphQLClient } from "../src/client";

const CACHE_PATH = path.resolve(__dirname, ".global-env-cache.json");

export type GlobalTestEnv = {
  accessToken: string;
  storeId: string;
  userData: any;
  pin: string;
  storeClient?: GraphQLClient;
  privateClient?: GraphQLClient;
};

let cachedEnv: GlobalTestEnv | null = null;
// const ENDPOINT_URL = "https://getselqla-backend-1010591944835.europe-west1.run.app" // 
const ENDPOINT_URL = "http://localhost:8080"
export const createClient = (accessToken?: string, storeId?: string) =>
    new GraphQLClient({
        url: `${ENDPOINT_URL}/graphql`,
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

  const privateClient = createClient(envData.accessToken);
  const storeClient = createClient(envData.accessToken, envData.storeId);

  cachedEnv = {
    ...envData,
    storeClient,
    privateClient,
  };

  return cachedEnv;
}
export const writeCache = (data: GlobalTestEnv) => {
    fs.writeFileSync(CACHE_PATH, JSON.stringify(data, null, 2));
}
