import { describe, beforeAll } from "vitest";
import { AuthService, createAuthService } from "../../src/services/user/auth.service";
import { createClient, initTestEnv } from "../testEnv";


describe.sequential("Auth Signup API", () => {
  let authService: AuthService;
  let env: Awaited<ReturnType<typeof initTestEnv>>;
  beforeAll(async () => {
    env = await initTestEnv();  
    authService = createAuthService(createClient());
  })
});
