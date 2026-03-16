import { UserAccountCRUD, userAccountDeleteIntegration, userAccountIntegration, userAccountListIntegration } from "./types/user-account.type";
import { GraphQLClient } from "../../client";
import { userAccountSchema } from "./schemas/user-account.schema";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";

export const createUserAccountService = (client: GraphQLClient) =>  ({
    createUserAccount: createOperationExecutor<
        "createUserAccount",
        UserAccountCRUD["CreateRequest"],
        UserAccountCRUD["CreateResponse"] & { pin?: string },
        typeof userAccountIntegration.create.nestedFields
    >(
        client,
        "createUserAccount",
        {
            schema: buildSchema(userAccountSchema.create),
            defaultRootFields: [...userAccountIntegration.create.responseFields, "pin"],
            defaultNestedFields: userAccountIntegration.create.nestedFields,
        }
    ),
    updateUserAccount: createOperationExecutor<
        "updateUserAccount",
        UserAccountCRUD["UpdateRequest"],
        UserAccountCRUD["UpdateResponse"],
        typeof userAccountIntegration.update.nestedFields
    >(
        client,
        "updateUserAccount",
        {
            schema: buildSchema(userAccountSchema.update),
            defaultRootFields: userAccountIntegration.update.responseFields,
            defaultNestedFields: userAccountIntegration.update.nestedFields,
        }
    ),
    getUserAccount: createOperationExecutor<
        "getUserAccount",
        UserAccountCRUD["GetRequest"],
        UserAccountCRUD["GetResponse"],
        typeof userAccountIntegration.get.nestedFields
    >(
        client,
        "getUserAccount",
        {
            schema: buildSchema(userAccountSchema.get),
            defaultRootFields: userAccountIntegration.get.responseFields,
            defaultNestedFields: userAccountIntegration.get.nestedFields,
        }
    ),
    removeUserAccount: createOperationExecutor<
        "removeUserAccount",
        UserAccountCRUD["DeleteRequest"],
        UserAccountCRUD["DeleteResponse"],
        {}
    >(
        client,
        "removeUserAccount",
        {
            schema: buildSchema(userAccountSchema.delete),
            defaultRootFields: userAccountDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    getUserAccounts: createOperationExecutor<
        "getUserAccounts",
        UserAccountCRUD["ListRequest"],
        UserAccountCRUD["ListResponse"],
        typeof userAccountListIntegration.nestedFields
    >(
        client,
        "getUserAccounts",
        {
            schema: buildSchema(userAccountSchema.list),
            defaultRootFields: [...userAccountListIntegration.responseFields],
            defaultNestedFields: userAccountListIntegration.nestedFields,
        }
    ),
    
})

export type UserAccountService = ReturnType<typeof createUserAccountService>;