import { DefaultSchemaFields, SchemaConfig } from "@chijioke/graphql-client";


export const expenseCategorySchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getExpenseCategory",
        variables: "($expenseCategory: ExpenseCategoryInput!)",
        field: "(expenseCategory: $expenseCategory)",
    },
    list: {
        operation: "query",
        name: "getExpenseCategories",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $expenseCategory: ExpenseCategoryInput, $expenseCategoryIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, expenseCategory: $expenseCategory, expenseCategoryIds: $expenseCategoryIds)",
    },
    create: {
        operation: "mutation",
        name: "createExpenseCategory",
        variables: "($expenseCategory: ExpenseCategoryInput!)",
        field: "(expenseCategory: $expenseCategory)",
    },
    update: {
        operation: "mutation",
        name: "updateExpenseCategory",
        variables: "($expenseCategoryId: String!, $expenseCategory: ExpenseCategoryInput!)",
        field: "(expenseCategoryId: $expenseCategoryId, expenseCategory: $expenseCategory)",
    },
    delete: {
        operation: "mutation",
        name: "deleteExpenseCategory",
        variables: "($expenseCategoryId: String!)",
        field: "(expenseCategoryId: $expenseCategoryId)",
    },
}