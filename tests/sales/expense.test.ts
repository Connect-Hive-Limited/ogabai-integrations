import { beforeAll, describe, expect, it } from "vitest";
import { createExpenseService, Expense, ExpenseService } from "../../src";
import { initTestEnv } from "../testEnv";
import Chance from "chance"

const chance = new Chance();


describe.sequential("Expense Category API", () => {
    let expenseService: ExpenseService;
    let storeId: string | undefined, userId: string | undefined;
    let expenseId: string | undefined; //"7935575e-5f0d-4f3c-8735-7858c6574f8c";

    beforeAll(async () => {
        const env = await initTestEnv();
        storeId = env?.storeId
        userId = env?.userId

        expenseService = createExpenseService(env?.storeClient!);
    })

    it("should create expense", async () => {
        const expense: Partial<Expense> = {
            title: chance.name(),
            description: chance.string(),
            expenseCategoryId: chance.guid(),
            amount: chance.integer({ min: 10000000, max: 99999999 }),
            repeatedEvery: "day",
            dispenseStaffIds: [],
            expenseType: "operation",
            narration: "for something close",
            createdById: userId,
            storeId,
            paymentType: "cash"
        }
        const res = await expenseService.createExpense({
            expense
        })
        expect(res?.expense).not.toBeNull();
        expenseId = res?.expense?.id;
    })

    it("should list expenses", async () => {
        const res = await expenseService.getExpenses({
            skip: 0,
            limit: 1
        })
        expect(res?.expenses.length).toEqual(1);
    })

    it("should delete expense", async () => {
        if(!expenseId) {
            return ;
        }
        const res = await expenseService.deleteExpense({
            expenseId
        })
        expect(res?.expenseId).toEqual(expenseId);
    })
    it("should not see expense with same id", async () => {
        if(!expenseId) {
            return;
        }
        const res = await expenseService.getExpense({
            expense: {
                id: expenseId
            }
        })
        expect(res?.expense).toBeNull();
    })

    it("should delete expense by id", async () => {
        if(!expenseId){
            return;
        }
        const res = await expenseService.deleteExpense({
            expenseId
        })
        expect(res?.expenseId).toEqual(expenseId);
    })
})