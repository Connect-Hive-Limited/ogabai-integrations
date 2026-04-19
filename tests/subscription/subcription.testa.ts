import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { initTestEnv } from "../testEnv";
import { createSubscriptionPlanService, SubscriptionPlanService } from "../../src/services/subscription/subscription-plan.service";
import { createSubscriptionService, SubscriptionService } from "../../src/services/subscription/subscription.service";

const chance = new Chance();

describe.sequential("Subscription Plan API", () => {
    let env: Awaited<ReturnType<typeof initTestEnv>>;   
    let subscriptionPlanService: SubscriptionPlanService
    let subscriptionService: SubscriptionService
    let subscriptionPlanId: string|undefined;
    beforeAll(async () => {
        env = await initTestEnv();  
        subscriptionPlanService = createSubscriptionPlanService(env?.storeClient!);
        subscriptionService = createSubscriptionService(env?.storeClient!)
    })

    // it("should create subscription plan", async () => {
    //     const res = await subscriptionPlanService.createSubscriptionPlan({
    //         subscriptionPlan: {
    //             title: chance.name(),
    //             description: chance.string(),
    //             monthlyPlanPrice: chance.integer({min: 10000000, max: 99999999})
    //         }
    //     })
    //     expect(res?.subscriptionPlan).not.toBeNull();
    //     expect(res?.subscriptionPlan.id).not.equal("");
    //     subscriptionPlanId = res?.subscriptionPlan.id
    // })
    it("list subscriptions", async () => {
        const res = await subscriptionService.getSubscriptions({
            limit: 10,
            skip: 0
        })
        console.log({ res: JSON.stringify(res)})
    })

    // it("create subscription", async () => {
    //     const res = await subscriptionPlanService.getSubscriptionPlans({
    //         limit: 10,
    //         skip: 0
    //     })
    //     expect(res?.subscriptionPlans.length).greaterThan(0);
    //     expect(res?.total).greaterThan(0);
    // })
})