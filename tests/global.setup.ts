// tests/global.setup.ts
import fs from "fs";
import path from "path";
import { GraphQLClient } from "../src/client";
import { createAuthService } from "../src/services/user/auth.service";
import { createUserService } from "../src/services/user/user.service";
import { createClient, writeCache } from "./testEnv";

const CACHE_PATH = path.resolve(__dirname, ".global-env-cache.json");

export default async function globalSetup() {
  console.log("🌍 [global.setup.ts] Running once for all tests...");

  // const createClient = (accessToken?: string, storeId?: string) =>
  //   new GraphQLClient({
  //     url: "http://localhost:8080/graphql",
  //     headersFactory: async () => ({
  //       "ojami-store-id": storeId || "",
  //     }),
  //     tokenProvider: async () => accessToken || "",
  //   });

  const publicClient = createClient();
  const authService = createAuthService(publicClient);

  const pin = "12345678";
  const phone = "080" + Math.floor(10000000 + Math.random() * 90000000).toString();

  const res = await authService.signUp({
    pin,
    phone,
    storeName: "global setup test store",
    lastName: "Setup",
    firstName: "Global",
    storeLocation: "Lagos, Nigeria",
  });

  const accessToken = res?.data?.signUp?.accessToken ?? "";
  if (!accessToken) throw new Error("Signup failed — no access token");

  const privateClient = createClient(accessToken);
  const userService = createUserService(privateClient);
  const me = await userService.me();

  const userData = me?.data?.me;
  if (!userData) throw new Error("No user data");
  const storeId = userData?.stores?.[0]?._id;
  if (!storeId) throw new Error("No store ID");

  const envData = {
    accessToken,
    storeId,
    userData,
    pin,
  };

  writeCache(envData)
  console.log("✅ Global setup finished, environment cached");

  // Return a cleanup function (optional)
  return async () => {
    console.log("🧹 [global.teardown] Cleaning up global environment...");
    if (fs.existsSync(CACHE_PATH)) fs.unlinkSync(CACHE_PATH);
  };
}



// import { GraphQLClient } from "../src/client";
// import { createAuthService } from "../src/services/user/auth.service";
// import { createUserService } from "../src/services/user/user.service";
// import Chance from "chance";
// const chance = new Chance();

// export const createClient = (accessToken?: string, storeId?: string) =>
//     new GraphQLClient({
//       url: "http://localhost:8080/graphql",
//       headersFactory: async () => ({
//         "ojami-store-id": storeId || "",
//       }),
//       tokenProvider: async () => accessToken || "",
//     });

// export default async function setup() {
//   console.log("🌍 Running global setup (only once)...");

//   const publicClient = createClient();
//   const authService = createAuthService(publicClient);
//   let phone = chance.phone()
//   let pin = chance.integer({min: 10000000, max: 99999999}).toString()
//   console.log("************************")
//   console.log({ phone, pin })
//   console.log("************************")
//   const res = await authService.signUp({
//       pin,
//       phone: phone,
//       storeName: chance.name() + " store",
//       lastName: chance.name(),
//       firstName: chance.name(),
//       storeLocation: chance.address()
//   });

//   const accessToken = res?.data?.signUp?.accessToken ?? "";
//   const privateClient = createClient(accessToken);
//   const userService = createUserService(privateClient);
//   const me = await userService.me();

//   const userData = me?.data?.me;
//   if (!userData) throw new Error("No user data");
//   const storeId = userData.stores?.[0]?._id;
//   if (!storeId) throw new Error("No store id");

//   const storeClient = createClient(accessToken, storeId);

//   // ✅ Store globally available data
//   globalThis.__GLOBAL_TEST_DATA__ = {
//     accessToken,
//     userData,
//     storeId,
//     pin,
//     storeClient,
//     publicClient,
//   };

//   console.log("✅ Global setup finished");

//   // ✅ Return a teardown function (as Vitest expects)
//   return async () => {
//     console.log("🧹 Global teardown");
//     delete (globalThis as any).__GLOBAL_TEST_DATA__;
//   };
// }
