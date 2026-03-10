import { UserRoleCRUD, userRoleDeleteIntegration, userRoleIntegration, userRoleListIntegration } from "./types/user-role.type";
import { GraphQLClient } from "../../client";
import { userRoleSchema } from "./schemas/user-role.schema";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";

export const createUserRoleService = (client: GraphQLClient) =>  ({
    createUserRole: createOperationExecutor<
        "createUserRole",
        UserRoleCRUD["CreateRequest"],
        UserRoleCRUD["CreateResponse"],
        typeof userRoleIntegration.create.nestedFields
    >(
        client,
        "createUserRole",
        {
            schema: buildSchema(userRoleSchema.create),
            defaultRootFields: userRoleIntegration.create.responseFields,
            defaultNestedFields: userRoleIntegration.create.nestedFields,
        }
    ),
    updateUserRole: createOperationExecutor<
        "updateUserRole",
        UserRoleCRUD["UpdateRequest"],
        UserRoleCRUD["UpdateResponse"],
        typeof userRoleIntegration.update.nestedFields
    >(
        client,
        "updateUserRole",
        {
            schema: buildSchema(userRoleSchema.update),
            defaultRootFields: userRoleIntegration.update.responseFields,
            defaultNestedFields: userRoleIntegration.update.nestedFields,
        }
    ),
    getUserRole: createOperationExecutor<
        "getUserRole",
        UserRoleCRUD["GetRequest"],
        UserRoleCRUD["GetResponse"],
        typeof userRoleIntegration.get.nestedFields
    >(
        client,
        "getUserRole",
        {
            schema: buildSchema(userRoleSchema.get),
            defaultRootFields: userRoleIntegration.get.responseFields,
            defaultNestedFields: userRoleIntegration.get.nestedFields,
        }
    ),
    removeUserRole: createOperationExecutor<
        "removeUserRole",
        UserRoleCRUD["DeleteRequest"],
        UserRoleCRUD["DeleteResponse"],
        {}
    >(
        client,
        "removeUserRole",
        {
            schema: buildSchema(userRoleSchema.delete),
            defaultRootFields: userRoleDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    getUserRoles: createOperationExecutor<
        "getUserRoles",
        UserRoleCRUD["ListRequest"],
        UserRoleCRUD["ListResponse"],
        typeof userRoleListIntegration.nestedFields
    >(
        client,
        "getUserRoles",
        {
            schema: buildSchema(userRoleSchema.list),
            defaultRootFields: [...userRoleListIntegration.responseFields],
            defaultNestedFields: userRoleListIntegration.nestedFields,
        }
    ),
    
})

export type UserRoleService = ReturnType<typeof createUserRoleService>;