import { beforeAll, afterAll, expect, it } from "vitest";
import { GraphQLClient } from "../src/client";
import { AuthService, createAuthService } from "../src/services/user/auth.service";
import { MeResponse } from "../src/services/user/types/user.type";
import { createUserService } from "../src/services/user/user.service";
import { Store, User } from "../src/types";

let publicClient:GraphQLClient|undefined;
let privateClient:GraphQLClient|undefined;
let storeClient:GraphQLClient|undefined;
let authService: AuthService|undefined;
let userData: MeResponse|undefined;
let createClient: (accessToken?: string, storeId?: string) => GraphQLClient;
let getUser:() => User | undefined;
let getStores:() => Store[] | undefined;
// e.g. spin up test env, seed DB, or just set globals
beforeAll(async () => {
  console.log("Starting SDK integration tests...");
  createClient = (accessToken, storeId) => new GraphQLClient({
    url: "http://localhost:8080/graphql",
    headersFactory: async () => ({ 
      "ojami-store-id": storeId || "",
    }),
    tokenProvider: async () => accessToken || "",
  });
  publicClient = createClient("")
  
  authService = createAuthService(publicClient)
  let accessToken = "";
  const res = await authService?.signUp({
    pin: "12345678",
    phone: "08034668644",
    storeName: "test2 store",
    lastName: "Ceejay2",
    firstName: "Joe2",
    storeLocation: "Mushin, lagos state"
  });
  accessToken = res?.data?.signUp?.accessToken ?? "";
  // it("should sign up with user credentials", async () => {
  //   expect(res?.data?.signUp).not.toBeNull();
  // })
  privateClient = createClient(accessToken);
  const userService = createUserService(privateClient);
  const me = await userService?.me();
  userData = me?.data?.me
  console.log({ userData })
  if(!userData) throw new Error("No user data");
  if(!userData?.stores) throw new Error("No stores");
  if(!userData?.stores?.[0]?._id) throw new Error("No store id");
  const storeId = userData.stores[0]._id
  getUser = () => userData?.user;
  getStores = () => userData?.stores;
  storeClient = createClient(accessToken, storeId);;
  // it("should get user data", async () => {
  //   expect(me?.data?.me).not.toBeNull();
  // })
});

afterAll(() => {
  console.log("All tests done.");
});

export { 
  publicClient, 
  authService, 
  storeClient,
  createClient, 
  privateClient, 
  userData,
  getUser, 
  getStores,
};

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));