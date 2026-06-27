import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration, EntityCRUD } from "@chijioke/graphql-client";
import { Expense } from "../../../types";
import { expenseQuery } from "../sale.entity";

const ENTITY = "expense" as const;

export type ExpenseCRUD =
  EntityCRUD<Expense, typeof ENTITY>;

export const expenseIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: expenseQuery,
    nested: {
        features: expenseQuery
    }
  });


export const expenseListIntegration =
  createListIntegration({
    key: ENTITY,
    fields: expenseQuery,
    nested: {
        features: expenseQuery
    }
  });

export const expenseDeleteIntegration =
  createDeleteIntegration(ENTITY);
