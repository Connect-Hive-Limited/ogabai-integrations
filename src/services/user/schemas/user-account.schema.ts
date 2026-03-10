import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const userAccountSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getUserAccount",
        variables: "($userAccount: UserAccountInput!)",
        field: "(userAccount: $userAccount)",
    },
    list: {
        operation: "query",
        name: "getUserAccounts",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $userAccount: UserAccountInput, $userAccountIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, userAccount: $userAccount, userAccountIds: $userAccountIds)",
    },
    create: {
        operation: "mutation",
        name: "createUserAccount",
        variables: "($userAccount: UserAccountInput!)",
        field: "(userAccount: $userAccount)",
    },
    update: {
        operation: "mutation",
        name: "updateUserAccount",
        variables: "($userAccountId: String!, $userAccount: UserAccountInput!)",
        field: "(userAccountId: $userAccountId, userAccount: $userAccount)",
    },
    delete: {
        operation: "mutation",
        name: "removeUserAccount",
        variables: "($userAccountId: String!)",
        field: "(userAccountId: $userAccountId)",
    },
}