import fs from "fs";
import path from "path";
import { createAuthService } from "../src/services/user/auth.service";
import { createUserService } from "../src/services/user/user.service";
import { createClient, writeCache } from "./testEnv";

const CACHE_PATH = path.resolve(__dirname, ".global-env-cache.json");

// PRODUCTION
const ENDPOINT_URL = "https://ogabai-prod-1010591944835.europe-west9.run.app"

export default async function globalSetup() {
  console.log("🌍 [global.setup.ts] Running once for all tests...");

  const publicClient = createClient(ENDPOINT_URL);
  const authService = createAuthService(publicClient);

  // PRODUCTION LOGIN 
  // const phone = "+2348064668635" //"+2348071943026" // "08071943026"
  // const password = "12345678";

  // DEVELOPMENT
  const phone = "+2348071943026" // "08071943026"
  const pin = "533333";

  const res = await authService.login({
    pin,
    phone,
    // userType: "admin"
  });
  const accessToken = res?.data?.login?.accessToken ?? "";
  const userId = res?.data?.login.userId ?? ""
  if (!accessToken) throw new Error("Signup failed — no access token");


  // console.log({ accessToken })
  const privateClient = createClient(ENDPOINT_URL, accessToken);
  const userService = createUserService(privateClient);
  const me = await userService.me();


  // console.log({ me : JSON.stringify(me)})
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

