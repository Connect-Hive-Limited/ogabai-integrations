import { beforeAll, describe, expect, it } from "vitest";
import { ProductPackage } from "../src/types";
import { createPackageService, ProductPackageService } from "../src/services/inventory/package.service";
import { getProduct } from "./dummy";
import { initTestEnv } from "./testEnv";
import { createProductService, ProductService } from "../src/services/inventory";
export { type PackageService } from "../src/services/inventory/package.service";

describe.sequential("Product Package API", () => {
    let productService: ProductService;
    let packageService: ProductPackageService;
    let productId: string;
    let packageId: string;
    let storeId: string;
    let env: Awaited<ReturnType<typeof initTestEnv>>;
    beforeAll(async() => {
        env = await initTestEnv()
        packageService = createPackageService(env?.storeClient!);
        productService = createProductService(env?.storeClient!);
        storeId = env?.storeId!;
    });
    it("should create product", async () => {
        const res = await productService.addProduct({
            product: getProduct(storeId)
        })
        expect(res?.product).not.toBeNull();
        productId = res?.product._id!
    })
    it("should create package", async () => {
        const res = await packageService.addPackage({
            productPackage: {
                ...getProduct(storeId).productPackages?.[0] as Partial<ProductPackage>,
                productId,
            },
            template: false,
        })
        expect(res?.productPackage).not.toBeNull();
        packageId = res?.productPackage?._id || "";
    });
   it("should get package", async () => {
        const res = await packageService.getPackage({
            productPackage: {
                _id: packageId
            },
            template: false
        })
        expect(res?.productPackage).not.toBeNull();
        expect(res?.productPackage.price?.costPrice).eq(getProduct(storeId).productPackages?.[0].stocks?.[0]?.costPerPackage);
    });
     it("should get all product packages", async () => {
        const res = await packageService.getPackages({
            limit: 100,
            skip: 0,
        })
        console.log("****** packages ******")
        console.log(res?.productPackages)
        console.log("****** packages ******")
        expect(res?.productPackages.length).greaterThan(0)
    })
    it("should update package", async () => {
        const res = await packageService.updatePackage({
            packageId,
            productPackage: {
                name: "Updated Package"
            },
            template: false
        })
        expect(res?.productPackage).not.toBeNull();
    });
    it("should remove package", async () => {
        const res = await packageService.removePackage({
            packageId,
        })
        expect(res?.packageId).not.toBeNull();
    });
    it("should not get package after deletion", async () => {
        const res = await packageService.getPackage({
            productPackage: {
                _id: packageId
            },
            template: false
        })
        expect(res?.productPackage).toBeNull();
    });
});