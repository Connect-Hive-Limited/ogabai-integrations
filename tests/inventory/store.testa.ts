import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { StoreService, createStoreService }  from "../../src/services/inventory/store.service";
import { initTestEnv } from "../testEnv";

const chance = new Chance();

describe.sequential("Store API", () => {
    let storeService: StoreService
    let env: Awaited<ReturnType<typeof initTestEnv>>;
    let storeId: string;
    beforeAll(async () => {
        env = await initTestEnv();  
        storeService = createStoreService(env?.storeClient!);
    })
    it("should create store", async () => {
        const res = await storeService.addStore({
            store: {
                name: chance.name(),
                storeLocation: chance.address(),
                shopType: "provision",
                ownerId: env?.userId!
            }
        })
        expect(res?.store?._id.length).greaterThan(0);
        if(res?.store?._id) storeId = res?.store?._id
    })
    it("should get store", async () => {
        if(!storeId) return
        const res = await storeService.getStore({
            store: {
                _id: storeId
            }
        });
        expect(res).not.toBeNull();
        expect(res?.store?._id.length).greaterThan(0)
    });
    it("should get stores", async () => {
        const res = await storeService.getStores({
            limit: 10,
            skip: 0,
            store: {
                ownerId: env?.userId
            }
        })
        console.log({ res: JSON.stringify(res) })
        expect(res?.stores?.length).greaterThan(0)
    })
})