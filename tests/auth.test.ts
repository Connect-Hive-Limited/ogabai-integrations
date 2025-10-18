import { describe, it, expect } from "vitest";
import { createUserService } from "../src/services/user/user.service";
import { authService, createClient, getPin, getUser } from "./setup";


describe.sequential("Auth API", () => {
  let otp: string = "";
  let phone: string = "";
  const headers: { 
    "ojami-store-id": string; 
    "X-Otp-Verified-Access-Token": string;
    Authorization?: string;  
  } = {
    "ojami-store-id": "",
    "X-Otp-Verified-Access-Token": "",
  };
  it("should not login with none user credentials", async () => {
    const res = await authService?.login({
      pin: "12345678",
      phone: "08034668633",
    });
    expect(res?.data?.login).toBeNull();
  });
  // it("should sign up with user credentials", async () => {
  //   const res = await authService?.signUp({
  //     pin: "12345678",
  //     phone: "08034668633",
  //     storeName: "test store",
  //     lastName: "Ceejay",
  //     firstName: "Joe",
  //     storeLocation: "Mushin, lagos state"
  //   });
  //   expect(res?.data?.signUp).not.toBeNull();
  // })
  it("should login with user credentials", async () => {
    const res = await authService?.login({
      pin: getPin() || "",
      phone: getUser()?.phone || "",
    });
    if(res?.data?.login.accessToken){
      headers.Authorization = `Bearer ${res?.data.login.accessToken}`;
    }
    expect(res?.data?.login).not.toBeNull();
  })

  it("should be fetch user information using access token", async () => {
    const client = createClient(headers.Authorization || "")
    const userService = createUserService(client)
    const res = await userService?.me({}, {headers})
    expect(res?.data?.me).not.toBeNull();
  })

  it("should not sign up with already user credentials", async () => {
    const res = await authService?.signUp({
      pin: "12345678",
      phone: getUser()?.phone || "",
      storeName: "test store",
      lastName: "Ceejay2",
      firstName: "Joe"
    });
    expect(res?.data?.signUp).toBeNull();
  })
  it("send otp", async () => {
    const res = await authService?.sendOTP({
      phone: getUser()?.phone || "",
    },{}, {headers});
    if(res?.data?.sendOTP.otp){
      otp = res?.data.sendOTP.otp;
    }
    expect(res?.data?.sendOTP).not.toBeNull();
  })
  it("should verify otp", async () => {
    const res = await authService?.verifyOTP({
      phone: getUser()?.phone || "",
      otp,
    }, {}, {headers});
    if(res?.data?.verifyOTP.otpVerifiedAccessToken){
      headers["X-Otp-Verified-Access-Token"] = res?.data.verifyOTP.otpVerifiedAccessToken;
    }
    expect(res?.data?.verifyOTP).not.toBeNull();
  })
  it("should reset pin", async () => {
    const res = await authService?.resetPin({
      pin: getPin() || "",
      phone: getUser()?.phone || "",
    }, {
      
    }, {
      headers
    });
    expect(res?.data?.resetPin).not.toBeNull();
  })
});
