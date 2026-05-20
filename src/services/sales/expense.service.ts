import { GraphQLClient } from "../../client";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";
import { ExpenseCRUD, expenseDeleteIntegration, expenseIntegration, expenseListIntegration } from "./types/expense.type";
import { expenseSchema } from "./schemas/expense.schema";

export const createExpenseService = (client: GraphQLClient) =>  ({
    createExpense: createOperationExecutor<
        "createExpense",
        ExpenseCRUD["CreateRequest"],
        ExpenseCRUD["CreateResponse"],
        typeof expenseIntegration.create.nestedFields
    >(
        client,
        "createExpense",
        {
            schema: buildSchema(expenseSchema.create),
            defaultRootFields: expenseIntegration.create.responseFields,
            defaultNestedFields: expenseIntegration.create.nestedFields,
        }
    ),
    updateExpense: createOperationExecutor<
        "updateExpense",
        ExpenseCRUD["UpdateRequest"],
        ExpenseCRUD["UpdateResponse"],
        typeof expenseIntegration.update.nestedFields
    >(
        client,
        "updateExpense",
        {
            schema: buildSchema(expenseSchema.update),
            defaultRootFields: expenseIntegration.update.responseFields,
            defaultNestedFields: expenseIntegration.update.nestedFields,
        }
    ),
    getExpense: createOperationExecutor<
        "getExpense",
        ExpenseCRUD["GetRequest"],
        ExpenseCRUD["GetResponse"],
        typeof expenseIntegration.get.nestedFields
    >(
        client,
        "getExpense",
        {
            schema: buildSchema(expenseSchema.get),
            defaultRootFields: expenseIntegration.get.responseFields,
            defaultNestedFields: expenseIntegration.get.nestedFields,
        }
    ),
    deleteExpense: createOperationExecutor<
        "deleteExpense",
        ExpenseCRUD["DeleteRequest"],
        ExpenseCRUD["DeleteResponse"],
        {}
    >(
        client,
        "deleteExpense",
        {
            schema: buildSchema(expenseSchema.delete),
            defaultRootFields: expenseDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    getExpenses: createOperationExecutor<
        "getExpenses",
        ExpenseCRUD["ListRequest"],
        ExpenseCRUD["ListResponse"],
        typeof expenseListIntegration.nestedFields
    >(
        client,
        "getExpenses",
        {
            schema: buildSchema(expenseSchema.list),
            defaultRootFields: [...expenseListIntegration.responseFields],
            defaultNestedFields: expenseListIntegration.nestedFields,
        }
    ),
    
})

export type ExpenseService = ReturnType<typeof createExpenseService>;