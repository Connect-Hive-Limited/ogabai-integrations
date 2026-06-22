import { Chance } from "chance";
import { beforeAll, describe, it } from "vitest";
import { initTestEnv } from "../testEnv";
import { createSubscriptionTrialService, SubscriptionTrialService } from "../../src/services/subscription"

const chance = new Chance(); 

describe.sequential("Subscription Trial API", () => {
    let env: Awaited<ReturnType<typeof initTestEnv>>;
    let subscriptionTrialService: SubscriptionTrialService;

    beforeAll(async () => {
        env = await initTestEnv();
        subscriptionTrialService = createSubscriptionTrialService(env?.storeClient!);
    })

    it("should create subscription trial", async () => {
        const res = await subscriptionTrialService.createSubscriptionTrial({
            subscriptionTrial: {
                planId: chance.guid(),
                endedAt: new Date().toISOString(),
            }
        })
        console.log({ res: JSON.stringify(res)})
    })
})