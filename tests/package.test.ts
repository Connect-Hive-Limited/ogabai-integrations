import { beforeAll, describe, expect, it } from "vitest";
import { getStores, storeClient } from "./setup";
import { type ProductService, createProductService } from "../src/services/inventory/product.service";
import { Product, ProductPackage } from "../src/types";
import { createPackageService, ProductPackageService } from "../src/services/inventory/package.service";
export { type PackageService } from "../src/services/inventory/package.service";

const getProduct = (storeId: string):Partial<Product> => ({
    name: "Test Product for Package",
    description: "Test Product Description",
    storeId,
    category: {
        name: "food stuff",
        _id: "",
        description: "",
        categoryStatus: "active",
        storeId: storeId || "",
        createdAt: "",
        status: "",
        isTemplate: ""
    },
    metricPackageId: "1",
    productPackages: [{
        _id: "1",
        name: "product package test",
        description: "",
        trackIndex: 0,
        productId: "",
        unit: "",
        unitQuantity: 0,
        totalStock: 0,
        barcode: "",
        priorityPrice: 0,
        stockLimit: 0,
        storeId: "",
        createdAt: "",
        deduction: 0,
        stocks: [],
        price: {
            _id: "1",
            packageId: "",
            sellingPrice: 0,
            costPrice: 100,
            newSellingPrice: 0,
            newCostPrice: 0,
            deduction: 0,
            storeId: "",
            timestamp: "",
            createdAt: ""
        }
    }],
    barcode: "",
    categoryId: "",
    images: [],
    productAttributes: [],
    tag: "",
    createdAt: "",
    totalStockInMetricPackage: 0,
    _id: ""
    
})
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