import { beforeAll, describe, expect, it } from "vitest";
import { createProductService, ProductService } from "../../src/services/inventory/product.service";
export { type PackageService } from "../../src/services/inventory/package.service";
import { getProduct } from "../dummy";
import { Product, Sale, Transaction } from "../../src/types";
import { type TransactionService, createTransactionService } from "../../src/services/sales/transaction.service";
import { initTestEnv } from "../testEnv";
import { createUserNotificationService, UserNotificationService } from "../../src/services/user/user-notification.service";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


describe.sequential("Sales API", () => {

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
        userNotificationService = createUserNotificationService(storeClient);
    });
    it("list user notifications", async () => {
        const res = await userNotificationService.getUserNotifications({
            limit: 1,
            skip: 0,
            userNotification: {
                storeId
            }
        })
        console.log({ storeId })
        console.log({ res: JSON.stringify(res, null, 2) })
    });
    
});

