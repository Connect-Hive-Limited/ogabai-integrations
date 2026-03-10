import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { UserRole } from "../../../types";
import { privilegeQuery, userRoleQuery } from "../user.entity";

const ENTITY = "userRole" as const;

export type UserRoleCRUD =
  EntityCRUD<UserRole, typeof ENTITY>;

export const userRoleIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: userRoleQuery,
    nested: {
      privileges: privilegeQuery,
    },
  });


export const userRoleListIntegration =
  createListIntegration({
    key: "userRoles",
    fields: userRoleQuery,
    nested: {
      privileges: privilegeQuery,
    }
  });

export const userRoleDeleteIntegration =
  createDeleteIntegration(ENTITY);
