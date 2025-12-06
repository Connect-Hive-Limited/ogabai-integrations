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

    it("should update user", async () => {
        const res = await userService.updateUser({
            userId,
            user: {
                lastName: chance.name(),
            }
        })
        expect(res?.data?.updateUser?.user._id).toEqual(userId);
    })

})