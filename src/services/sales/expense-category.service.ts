import { GraphQLClient } from "../../client";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";
import { ExpenseCategoryCRUD, expenseCategoryDeleteIntegration, expenseCategoryIntegration, expenseCategoryListIntegration } from "./types/expense-category.type";
import { expenseCategorySchema } from "./schemas/expense-category.schema";

export const createExpenseCategoryService = (client: GraphQLClient) =>  ({
    createExpenseCategory: createOperationExecutor<
        "createExpenseCategory",
        ExpenseCategoryCRUD["CreateRequest"],
        ExpenseCategoryCRUD["CreateResponse"],
        typeof expenseCategoryIntegration.create.nestedFields
    >(
        client,
        "createExpenseCategory",
        {
            schema: buildSchema(expenseCategorySchema.create),
            defaultRootFields: expenseCategoryIntegration.create.responseFields,
            defaultNestedFields: expenseCategoryIntegration.create.nestedFields,
        }
    ),
    updateExpenseCategory: createOperationExecutor<
        "updateExpenseCategory",
        ExpenseCategoryCRUD["UpdateRequest"],
        ExpenseCategoryCRUD["UpdateResponse"],
        typeof expenseCategoryIntegration.update.nestedFields
    >(
        client,
        "updateExpenseCategory",
        {
            schema: buildSchema(expenseCategorySchema.update),
            defaultRootFields: expenseCategoryIntegration.update.responseFields,
            defaultNestedFields: expenseCategoryIntegration.update.nestedFields,
        }
    ),
    getExpenseCategory: createOperationExecutor<
        "getExpenseCategory",
        ExpenseCategoryCRUD["GetRequest"],
        ExpenseCategoryCRUD["GetResponse"],
        typeof expenseCategoryIntegration.get.nestedFields
    >(
        client,
        "getExpenseCategory",
        {
            schema: buildSchema(expenseCategorySchema.get),
            defaultRootFields: expenseCategoryIntegration.get.responseFields,
            defaultNestedFields: expenseCategoryIntegration.get.nestedFields,
        }
    ),
    deleteExpenseCategory: createOperationExecutor<
        "deleteExpenseCategory",
        ExpenseCategoryCRUD["DeleteRequest"],
        ExpenseCategoryCRUD["DeleteResponse"],
        {}
    >(
        client,
        "deleteExpenseCategory",
        {
            schema: buildSchema(expenseCategorySchema.delete),
            defaultRootFields: expenseCategoryDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    getExpenseCategorys: createOperationExecutor<
        "getExpenseCategorys",
        ExpenseCategoryCRUD["ListRequest"],
        ExpenseCategoryCRUD["ListResponse"],
        typeof expenseCategoryListIntegration.nestedFields
    >(
        client,
        "getExpenseCategorys",
        {
            schema: buildSchema(expenseCategorySchema.list),
            defaultRootFields: [...expenseCategoryListIntegration.responseFields],
            defaultNestedFields: expenseCategoryListIntegration.nestedFields,
        }
    ),
    
})

export type ExpenseCategoryService = ReturnType<typeof createExpenseCategoryService>;