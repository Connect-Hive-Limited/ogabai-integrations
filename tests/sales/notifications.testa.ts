import { beforeAll, describe, expect, it } from "vitest";
import { createProductService, ProductService } from "../../src/services/inventory/product.service";
export { type PackageService } from "../../src/services/inventory/package.service";
import { getProduct } from "../dummy";
import { Product, Sale, Transaction } from "../../src/types";
import { type TransactionService, createTransactionService } from "../../src/services/sales/transaction.service";
import { initTestEnv } from "../testEnv";
import { createUserNotificationService, UserNotificationService } from "../../src/services/user/user-notification.service";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
function createTransaction(product: Product, storeId: string): Partial<Transaction> {
  if (!product?.productPackages?.length) {
    throw new Error(`Product ${product._id} has no packages`);
  }

  const sortedPackages = [...product.productPackages].sort(
    (a, b) => a.trackIndex - b.trackIndex
  );

  // Pick a random package
  const randomPackage =
    sortedPackages[Math.floor(Math.random() * sortedPackages.length)];

  const qty = 52;

  const sale: Sale = {
    _id: crypto.randomUUID(),
    productId: product._id,
    packageId: randomPackage._id,
    quantity: qty,
    amountTotal: 0,
    createdAt: new Date().toISOString(),
    storeId,
  };

  const transaction: Partial<Transaction> = {
    _id: crypto.randomUUID(),
    from: "",
    to: "",
    paymentType: "cash",
    paymentDate: new Date().toISOString(),
    amountTotal: sale.amountTotal,
    amountPaid: sale.amountTotal,
    saleIds: [sale._id],
    platform: "pos",
    fromWallet: "",
    toWallet: "",
    createdAt: new Date().toISOString(),
    sales: [sale],
    storeId,
  };

  return transaction;
}

describe.sequential("Sales API", () => {
    let productService: ProductService;
    let transactionService: TransactionService
    let userNotificationService: UserNotificationService
    let storeId: string
    let userId: string
    
    let productId: string;
    let product: Product;
    let env: Awaited<ReturnType<typeof initTestEnv>>;
    let transactionId: string|undefined;
    beforeAll(async() => {
        env = await initTestEnv()
        storeId = env?.storeId!
        userId = env?.userId!
        const storeClient = env?.storeClient!
        productService = createProductService(storeClient);
        transactionService = createTransactionService(storeClient);
        userNotificationService = createUserNotificationService(storeClient);
    });
    it("should create product", async () => {
        const res = await productService.addProduct({
            product: getProduct(storeId || ""),
            template: false
        })
        expect(res?.product).not.toBeNull();
        productId = res?.product?._id || "";
    });
    it("should get product with packages", async () => {
        const res = await productService.getProduct({
            product: {
                _id: productId
            },            
        })
        expect(res?.product?.productPackages.length).greaterThan(0);
        product = res?.product as Product;
    });
    it("should create transaction - sale", async () => {
        const res = await transactionService.addTransaction({
            transaction: createTransaction(product, storeId),
        })
        expect(res?.transaction?._id).not.toBeNull();
        transactionId = res?.transaction._id;
    })
    it("should get user notification", async () => {
        await wait(5000)
        const res = await userNotificationService.getUserNotifications({
            userNotification: {
              storeId
            },
            limit: 100,
            skip: 0
        })
        expect(res?.userNotifications.length).greaterThan(0);
    })
});

