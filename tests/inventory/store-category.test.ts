import { beforeAll, describe, expect, it } from "vitest";
import { createStoreCategoryService, StoreCategoryService } from "../../src/services/inventory";
import { initTestEnv } from "../testEnv";
import { Chance } from "chance";

const chance = new Chance();
describe.sequential("Store Category API", () => {


    let storeCategoryService: StoreCategoryService
    let storeCategoryId: string|undefined;

    beforeAll(async () => {
        const env = await initTestEnv()
        storeCategoryService = createStoreCategoryService(env?.storeClient!)
    })
    // create store category
    it("should create store category", async () => {
        const res = await storeCategoryService.createStoreCategory({
            
            storeCategory: {
                name: chance.name(),
                description: chance.paragraph(),
                tags: [chance.word(), chance.word()]
            }
        })
        expect(res?.storeCategory).not.toBeNull();
        expect(res?.storeCategory._id.length).greaterThan(0)
        storeCategoryId = res?.storeCategory._id
    })
    // update 
    it("should update store category", async () => {
        if(!storeCategoryId){
            return;
        }
        const res = await storeCategoryService.updateStoreCategory({
            storeCategoryId,
            storeCategory: {
                name: chance.name(),
                description: chance.paragraph(),
            }
        })
        expect(res?.storeCategory).not.toBeNull();
        expect(res?.storeCategory._id.length).greaterThan(0)
    })
    // get store category
    it("should get store category", async () => {
        if(!storeCategoryId){
            return;
        }
        const res = await storeCategoryService.getStoreCategory({
            storeCategory: {
                _id: storeCategoryId
            }
        })
        expect(res?.storeCategory).not.toBeNull();
        expect(res?.storeCategory._id.length).greaterThan(0)
    })
    // get store categories
    it("should get store categories", async () => {
        const res = await storeCategoryService.getStoreCategories({
            limit: 100,
            skip: 0,
        })
        expect(res?.storeCategories.length).greaterThan(0);
    });
    // remove store category
    it("should remove store category", async () => {
        if(!storeCategoryId){
            return;
        }
        const res = await storeCategoryService.removeStoreCategory({
            storeCategoryId,
        })
        expect(res?.storeCategoryId).not.toBeNull();
    })
})