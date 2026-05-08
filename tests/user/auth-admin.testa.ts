import { describe, it, expect, test, beforeAll } from "vitest";
import { createUserService } from "../../src/services/user/user.service";
import Chance from "chance";
// import { createClient } from "./global.setup";
import { AuthService, createAuthService } from "../../src/services/user/auth.service";
import { createClient, initTestEnv } from "../testEnv";
const chance = new Chance();

describe.sequential("Auth API", () => {
  let authService: AuthService;

  let env: Awaited<ReturnType<typeof initTestEnv>>;
  const USER_PHONE = "+23480719466456" // "08071943026"
  const USER_PIN = "533333";

  beforeAll(async () => {
    env = await initTestEnv();  
    authService = createAuthService(createClient());
  })
  it("should not login as admin", async () => {
    try {
      const res = await authService?.login({
        pin: USER_PIN, 
        phone: USER_PHONE,
        userType: "admin"
      });
      console.log({ res })
      expect(res?.data?.login).toBeNull();
    }catch(e){
      expect((e as Error).message.toLowerCase()).contains("user not found");
    }
  })
  
});
