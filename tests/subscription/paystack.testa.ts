import { Chance } from "chance";
import { beforeAll, describe, it } from "vitest";
import { UserService } from "../../src/services/user/user.service";
import { initTestEnv } from "../testEnv";
import { createPaystackService, PaystackService } from "../../src/services/subscription/paystack.service";

const chance = new Chance();

describe.sequential("Flutter API", () => { 
    
    let userService: UserService;
    let paystackService: PaystackService;
    let userId: string = "695f0e07a7c5257569707fbe"

    beforeAll(async () => {
        const client = (await initTestEnv())?.storeClient
        console.log("🌍 [user.test.ts] Running once for all tests...");
        paystackService = createPaystackService(client!);
    })

    it("should initialize payment", async () => {
        const res = await paystackService.paystackInitializePayment({
            userId
        })
        console.log({ res })
    })
})