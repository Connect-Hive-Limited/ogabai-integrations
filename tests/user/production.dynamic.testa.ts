import { describe, it, expect, test, beforeAll } from "vitest";
import { createUserService } from "../../src/services/user/user.service";
import Chance from "chance";
// import { createClient } from "./global.setup";
import { AuthService, createAuthService } from "../../src/services/user/auth.service";
import { createClient, initTestEnv } from "../testEnv";
const chance = new Chance();

describe.sequential("Auth API", () => {
  let otp: string = "";
  let phone = chance.phone()
  let pin = chance.integer({min: 10000000, max: 99999999}).toString()
  let newPin = chance.integer({min: 10000000, max: 99999999}).toString()
  let authService: AuthService;
  let userId: string|undefined;
  let env: Awaited<ReturnType<typeof initTestEnv>>;
  const headers: { 
    "ojami-store-id": string; 
    "X-Otp-Verified-Access-Token": string;
    Authorization?: string;  
  } = {
    "ojami-store-id": "",
    "X-Otp-Verified-Access-Token": "",
  };
  beforeAll(async () => {
    env = await initTestEnv();  
    authService = createAuthService(createClient());
  })
});
