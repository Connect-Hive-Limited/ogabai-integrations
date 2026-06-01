import { GraphQLClient } from "../../client";
import { Transaction } from "../../types";
import { createExpenseService, createTransactionService } from "../..";
import { EntityResponse } from "../../helpers/crud.contract";

export const createExpenseDispenseService = (client: GraphQLClient) =>  {
    const expenseService =  createExpenseService(client);
    const transactionService = createTransactionService(client);
    return ({
        getExpensesDispensedByStore: async (req: {
            storeId: string;
            filter?: Partial<Omit<Transaction, "storeId" | "transactionType" | "id">>;
            limit: number;
            skip?: number;
        }) : Promise<EntityResponse<Transaction[], "transactions"> | null> => {
            return await transactionService.getTransactions({
                transaction: {
                    ...req.filter,
                    storeId: req.storeId,
                    transactionType: "expense",
                },
                limit: req.limit,
                skip: req.skip || 0,
            });
        },
         getExpensesDispensedByStaff: async (req: {
            staffId: string;
            filter: Partial<Omit<Transaction, "createdById" | "transactionType" | "id">>;
            limit: number;
            skip?: number;
        }) : Promise<EntityResponse<Transaction[], "transactions"> | null> => {
            return await transactionService.getTransactions({
                transaction: {
                    ...req.filter,
                    createdById: req.staffId,
                    transactionType: "expense",
                },
                limit: req.limit,
                skip: req.skip || 0,
            });
        },
        dispenseExpense: async (req: {
            expenseDispense: Pick<Transaction, "expenseId" | "amountPaid" | "narration" | "createdById">;
        }) : Promise<EntityResponse<Transaction, "transaction"> | undefined> => {
            const { amountPaid, narration, createdById, expenseId } = req.expenseDispense;
            const expenseRes = await expenseService.getExpense({
                expense: {
                    id: expenseId,
                }
            });
            if (!expenseRes || !expenseRes.expense) {
                throw new Error("Expense not found");
            }

            const expense = expenseRes.expense;

            if (expense && !expense.dispenseStaffIds.includes(createdById)) {
                throw new Error("Staff not authorized to dispense this expense");
            }

            const transaction = await transactionService.addTransaction({
                transaction: {
                    transactionType: "expense",
                    amountPaid,
                    narration,
                    createdById,
                    expenseId,
                }
            });

            return  transaction || undefined;
        },
        async approveExpenseDispense(req: {
            expenseId: string;
            addToExpenseList?: boolean;
        }): Promise<EntityResponse<Transaction, "transaction"> | null> {
            const { expenseId, addToExpenseList = false } = req;
            const expenseRes = await expenseService.getExpense({
                expense: {
                    id: expenseId,
                }
            });
            if (!expenseRes || !expenseRes.expense) {
                throw new Error("Expense not found");
            }
            const expense = expenseRes.expense;

            if (expense.expenseType !== "staffRequest") {
                throw new Error("Only staff requested expenses can be approved for dispense");
            }
            const transaction = await this.dispenseExpense({
                expenseDispense: {
                    expenseId,
                    amountPaid: expense.amount, 
                    narration: expense.narration || "Approved expense dispense",
                    createdById: expense.createdById, 
                }
            });
            if(addToExpenseList) {
                await expenseService.updateExpense({
                    expenseId,
                    expense: {
                        expenseType: "operation",
                    },
                });
            }
            return transaction || null;
        },
    });
}

export type ExpenseDispenseService = ReturnType<typeof createExpenseDispenseService>;