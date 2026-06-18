import { beforeAll, describe, expect, it } from "vitest";
import { createExpenseCategoryService, ExpenseCategoryService } from "../../src";
import { initTestEnv } from "../testEnv";


describe.sequential("Expense Category API", () => {
    let expenseCategoryService: ExpenseCategoryService;


    beforeAll(async () => {
        const env = await initTestEnv();
        expenseCategoryService = createExpenseCategoryService(env?.storeClient!);
    })

    it("should list expense categories", async () => {
        const res = await expenseCategoryService.getExpenseCategories({
            skip: 0,
            limit: 1
        })
        console.log({ res: JSON.stringify(res, null, 2) })
        expect(res?.expenseCategories.length).greaterThan(0)
    })
})