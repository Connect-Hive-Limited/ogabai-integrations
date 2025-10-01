import { beforeAll, describe, expect, it } from "vitest";
import { getStores, storeClient } from "./setup";
import { type ProductService, createProductService } from "../src/services/inventory/product.service";
import { Product } from "../src/types";

const getProduct = (storeId: string):Product => ({
    name: "Test Product",
    description: "Test Product",
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
        name: "product package",
        description: "",
        trackIndex: 0,
        productId: "",
        unit: "",
        unitQuantity: 0,
        totalStock: 0,
        parent: "",
        priorityPrice: 0,
        stockLimit: 0,
        storeId: "",
        createdAt: "",
        deduction: 0,
        stocks: [],
        price: {
            _id: "",
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
    metricPackage: {
        _id: "1",
        name: "",
        description: "",
        trackIndex: 0,
        productId: "",
        unit: "",
        unitQuantity: 0,
        totalStock: 0,
        parent: "",
        priorityPrice: 0,
        stockLimit: 0,
        storeId: "",
        createdAt: "",
        deduction: 0,
        stocks: [],
        price: {
            _id: "",
            packageId: "",
            sellingPrice: 200,
            costPrice: 100,
            newSellingPrice: 0,
            newCostPrice: 0,
            deduction: 0,
            storeId: "",
            timestamp: "",
            createdAt: ""
        }
    },
    _id: ""
})
describe("Product API", () => {
    let productService: ProductService;
    let productId: string;
    beforeAll(() => {
        if (!storeClient) throw new Error("No client");
        productService = createProductService(storeClient);
    });
    it("should create product", async () => {
        const storeId = getStores()?.[0]._id;
        const res = await productService.addProduct({
            product: getProduct(storeId || ""),
            imageTypes: ["image/jpeg", "image/png"],
            template: false
        })
        expect(res?.product).not.toBeNull();
        productId = res?.product?._id || "";
    });
    it("should get product", async () => {
        const res = await productService.getProduct({
            product: {
                _id: productId
            },            
        })
        expect(res?.product).not.toBeNull();
    });
    it("should update product", async () => {
        const res = await productService.updateProduct({
            productId,
            product: {
                name: "Updated Product"
            },
            template: false
        })
        expect(res?.product).not.toBeNull();
    });
    it("should get products", async () => {
        const res = await productService.getProducts({
            limit: 10,
            skip: 0
        })
        expect(res?.products.length).greaterThan(0);
    });
    it("should remove product", async () => {
        const res = await productService.removeProduct({
            productId,
            template: false
        })
        expect(res?.productId).not.toBeNull();
    });
    it("should have zero products after deletion", async () => {
        const res = await productService.getProducts({
            limit: 10,
            skip: 0
        })
        expect(res?.products.length).equal(0);
    });
});