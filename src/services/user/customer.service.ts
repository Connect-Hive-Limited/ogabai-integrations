import { GraphQLClient } from "../../client";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";
import { CustomerCRUD, customerDeleteIntegration, customerIntegration, customerListIntegration } from "./types/customer.type";
import { customerSchema } from "./schemas/customer.schema";

export const createCustomerService = (client: GraphQLClient) =>  ({
    createCustomer: createOperationExecutor<
        "createCustomer",
        CustomerCRUD["CreateRequest"],
        CustomerCRUD["CreateResponse"],
        typeof customerIntegration.create.nestedFields
    >(
        client,
        "createCustomer",
        {
            schema: buildSchema(customerSchema.create),
            defaultRootFields: customerIntegration.create.responseFields,
            defaultNestedFields: customerIntegration.create.nestedFields,
        }
    ),
    updateCustomer: createOperationExecutor<
        "updateCustomer",
        CustomerCRUD["UpdateRequest"],
        CustomerCRUD["UpdateResponse"],
        typeof customerIntegration.update.nestedFields
    >(
        client,
        "updateCustomer",
        {
            schema: buildSchema(customerSchema.update),
            defaultRootFields: customerIntegration.update.responseFields,
            defaultNestedFields: customerIntegration.update.nestedFields,
        }
    ),
    getCustomer: createOperationExecutor<
        "getCustomer",
        CustomerCRUD["GetRequest"],
        CustomerCRUD["GetResponse"],
        typeof customerIntegration.get.nestedFields
    >(
        client,
        "getCustomer",
        {
            schema: buildSchema(customerSchema.get),
            defaultRootFields: customerIntegration.get.responseFields,
            defaultNestedFields: customerIntegration.get.nestedFields,
        }
    ),
    // only for admin
    deleteCustomer: createOperationExecutor<
        "deleteCustomer",
        CustomerCRUD["DeleteRequest"],
        CustomerCRUD["DeleteResponse"],
        {}
    >(
        client,
        "deleteCustomer",
        {
            schema: buildSchema(customerSchema.delete),
            defaultRootFields: customerDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    // only admin
    getCustomers: createOperationExecutor<
        "getCustomers",
        CustomerCRUD["ListRequest"],
        CustomerCRUD["ListResponse"],
        typeof customerListIntegration.nestedFields
    >(
        client,
        "getCustomers",
        {
            schema: buildSchema(customerSchema.list),
            defaultRootFields: [...customerListIntegration.responseFields],
            defaultNestedFields: customerListIntegration.nestedFields,
        }
    ),
    getCustomersByStoreId: createOperationExecutor<
        "getCustomersByStoreId",
        CustomerCRUD["ListByStoreIdRequest"],
        CustomerCRUD["ListByStoreIdResponse"],
        typeof customerListIntegration.nestedFields
    >(
        client,
        "getCustomersByStoreId",
        {
            schema: buildSchema(customerSchema.listByStoreId),
            defaultRootFields: [...customerListIntegration.responseFields],
            defaultNestedFields: customerListIntegration.nestedFields,
        }
    ),
    deleteFromStore: createOperationExecutor<
        "deleteFromStore",
        CustomerCRUD["DeleteFromStoreRequest"],
        CustomerCRUD["DeleteFromStoreResponse"],
        {}
    >(
        client,
        "deleteFromStore",
        {
            schema: buildSchema(customerSchema.deleteFromStore),
            defaultRootFields: [...customerDeleteIntegration.responseFields, "storeId"],
            defaultNestedFields: {},
        }
    ),
    
})

export type CustomerService = ReturnType<typeof createCustomerService>;