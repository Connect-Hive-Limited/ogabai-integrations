import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { UserAccount } from "../../../types";
import { storeQuery } from "../../inventory/entities";
import { privilegeQuery, userAccountQuery } from "../user.entity";

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
      privileges: privilegeQuery,
    },
  });


export const userAccountListIntegration =
  createListIntegration({
    key: "userAccounts",
    fields: userAccountQuery,
    nested: {
      privileges: privilegeQuery,
      userAccount: userAccountQuery,
      store: storeQuery,
    }
  });

export const userAccountDeleteIntegration =
  createDeleteIntegration(ENTITY);
