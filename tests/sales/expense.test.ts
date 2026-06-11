import { beforeAll, describe, expect, it } from "vitest";
import { createExpenseService, ExpenseService } from "../../src";
import { initTestEnv } from "../testEnv";


describe.sequential("Expense Category API", () => {
    let expenseCategoryService: ExpenseService;


    beforeAll(async () => {
        const env = await initTestEnv();
        expenseCategoryService = createExpenseService(env?.storeClient!);
    })

    it("should list expense categories", async () => {
        const res = await expenseCategoryService.getExpenses({
            skip: 0,
            limit: 1
        })
        console.log({ res: JSON.stringify(res, null, 2) })
        expect(res?.total).toBeNull();
    })
})