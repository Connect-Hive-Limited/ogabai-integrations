import fs from "fs";
import path from "path";
import { createAuthService } from "../src/services/user/auth.service";
import { createUserService } from "../src/services/user/user.service";
import { createClient, writeCache } from "./testEnv";
import { Chance } from "chance";
const chance = new Chance()

const CACHE_PATH = path.resolve(__dirname, ".global-env-cache.json");

// PRODUCTION
const ENDPOINT_URL = "https://ogabai-prod-1010591944835.europe-west9.run.app"

export default async function globalSetup() {
  console.log("🌍 [global.setup.ts] Running once for all tests...");

  const publicClient = createClient(ENDPOINT_URL);
  const authService = createAuthService(publicClient);

  // const pin = "12345678";
  // const phone = "+23480" + Math.floor(10000000 + Math.random() * 90000000).toString();
  // console.log({ pin, phone })
  // const res = await authService.signUp({
  //   pin,
  //   phone,
  //   email: chance.email(),
  //   storeName: "global setup test store (manufacturer)",
  //   lastName: "Sample",
  //   firstName: "Manufacturer",
  //   storeLocation: "Lagos, Nigeria",
  //   userType: "manufacturer",
  // });
  // const accessToken = res?.data?.signUp?.accessToken ?? "";
  // const userId = res?.data?.signUp.userId ?? ""

  //{ pin: '12345678', phone: '+2348060873865' }
  const pin = "12345678";
  const phone = "+2348060873865";
  const res = await authService.login({
    pin,
    phone,
    userType: "manufacturer"
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

