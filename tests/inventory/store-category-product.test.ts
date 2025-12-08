import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createProductService, createStoreCategoryProductService, createStoreCategoryService, ProductService, StoreCategoryProductService, StoreCategoryService } from "../../src/services/inventory";
import { initTestEnv } from "../testEnv";
import { getProduct } from "../dummy";

const chance = new Chance();

describe.sequential("Store Category Product API", () => {

    let storeCategoryService: StoreCategoryService;
    let storeCategoryId: string|undefined;
    let storeCategoryProduct: StoreCategoryProductService;
    let productTemplateService: ProductService;
    let productTemplateId: string|undefined;
    let productTemplateId2: string|undefined;
    let storeCategoryProductId: string|undefined;
    let env: Awaited<ReturnType<typeof initTestEnv>>;
    beforeAll(async() => {
        env = await initTestEnv()
        storeCategoryProduct = createStoreCategoryProductService(env?.storeClient!);
        productTemplateService = createProductService(env?.storeClient!);
        storeCategoryService = createStoreCategoryService(env?.storeClient!);

        // create product 
        const product =  getProduct(env?.storeId || "")
        const res = await productTemplateService.addProduct({
            product,
            imageTypes: ["image/jpeg", "image/png"],
        })
        expect(res?.product).not.toBeNull();
        expect(res?.product._id.length).greaterThan(0)
        productTemplateId = res?.product?._id || "";

        // create product 2
        const product2 =  getProduct(env?.storeId || "")
        const res2 = await productTemplateService.addProduct({
            product: product2,
            imageTypes: ["image/jpeg", "image/png"],
        })
        expect(res2?.product).not.toBeNull();
        expect(res2?.product._id.length).greaterThan(0)
        productTemplateId2 = res2?.product?._id || "";

        // create store category 
        const res1 = await storeCategoryService.createStoreCategory({
            storeCategory: {
                name: chance.string()
            }
        })
        expect(res1?.storeCategory).not.toBeNull();
        expect(res1?.storeCategory._id.length).greaterThan(0)
        storeCategoryId = res1?.storeCategory?._id || "";
    });

    it("should create store category product", async () => {
        if(!storeCategoryId || !productTemplateId) return
        const res = await storeCategoryProduct.createStoreCategoryProduct({
            storeCategoryProduct: {
                storeCategoryId,
                productId: productTemplateId
            }
        })
        expect(res?.storeCategoryProduct).not.toBeNull();
        expect(res?.storeCategoryProduct._id.length).greaterThan(0)
        storeCategoryProductId = res?.storeCategoryProduct?._id || "";
    })

    it("should get store category product", async () => {
        if(!storeCategoryProductId) return
        const res = await storeCategoryProduct.getStoreCategoryProduct({
            storeCategoryProduct: {
                _id: storeCategoryProductId
            }
        })
        expect(res?.storeCategoryProduct).not.toBeNull();
        expect(res?.storeCategoryProduct._id.length).greaterThan(0)
    })
    // get store category products
    it("should get store category products", async () => {
        if(!storeCategoryId) return
        const res = await storeCategoryProduct.getStoreCategoryProducts({
            limit: 10,
            skip: 0,
        })
        expect(res?.storeCategoryProducts.length).greaterThan(0)
    })
    it("should update store category product", async () => {
        if(!storeCategoryProductId) return
        
        const res = await storeCategoryProduct.updateStoreCategoryProduct({
            storeCategoryProductId,
            storeCategoryProduct: {
                productId: productTemplateId2
            }
        })
        expect(res?.storeCategoryProduct).not.toBeNull();
        expect(res?.storeCategoryProduct._id.length).greaterThan(0)
    })
    it("should remove store category product", async () => {
        if(!storeCategoryProductId) return
        const res = await storeCategoryProduct.removeStoreCategoryProduct({
            storeCategoryProductId
        })
        expect(res?.storeCategoryProductId).not.toBeNull();
        expect(res?.storeCategoryProductId.length).greaterThan(0)
    })
});