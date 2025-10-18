import { beforeAll, describe, expect, it } from "vitest";
import { getStores, storeClient } from "./setup";
import { ProductPackage } from "../src/types";
import { createPackageService, ProductPackageService } from "../src/services/inventory/package.service";
import { getProduct } from "./dummy";
export { type PackageService } from "../src/services/inventory/package.service";

describe.sequential("Product Package API", () => {
    let packageService: ProductPackageService;
    let packageId: string;
    beforeAll(async() => {
        if (!storeClient) throw new Error("No client");
        packageService = createPackageService(storeClient);
    });
    it("should create package", async () => {
        const res = await packageService.addPackage({
            productPackage: getProduct(getStores()?.[0]._id || "").productPackages?.[0] as Partial<ProductPackage>,
            template: false,
            packageStocks: []
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
    });
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