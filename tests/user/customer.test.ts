import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { initTestEnv } from "../testEnv";
import { createCustomerService, CustomerService } from "../../src/services/user/customer.service";
import { TransactionService, createTransactionService } from "../../src/services/sales/transaction.service";
const chance = new Chance();

describe.sequential("ApplicationFeature API", () => {
    let userAccountId: string;
    let customerService: CustomerService;
    let transactionService: TransactionService;
    let userId: string;
    let storeId: string;
    let customerId: string;


    beforeAll(async () => {
        const env = await initTestEnv();
        userId = env?.userId ?? ""
        storeId = env?.storeId ?? ""
        customerService = createCustomerService(env?.storeClient!);
        transactionService = createTransactionService(env?.storeClient!)
    })
    it("should create customer", async () => {
        const res = await customerService.createCustomer({
            customer: {
                name: chance.name(),
                email: chance.email(),
                phone: chance.phone(),
                storeIds: [storeId],
            }
        })
        expect(res?.customer.id).not.toBe("");
        expect(res?.customer).not.toBeNull();
        customerId = res?.customer?.id || "";
    })
    it("should get customer", async () => {
        const res = await customerService.getCustomer({
            customer: {
                id: customerId
            }
        })
        console.log({ res: JSON.stringify(res, null, 2) })
    })
    it("List customers", async () => {
        const res = await customerService.getCustomersByStoreId({
            storeId,
            limit: 1,
            skip: 0,
        })
        console.log({ res: JSON.stringify(res, null, 2) })
        expect(res?.customers.length).greaterThan(0);
        expect(res?.total).greaterThan(0);
    })
    it("can deposit for store customer", async () => {
        if(!customerId){
            return;
        }
        const res = await transactionService.addCustomerDeposit({
            customerId,
            amountPaid: 3000,
        })

        console.log({ res: JSON.stringify(res, null, 2) })
    })
})