import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const customerSchema:Record<DefaultSchemaFields | "listByStoreId" | "deleteFromStore", SchemaConfig> = {
    get: {
        operation: "query",
        name: "getCustomer",
        variables: "($customer: CustomerInput!)",
        field: "(customer: $customer)",
    },
    list: {
        operation: "query",
        name: "getCustomers",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $customer: CustomerInput, $customerIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, customer: $customer, customerIds: $customerIds)",
    },
    create: {
        operation: "mutation",
        name: "createCustomer",
        variables: "($customer: CustomerInput!)",
        field: "(customer: $customer)",
    },
    update: {
        operation: "mutation",
        name: "updateCustomer",
        variables: "($customerId: String!, $customer: CustomerInput!)",
        field: "(customerId: $customerId, customer: $customer)",
    },
    delete: {
        operation: "mutation",
        name: "deleteCustomer",
        variables: "($customerId: String!)",
        field: "(customerId: $customerId)",
    },

    
    // important to have this separate from the general list query to avoid confusion and potential bugs with the storeId variable
    listByStoreId: {
        operation: "query",
        name: "getCustomersByStoreId",
        variables:
            "($limit: Int!, $skip: Int!, $storeId: String!, $search: String, $customer: CustomerInput, $customerIds: [String])",
        field:
            "(limit: $limit, skip: $skip, storeId: $storeId, search: $search, customer: $customer, customerIds: $customerIds)",
    },
    deleteFromStore: {
        operation: "mutation",
        name: "deleteCustomerFromStore",
        variables: "($customerId: String!, $storeId: String!)",
        field: "(customerId: $customerId, storeId: $storeId)",
    }
}