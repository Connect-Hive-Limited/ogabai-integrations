import { beforeAll, describe, expect, it } from "vitest";
import { type ProductService, createProductService } from "../../src/services/inventory/product.service";
import { getProduct } from "../dummy";
import { initTestEnv } from "../testEnv";
import { Product } from "../../src/types";
import { createSubscriptionPlanService, createSubscriptionService, SubscriptionPlanService, SubscriptionService } from "../../src/services/subscription";

describe.sequential("Product API", () => {
    let productService: ProductService;
    let subscriptionService: SubscriptionService;
    let subscriptionPlanService: SubscriptionPlanService;
    let productId: string;
    let storeId: string;
    let env: Awaited<ReturnType<typeof initTestEnv>>;
    let productName: string;
    let categoryName: string;
    let product: Partial<Product>
    let userId: string;
    beforeAll(async() => {
        env = await initTestEnv()
        const _storeId = env?.storeId!
        productService = createProductService(env?.storeClient!);
        subscriptionService = createSubscriptionService(env?.storeClient!)
        subscriptionPlanService = createSubscriptionPlanService(env?.storeClient!);
        storeId = _storeId
        userId = env?.userId!
    });
    it("should create product", async () => {
        product =  getProduct(storeId || "")
        productName = product.name!
        categoryName = product.category?.name || ""
        const res = await productService.addProduct({
            product,
            imageTypes: ["image/jpeg", "image/png"],
        })
        expect(res?.product).not.toBeNull();
        productId = res?.product?._id || "";
    });
    it("should create multiple products", async () => {
        const products = Array.from({ length: 5 }, () => getProduct(storeId || ""))
        const res = await productService.addProducts({
            products,
        })
        expect(res?.products.length).equal(5);
     });
    it("should get product counts by user ids", async () => {
        const res = await productService.getCustomerProductCountsByIds({
            userIds: [userId]
        })
        expect(res?.customersProductCounts.length).greaterThan(0);
    })
    it("should get product & should have stock in metric package", async () => {
        const res = await productService.getProduct({
            product: {
                _id: productId
            },            
        })
        expect(res?.product).not.toBeNull();
        expect(res?.product.totalStockInSmallestPackage).is.greaterThan(1)
    });
    it("should search products", async () => {
        const res = await productService.searchProductNames({
            search: productName,
            limit: 10,
            skip: 0,
        })
        expect(res?.productNames.length).greaterThan(0);
    });
    it("should search categories", async () => {
        const res = await productService.searchCategoriesAndTemplate({
            search: categoryName,
        })
        expect(res?.productCategories.length).greaterThan(0)
    })
    it("should update product", async () => {
        const res = await productService.updateProduct({
            productId,
            product: {
                name: "Updated Product"
            },
        })
        expect(res?.product).not.toBeNull();
    });
    it("should get products", async () => {
        const res = await productService.getProducts({
            limit: 10,
            skip: 0,
            product: {
                storeId
            }
        })
        expect(res?.products.length).greaterThan(0);
    });
    // it("should remove product", async () => {
    //     const res = await productService.removeProduct({
    //         productId,
    //     })
    //     expect(res?.productId).not.toBeNull();
    // });
    // it("should have zero products after deletion", async () => {
    //     const res = await productService.getProducts({
    //         limit: 10,
    //         skip: 0
    //     })
    //     expect(res?.products.length).equal(0);
    // });
});