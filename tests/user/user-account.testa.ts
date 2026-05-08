import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { initTestEnv } from "../testEnv";
import { createUserAccountService, UserAccountService } from "../../src/services/user/user-account.service";

const chance = new Chance();

describe.sequential("ApplicationFeature API", () => {
    let userAccountId: string;
    let userAccountService: UserAccountService;
    let userId: string;


    beforeAll(async () => {
        const env = await initTestEnv();
        userId = env?.userId ?? ""
        userAccountService = createUserAccountService(env?.storeClient!);
    })
    it("should get user account", async () => {
        const res = await userAccountService.getUserAccount({
            userAccount: {
                userId
            }
        })
        console.log({ res: JSON.stringify(res, null, 2) })
    })
    // it("List user account", async () => {
    //     const res = await userAccountService.getUserAccounts({
    //         limit: 1,
    //         skip: 0,
    //     })
    //     console.log({ res: JSON.stringify(res, null, 2) })
    // })
})