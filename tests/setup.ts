import { beforeAll, afterAll, expect } from "vitest";
import { GraphQLClient } from "../src/client";
import { AuthService, createAuthService } from "../src/services/user/auth.service";
import { UserService } from "../src/services/user/user.service";

let client:GraphQLClient|undefined;
let userService: UserService|undefined;
let authService: AuthService|undefined;
let createClient: (accessToken: string) => GraphQLClient;
// e.g. spin up test env, seed DB, or just set globals
beforeAll(() => {
  console.log("Starting SDK integration tests...");
  createClient = (accessToken) => new GraphQLClient({
    url: "http://localhost:8080/graphql",
    headersFactory: async () => ({ 
      
    }),
    tokenProvider: async () => accessToken,
  });
  client = createClient("")
  
  authService = createAuthService(client)
});

afterAll(() => {
  console.log("All tests done.");
});

export { expect, client, authService, createClient };

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));