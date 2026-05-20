import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { ExpenseCategory } from "../../../types";
import { expenseCategoryQuery } from "../sale.entity";

const ENTITY = "expenseCategory" as const;

export type ExpenseCategoryCRUD =
  EntityCRUD<ExpenseCategory, typeof ENTITY>;

export const expenseCategoryIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: expenseCategoryQuery,
    nested: {
        features: expenseCategoryQuery
    }
  });


export const expenseCategoryListIntegration =
  createListIntegration({
    key: "expenseCategorys",
    fields: expenseCategoryQuery,
    nested: {
        features: expenseCategoryQuery
    }
  });

export const expenseCategoryDeleteIntegration =
  createDeleteIntegration(ENTITY);
