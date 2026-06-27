import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createUserService, UserService } from "../../src/services/user/user.service";
import { initTestEnv } from "../testEnv";
import { TEST_FEATURES } from "../../src/services/user/types/user.type";

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

    it("get test features", async () => {
        const res = await userService.getTestFeatures();
        console.log({ res: JSON.stringify(res, null, 2) })
        expect(res).not.toBeNull();

        if(!res?.testFeatures){
            return;
        }

        // check if expense tracker is in testing face
        const isInTesting = userService.featureTestPhase(TEST_FEATURES.EXPENSE_TRACKER, res?.testFeatures);
        console.log({ isInTesting })
    })


})