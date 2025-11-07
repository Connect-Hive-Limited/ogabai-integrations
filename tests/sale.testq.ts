import { beforeAll, describe, expect, it } from "vitest";
import { createProductService, ProductService } from "../src/services/inventory/product.service";
export { type PackageService } from "../src/services/inventory/package.service";
import { getProduct } from "./dummy";
import { Product, ProductPackage, Sale, Transaction } from "../src/types";
import { type TransactionService, createTransactionService } from "../src/services/sales/transaction.service";
import { initTestEnv } from "./testEnv";
import { createUserService, UserService } from "../src/services/user/user.service";

function getPackageMetricCount(
  packages: ProductPackage[],
  metricPackageId: string,
  targetPackageId: string
): number {
  if (!packages?.length) throw new Error("Package list is empty");

  const sortedPackages = [...packages].sort((a, b) => a.trackIndex - b.trackIndex);
  const metricIndex = sortedPackages.findIndex((p) => p._id === metricPackageId);
  const targetIndex = sortedPackages.findIndex((p) => p._id === targetPackageId);

  if (metricIndex === -1 || targetIndex === -1) {
    throw new Error("Invalid package ID(s)");
  }

  if (metricIndex === targetIndex) return 1;

  let count = 1;

  // If target package is LARGER than metric (multiply up)
  if (targetIndex > metricIndex) {
    for (let i = metricIndex + 1; i <= targetIndex; i++) {
      count *= sortedPackages[i].unitQuantity || 1;
    }
  }
  // If target package is SMALLER than metric (divide down)
  else {
    for (let i = targetIndex + 1; i <= metricIndex; i++) {
      count /= sortedPackages[i].unitQuantity || 1;
    }
  }

  return count;
}

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

  const qty = 3;
  const metricCount = getPackageMetricCount(
    sortedPackages,
    product.metricPackageId,
    randomPackage._id
  );

  const sale: Sale = {
    _id: crypto.randomUUID(),
    productId: product._id,
    packageId: randomPackage._id,
    quantity: qty,
    amountTotal: 0,
    quantityInMetricUnit: qty * metricCount,
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
    let userService: UserService
    let storeId: string
    
    let productId: string;
    let product: Product;
    let env: Awaited<ReturnType<typeof initTestEnv>>;
    let transactionId: string|undefined;
    beforeAll(async() => {
        env = await initTestEnv()
        storeId = env?.storeId!
        const storeClient = env?.storeClient!
        productService = createProductService(storeClient);
        transactionService = createTransactionService(storeClient);
        userService = createUserService(storeClient);
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
    it("should get transaction and transaction should contain sales", async () => {
      const res = await transactionService.getTransaction({
        transaction: {
          _id: transactionId
        }
      })
      expect(res?.transaction?.sales.length).greaterThan(0)
    })
    it("transaction count should increase", async () => {
      const res = await userService.getUserDashStats()
      expect(res?.saleCounts.totalSales).greaterThan(0)
    })
});