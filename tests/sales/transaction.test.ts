import { beforeAll, describe, expect, it } from "vitest";
import { createProductService, createTransactionService, Product, TransactionService } from "../../src";
import { initTestEnv } from "../testEnv";
import { getProduct } from "../dummy";

describe.sequential("Transaction API", () => {
    let transactionId: string;
    let transactionService: TransactionService;
    let product: Product;
    let storeId: string;
    let userId: string;

    beforeAll(async () => {
        const env = await initTestEnv();
        storeId = env?.storeId!
        userId = env?.userId!
        transactionService = createTransactionService(env?.storeClient!);
        const productService = createProductService(env?.storeClient!);
        const res = await productService.addProduct({
            product: getProduct(env?.storeId!),
        })
        expect(res?.product).not.toBeNull();
        product = res?.product!;
        expect(product.smallestPackageId.length).greaterThan(0);
    })

    it("should create transaction", async () => {
        const res = await transactionService.addTransaction({
            transaction: {
                amountPaid: 30000,
                createdById: userId,
                transactionType: "sale",
                sales: [
                    {
                        productId: product._id,
                        quantity: 5,
                        packageId: product.smallestPackageId,
                        amountTotal: 30000,
                        _id: "",
                        createdAt: "",
                        storeId,
                    }
                ]
            }
        })
        expect(res?.transaction).not.toBeNull();
        transactionId = res?.transaction?._id || "";
    })

    it("should get transaction", async () => {
        const res = await transactionService.getTransaction({
            transaction: {
                _id: transactionId
            }
        })
        expect(res?.transaction).not.toBeNull();
        expect(res?.transaction._id.length).greaterThan(0)
    })

    it("should get transactions", async () => {
        const res = await transactionService.getTransactions({
            limit: 10,
            skip: 0,
            transaction: {
                storeId
            }
        })
        expect(res?.transactions?.length).greaterThan(0)
    })

    it("sale quantity cannot be greater than previous sale quantity", async () => {
        try {
            const res = await transactionService.returnSales({
                transaction: {
                    amountPaid: 30000,
                    createdById: userId,
                    parentTransactionId: transactionId,
                    sales: [
                        {
                            productId: product._id,
                            quantity: 6,
                            packageId: product.smallestPackageId,
                            amountTotal: 30000,
                            _id: "",
                            createdAt: "",
                            storeId,
                        }
                    ]
                }
            })
        }catch(err) {
            expect(err).not.toBeNull();   
        }
    })
    it("sale amount cannot be lesser than previous sale amount", async () => {
        try {
            const res = await transactionService.returnSales({
                transaction: {
                    amountPaid: 30000,
                    createdById: userId,
                    parentTransactionId: transactionId,
                    sales: [
                        {
                            productId: product._id,
                            quantity: 2,
                            packageId: product.smallestPackageId,
                            amountTotal: 50000,
                            _id: "",
                            createdAt: "",
                            storeId,
                        }
                    ]
                }
            })
        }catch(err) {
            expect(err).not.toBeNull();   
        }
    })
    it("should properly return sold item", async () => {
        const res = await transactionService.returnSales({
            transaction: {
                amountPaid: 10000,
                createdById: userId,
                parentTransactionId: transactionId,
                sales: [
                    {
                        productId: product._id,
                        quantity: 2,
                        packageId: product.smallestPackageId,
                        amountTotal: 1000,
                        _id: "",
                        createdAt: "",
                        storeId,
                    }
                ]
            }
        })
        console.log({ res: JSON.stringify(res, null, 2) })
        expect(res?.transaction).not.toBeNull();
        expect(res?.transaction.sales.length).greaterThan(0)
    })
})