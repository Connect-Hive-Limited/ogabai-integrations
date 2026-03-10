import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const userRoleSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getUserRole",
        variables: "($userRole: UserRoleInput!)",
        field: "(userRole: $userRole)",
    },
    list: {
        operation: "query",
        name: "getUserRoles",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $userRole: UserRoleInput, $userRoleIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, userRole: $userRole, userRoleIds: $userRoleIds)",
    },
    create: {
        operation: "mutation",
        name: "createUserRole",
        variables: "($userRole: UserRoleInput!)",
        field: "(userRole: $userRole)",
    },
    update: {
        operation: "mutation",
        name: "updateUserRole",
        variables: "($userRoleId: String!, $userRole: UserRoleInput!)",
        field: "(userRoleId: $userRoleId, userRole: $userRole)",
    },
    delete: {
        operation: "mutation",
        name: "removeUserRole",
        variables: "($userRoleId: String!)",
        field: "(userRoleId: $userRoleId)",
    },
}