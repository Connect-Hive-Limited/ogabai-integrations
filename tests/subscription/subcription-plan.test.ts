import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { initTestEnv } from "../testEnv";
import { createSubscriptionPlanService, SubscriptionPlanService } from "../../src/services/subscription/subscription-plan.service";

const chance = new Chance();

describe.sequential("Subscription Plan API", () => {
    let env: Awaited<ReturnType<typeof initTestEnv>>;   
    let subscriptionPlanService: SubscriptionPlanService
    beforeAll(async () => {
        env = await initTestEnv();  
        subscriptionPlanService = createSubscriptionPlanService(env?.storeClient!);
    })

    it("should create subscription plan", async () => {
        const res = await subscriptionPlanService.addSubscriptionPlan({
            subscriptionPlan: {
                title: chance.name(),
                description: chance.string(),
                subscriptionPlanPrice: chance.integer({min: 10000000, max: 99999999})
            }
        })
        expect(res?.subscriptionPlan).not.toBeNull();
        expect(res?.subscriptionPlan.id).not.equal("");
    })

    it("list subscription plans", async () => {
        const res = await subscriptionPlanService.getSubscriptionPlans({
            limit: 10,
            skip: 0
        })
        console.log({ res })
        expect(res?.subscriptionPlans.length).greaterThan(0);
        expect(res?.total).greaterThan(0);
    })
})