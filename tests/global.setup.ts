import fs from "fs";
import path from "path";
import { createAuthService } from "../src/services/user/auth.service";
import { createUserService } from "../src/services/user/user.service";
import { createClient, writeCache } from "./testEnv";
import Chance from "chance";

const chance = new Chance()

const CACHE_PATH = path.resolve(__dirname, ".global-env-cache.json");

export default async function globalSetup() {
  console.log("🌍 [global.setup.ts] Running once for all tests...");

  const publicClient = createClient();
  const authService = createAuthService(publicClient);

  const pin = "12345678";
  const phone = "080" + Math.floor(10000000 + Math.random() * 90000000).toString();

  const res = await authService.signUp({
    pin,
    phone,
    email: chance.email(),
    storeName: "global setup test store",
    lastName: "Setup",
    firstName: "Global",
    storeLocation: "Lagos, Nigeria",
  });
  const accessToken = res?.data?.signUp?.accessToken ?? "";
  const userId = res?.data?.signUp.userId ?? ""
  if (!accessToken) throw new Error("Signup failed — no access token");

  const privateClient = createClient(accessToken);
  const userService = createUserService(privateClient);
  const me = await userService.me();

  // console.log({ me: JSON.stringify(me)})

  const userData = me?.data?.me;
  if (!userData) throw new Error("No user data");
  const storeId = userData?.stores?.[0]?._id;
  if (!storeId) throw new Error("No store ID");

  // 9157375245
  const envData = {
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

