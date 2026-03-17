import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { initTestEnv } from "../testEnv";
import { createUserAccountService, UserAccountService } from "../../src/services/user/user-account.service";
import { createUserRoleService } from "../../src/services/user/user-role.service";

const chance = new Chance();

describe.sequential("UserAccount API", () => {
    let userId: string, storeId: string, userAccountId: string;
    let userAccountService: UserAccountService;
    let roleId: string;


    beforeAll(async () => {
        const env = await initTestEnv();
        userId = env?.userId ?? ""
        storeId = env?.storeId!
        userAccountService = createUserAccountService(env?.storeClient!);
        const userRoleService = createUserRoleService(env?.storeClient!);
        const userRoleRes = await userRoleService.getUserRole({
            userRole: {
                shortname: "root"
            }
        })
        console.log({ userRoleRes })
        roleId = userRoleRes?.userRole?.id || ""
    })

    it("should create userAccount", async () => {
        const res = await userAccountService.createUserAccount({
            userAccount: {
                user: {
                    phone: chance.phone(),
                }, 
                storeId,
                userRoleId: roleId,
            },
        })
        console.log({ res: JSON.stringify(res) })
        expect(res?.userAccount).not.toBeNull();
        userAccountId = res?.userAccount?.id || "";
    })
    // it("should get userAccount", async () => {
    //     const res = await userAccountService.getUserAccount({
    //         userAccount: {
    //             id: userAccountId
    //         }
    //     })
    //     expect(res?.userAccount?.id).toEqual(userAccountId);
    // })
    // it("should update userAccount", async () => {
    //     const newLastName = chance.name();
    //     const res = await userAccountService.updateUserAccount({
    //         userAccountId,
    //         userAccount: {
    //             name: newLastName,
    //         }
    //     })
    //     expect(res?.userAccount?.id).toEqual(userAccountId);
    //     expect(res?.userAccount.name).toEqual(newLastName);
    // })

    // // list userAccounts 
    // it("should list userAccounts", async() => {
    //     const res = await userAccountService.getUserAccounts({
    //         userAccount: {
    //             id: userAccountId
    //         },
    //         limit: 100,
    //         skip: 0
    //     })
    //     expect(res?.userAccounts.length).greaterThan(0);
    // })

})