import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createUserService, UserService } from "../../src/services/user/user.service";
import { initTestEnv } from "../testEnv";

const chance = new Chance();

describe.sequential("User API", () => {
    let userId: string;
    let userService: UserService;


    beforeAll(async () => {
        const env = await initTestEnv();
        userId = env?.userId ?? ""
        userService = createUserService(env?.storeClient!);
    })

    it("should get admin user stats", async () => {
        const res = await userService.getMonthlyUserStatsByYear({
            year: 2026,
        })
        expect(res?.monthlyUserStat.length).greaterThan(0);
    })
    it("should get user type count stats", async () => {
        const res = await userService.getUserTypeCounts();
        expect(res?.userTypeCounts.total).greaterThan(0);
    })

})