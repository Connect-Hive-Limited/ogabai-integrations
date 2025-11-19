import { Product } from "../src/types";
import Chance from "chance";
const chance = new Chance();

export const getProduct = (storeId: string):Partial<Product> => ({
    name: chance.name(),
    description: chance.name(),
    storeId,
    category: {
        name: chance.name(),
        _id: "",
        description: "",
        categoryStatus: "active",
        storeId: storeId || "",
        createdAt: "",
        status: "",
        isTemplate: ""
    },
    smallestPackageId: "1",
    productPackages: [
        {
            _id: "1",
            name: chance.name(),
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
            stocks: [{
                _id: "",
                packageId: "",
                stockQty: 100,
                costPerPackage: 100,
                sellPerPackage: 120,
                deduction: 0,
                storeId: "",
                createdAt: ""
            }]
        },
        {
            _id: "2",
            name: chance.name(),
            description: "",
            trackIndex: 1,
            productId: "",
            unit: "1",
            unitQuantity: 10,
            totalStock: 0,
            barcode: "",
            priorityPrice: 0,
            stockLimit: 0,
            storeId: "",
            createdAt: "",
            deduction: 0,
            stocks: [{
                _id: "",
                packageId: "",
                stockQty: 100,
                costPerPackage: 100,
                sellPerPackage: 120,
                deduction: 0,
                storeId: "",
                createdAt: ""
            }
        ]},
        {
            _id: "3",
            name: chance.name(),
            description: "",
            trackIndex: 1,
            productId: "",
            unit: "2",
            unitQuantity: 10,
            totalStock: 0,
            barcode: "",
            priorityPrice: 0,
            stockLimit: 0,
            storeId: "",
            createdAt: "",
            deduction: 0,
            stocks: [{
                _id: "",
                packageId: "",
                stockQty: 0,
                costPerPackage: 100,
                sellPerPackage: 120,
                deduction: 0,
                storeId: "",
                createdAt: ""
            }
        ]}
    ],
    barcode: "",
    categoryId: "",
    images: [],
    productAttributes: [],
    tag: "",
    createdAt: "",
    totalStockInSmallestPackage: 0,
    _id: ""
    
})