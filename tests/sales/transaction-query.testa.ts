import { beforeAll, describe, expect, it } from "vitest";
import { createProductService, ProductService } from "../../src/services/inventory/product.service";
import { getProduct } from "../dummy";
import { Product, Sale, Transaction } from "../../src/types";
import { type TransactionService, createTransactionService } from "../../src/services/sales/transaction.service";
import { initTestEnv } from "../testEnv";
import { createUserService, UserService } from "../../src/services/user/user.service";


describe.sequential("Sales API", () => {
    let productService: ProductService;
    let transactionService: TransactionService
    let userService: UserService
    let storeId: string
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

    it("should get transactions and transaction should contain sales", async () => {
      const res = await transactionService.getTransactions({
        transaction: {
          storeId: "69e5ff6c71ca2ff3115dde19",
        },
        limit: 100,
        skip: 0
      })
      console.log({ res: JSON.stringify({ res }, null, 2) })
      expect(res?.transactions[0].sales.length).toBeGreaterThan(0)

    })
});