import fs from "fs";
import path from "path";
import { createAuthService } from "../src/services/user/auth.service";
import { createUserService } from "../src/services/user/user.service";
import { createClient, writeCache } from "./testEnv";
import Chance from "chance";
import dotenv from "dotenv"
import { createSubscriptionPlanService, createSubscriptionService } from "../src/services/subscription";
import { LoginResponse } from "../src/services/user/types/auth.type";
dotenv.config()

const chance = new Chance()

const CACHE_PATH = path.resolve(__dirname, ".global-env-cache.json");

// PRODUCTION
// const ENDPOINT_URL = "https://ogabai-prod-1010591944835.europe-west9.run.app"

// DEVELOPMENT
// const ENDPOINT_URL = "https://getsella-backend-1010591944835.europe-west1.run.app"// "https://getsella-backend-1010591944835.europe-west1.run.app" // 


const ENDPOINT_URL = "http://localhost:8080"

const authorizeUser = async (pin: string):Promise<LoginResponse|undefined> => {
    const existingUserAccount = process.env.EXISTING_USER_ACCOUNT
    const publicClient = createClient(ENDPOINT_URL);
    const authService = createAuthService(publicClient);
    if(existingUserAccount){
      const res = await authService.login({
        phone: "08084063704",
        pin,
        userType: "retail"
      })
      return res.data?.login
    }
    const res = await authService.signUp({
      pin,
      phone: "+23480" + Math.floor(10000000 + Math.random() * 90000000).toString(),
      storeName: chance.name() + " store",
      lastName: chance.name(),
      firstName: chance.name(),
      storeLocation: chance.address()
    });
    return res.data?.signUp
}

export default async function globalSetup() {
  console.log("🌍 [global.setup.ts] Running once for all tests...");
  const pin = "12345678"
  const res = await authorizeUser(pin);
  const accessToken = res?.accessToken ?? "";
  const userId = res?.userId ?? "";
  if (!accessToken) throw new Error("Signup failed — no access token");
  
  const privateClient = createClient(ENDPOINT_URL, accessToken);
  const userService = createUserService(privateClient);

  const me = await userService.me();

  // console.log({ me: JSON.stringify(me)})

  const userData = me?.data?.me;
  if (!userData) throw new Error("No user data");
  const storeId = userData?.stores?.[0]?._id;
  if (!storeId) throw new Error("No store ID");

  // 9157375245
  const envData = {
    backendUrl: ENDPOINT_URL,
    accessToken,
    storeId,
    userData,
    pin,
    password: undefined,
    userId
  };

  writeCache(envData)
  console.log("✅ Global setup finished, environment cached");

  // Return a cleanup function (optional)
  return async () => {
    console.log("🧹 [global.teardown] Cleaning up global environment...");
    if (fs.existsSync(CACHE_PATH)) fs.unlinkSync(CACHE_PATH);
  };
}

