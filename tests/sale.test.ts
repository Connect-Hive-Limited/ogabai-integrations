import { beforeAll, describe, expect, it } from "vitest";
import { getStores, storeClient } from "./setup";
import { createProductService, ProductService } from "../src/services/inventory/product.service";
export { type PackageService } from "../src/services/inventory/package.service";
import { type SaleService, createSaleService } from "../src/services/sales/sale.service";
import { getProduct } from "./dummy";
import { createPackageService, ProductPackageService } from "../src/services/inventory/package.service";

describe.sequential("Sales API", () => {
    let productService: ProductService;
    let packageService: ProductPackageService
    let saleService: SaleService
    let productId: string;
    beforeAll(async() => {
        if (!storeClient) throw new Error("No client");
        productService = createProductService(storeClient);
        saleService = createSaleService(storeClient);
        packageService = createPackageService(storeClient);
    });
    it("should create product", async () => {
        const res = await productService.addProduct({
            product: getProduct(getStores()?.[0]._id || ""),
            template: false
        })
        expect(res?.product).not.toBeNull();
        productId = res?.product?._id || "";
    });
   it("should get product packages", async () => {
       const res = await packageService.getPackages({
           productPackage: {
               productId
           },
           limit: 100,
           skip: 0
       })
       expect(res?.productPackages.length).greaterThan(0);
    });
});