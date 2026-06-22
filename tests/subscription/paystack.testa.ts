import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { UserService } from "../../src/services/user/user.service";
import { initTestEnv } from "../testEnv";
import { createPaystackService, PaystackService } from "../../src/services/subscription/paystack.service";
import { createSubscriptionPlanService, SubscriptionPlanService } from "../../src/services/subscription/subscription-plan.service";

const chance = new Chance();

describe.sequential("Flutter API", () => { 
    
    let userService: UserService;
    let paystackService: PaystackService;
    let subscriptionPlanService: SubscriptionPlanService
    let userId: string = "695f0e07a7c5257569707fbe"

    beforeAll(async () => {
        const env = await initTestEnv()
        const client = env?.storeClient
        userId = env?.userId!
        console.log("🌍 [user.test.ts] Running once for all tests...");
        paystackService = createPaystackService(client!);
        subscriptionPlanService = createSubscriptionPlanService(client!);
    })

    // it("should initialize payment", async () => {
    //     const res = await paystackService.paystackInitializePayment({
    //         userId
    //     })
    //     console.log({ res })
    // })

    it("should initialize subscription", async () => {
        // const subPlans = await subscriptionPlanService.getSubscriptionPlans({
        //     limit: 100,
        //     skip: 0
        // })
        // const plans = subPlans?.subscriptionPlans || [];
        let planId: string = "";
        // for (let i = 0; i < plans.length; i++) {
        //     const {  paystackPlanId, id } = plans[i];
        //     if(paystackPlanId){
        //         planId = id;
        //         break;
        //     }
        // }
        // if(!planId){
        // }
        const newPlan = await subscriptionPlanService.addSubscriptionPlan({
            subscriptionPlan: {
                title: chance.name(),
                description: chance.string(),
                annuallyPlanPrice: chance.integer({min: 10000000, max: 99999999}),
                monthlyPlanPrice: chance.integer({min: 1, max: 2000})
            }
        })
        planId = newPlan?.subscriptionPlan.id || ""
        if(planId && userId){
            const res = await paystackService.paystackInitializeSubscription({
                userId,
                planId,
                subscriptionFrequencyType: "annually"
            })
            console.log({ res: JSON.stringify(res) })
            expect(res?.authorizationUrl).not.toBeNull();
            expect(res?.accessCode).not.toBeNull();
        }
    })
})