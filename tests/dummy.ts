import { Product } from "../src/types";

export const getProduct = (storeId: string):Partial<Product> => ({
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