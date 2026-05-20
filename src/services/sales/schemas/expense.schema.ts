import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const expenseSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getExpense",
        variables: "($expense: ExpenseInput!)",
        field: "(expense: $expense)",
    },
    list: {
        operation: "query",
        name: "getExpenses",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $expense: ExpenseInput, $expenseIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, expense: $expense, expenseIds: $expenseIds)",
    },
    create: {
        operation: "mutation",
        name: "createExpense",
        variables: "($expense: ExpenseInput!)",
        field: "(expense: $expense)",
    },
    update: {
        operation: "mutation",
        name: "updateExpense",
        variables: "($expenseId: String!, $expense: ExpenseInput!)",
        field: "(expenseId: $expenseId, expense: $expense)",
    },
    delete: {
        operation: "mutation",
        name: "deleteExpense",
        variables: "($expenseId: String!)",
        field: "(expenseId: $expenseId)",
    },
}