import { EntityCRUD, ListEntityRequest, ListEntityResponse } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { Customer, SubscriptionTrial } from "../../../types";
import { customerQuery, customerStoreBalanceQuery } from "../user.entity";

const ENTITY = "customer" as const;

export type CustomerCRUD =
  EntityCRUD<Customer, typeof ENTITY> & {
    ListByStoreIdRequest: ListEntityRequest<Customer, typeof ENTITY> & {
      storeId: string;
    },
    DeleteFromStoreRequest: {
      customerId: string;
      storeId: string;
    }

    // response 
    ListByStoreIdResponse: ListEntityResponse<Customer, typeof ENTITY>,
    DeleteFromStoreResponse: {
      customerId: string;
      storeId: string;
    }
  }



export const customerIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: customerQuery,
    nested: {
      customerStoreBalance: customerStoreBalanceQuery,
    }
  });


export const customerListIntegration =
  createListIntegration({
    key: "customers",
    fields: customerQuery,
    nested: {
      customerStoreBalance: customerStoreBalanceQuery,
    }
  });

export const customerDeleteIntegration =
  createDeleteIntegration(ENTITY) 
