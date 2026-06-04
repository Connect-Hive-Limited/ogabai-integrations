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
    authService = createAuthService(env?.publicClient!);
  })
  it("phone number should not exist", async () => {
    const res = await authService.checkRegistration({
      phone
    });
    expect(res?.data?.checkRegistration).toEqual({
      isRegistered: false
    })
    phone = chance.phone()
  })
  it("should not login with none user credentials", async () => {
    try{
      const res = await authService?.login({
        pin, phone
      });
    }catch(e){
      expect((e as Error).message.toLowerCase()).contains("user not found");
    }
  });
  it("should sign up with user credentials", async () => {
    const res = await authService?.signUp({
      pin,
      phone: phone,
      storeName: chance.name() + " store",
      lastName: chance.name(),
      firstName: chance.name(),
      storeLocation: chance.address()
    });
    expect(res?.data?.signUp).not.toBeNull();
    userId = res?.data?.signUp?.userId;
  })
  it("check registration to return is registered", async () => {
    const res = await authService.checkRegistration({
      phone
    });
    expect(res?.data?.checkRegistration).toEqual({
      isRegistered: true
    })
  })
  it("should login with user credentials", async () => {
    const res = await authService?.login({
      pin, phone,
    });
    if(res?.data?.login.accessToken){
      headers.Authorization = `Bearer ${res?.data.login.accessToken}`;
    }
    expect(res?.data?.login).not.toBeNull();
  })

  it("should fetch user information using access token", async () => {
    const client = createClient(env?.backendUrl!, headers.Authorization || "")
    const userService = createUserService(client)
    const res = await userService?.me({}, {headers})
    console.log("User info:", JSON.stringify(res?.data?.me));
    expect(res?.data?.me).not.toBeNull();
    expect(res?.data?.me.user.lastName).not.equal("")
    headers["ojami-store-id"] = res?.data?.me?.stores?.[0]?._id as string
  })
  it("change login pin", async () => {
    const res = await authService?.changePin({
      userId: userId as string,
      oldPin: pin,
      newPin,
    }, {}, { headers });
    expect(res?.data?.changePin).toBeDefined();
  })
  it("login with new pin", async () => {
    const res = await authService?.login({
      pin: newPin,
      phone,
    });
    if(res?.data?.login.accessToken){
      headers.Authorization = `Bearer ${res?.data.login.accessToken}`;
    }
    expect(res?.data?.login).not.toBeNull();
  })
  it("should not sign up with already user credentials", async () => {
    try {
      const res = await authService?.signUp({
        pin,
        phone,
        storeName: chance.name() + " store",
        lastName: chance.name(),
        firstName: chance.name(),
        storeLocation: chance.address()
      });
    }catch(e){
      expect((e as Error).message.toLowerCase()).contains("user already exist");
    }
  })
  it("send otp", async () => {
    const res = await authService?.sendOTP({
      phone,
    },{}, {headers});
    if(res?.data?.sendOTP.otp){
      otp = res?.data.sendOTP.otp;
    }
    expect(res?.data?.sendOTP).not.toBeNull();
  })
  it("should verify otp", async () => {
    const res = await authService?.verifyOTP({
      phone, otp,
    }, {}, {headers});
    if(res?.data?.verifyOTP.otpVerifiedAccessToken){
      headers["X-Otp-Verified-Access-Token"] = res?.data.verifyOTP.otpVerifiedAccessToken;
    }
    expect(res?.data?.verifyOTP).not.toBeNull();
  })
  it("should reset pin", async () => {
    const res = await authService?.resetPin({
      pin: chance.integer({min: 10000000, max: 99999999}).toString(), 
      phone
    }, {}, {
      headers
    });
    expect(res?.data?.resetPin).not.toBeNull();
  })
});
