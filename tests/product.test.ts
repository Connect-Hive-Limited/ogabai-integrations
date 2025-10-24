import { beforeAll, describe, expect, it } from "vitest";
import { type ProductService, createProductService } from "../src/services/inventory/product.service";
import { getProduct } from "./dummy";
import { initTestEnv } from "./testEnv";
import { Product } from "../src/types";

describe.sequential("Product API", () => {
    let productService: ProductService;
    let productId: string;
    let storeId: string;
    let env: Awaited<ReturnType<typeof initTestEnv>>;
    let productName: string;
    let categoryName: string;
    let product: Partial<Product>
    beforeAll(async() => {
        env = await initTestEnv()
        const _storeId = env?.storeId!
        productService = createProductService(env?.storeClient!);
        storeId = _storeId
    });
    it("should create product", async () => {
        product =  getProduct(storeId || "")
        productName = product.name!
        categoryName = product.category?.name || ""
        const res = await productService.addProduct({
            product,
            imageTypes: ["image/jpeg", "image/png"],
        })
        console.log(JSON.stringify(res?.product))
        expect(res?.product).not.toBeNull();
        productId = res?.product?._id || "";
    });
    it("should get product & should have stock in metric package", async () => {
        const res = await productService.getProduct({
            product: {
                _id: productId
            },            
        })
         console.log(res?.product)
        expect(res?.product).not.toBeNull();
        expect(res?.product.totalStockInMetricPackage).is.greaterThan(1)
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
    it("should remove product", async () => {
        const res = await productService.removeProduct({
            productId,
        })
        expect(res?.productId).not.toBeNull();
    });
    // it("should have zero products after deletion", async () => {
    //     const res = await productService.getProducts({
    //         limit: 10,
    //         skip: 0
    //     })
    //     expect(res?.products.length).equal(0);
    // });
});