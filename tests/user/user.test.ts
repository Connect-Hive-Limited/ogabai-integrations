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
        const newLastName = chance.name();
        const res = await userService.updateUser({
            userId,
            user: {
                lastName: newLastName,
            }
        })
        expect(res?.data?.updateUser?.user._id).toEqual(userId);
        expect(res.data?.updateUser.user.lastName).toEqual(newLastName);
    })

    // list users 
    it("should list users", async() => {
        const res = await userService.getUsers({
            user: {
                _id: userId
            },
            limit: 100,
            skip: 0
        })
        expect(res?.data?.getUsers?.users.length).greaterThan(0);
    })

})