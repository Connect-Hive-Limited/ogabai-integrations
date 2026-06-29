import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { UserAccount } from "../../../types";
import { addressQuery, storeQuery } from "../../inventory/inventory.entities";
import { privilegeQuery, userAccountQuery, userQuery, userRoleQuery } from "../user.entity";

const ENTITY = "userAccount" as const;

export type UserAccountCRUD =
  EntityCRUD<UserAccount, typeof ENTITY>;

  
export const userAccountIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: userAccountQuery,
    nested: {
      userAccount: userAccountQuery,
      store: storeQuery,
      address: addressQuery,
      privileges: privilegeQuery,
      user: userQuery,
      userRole: userRoleQuery,
    },
  });


export const userAccountListIntegration =
  createListIntegration({
    key: ENTITY,
    fields: userAccountQuery,
    nested: {
      userAccount: userAccountQuery,
      store: storeQuery,
      address: addressQuery,
      privileges: privilegeQuery,
      user: userQuery,
      userRole: userRoleQuery,
    }
  });

export const userAccountDeleteIntegration =
  createDeleteIntegration(ENTITY);
