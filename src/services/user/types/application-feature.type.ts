import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { ApplicationFeature } from "../../../types";
import { privilegeQuery, applicationFeatureQuery } from "../user.entity";

const ENTITY = "applicationFeature" as const;

export type ApplicationFeatureCRUD =
  EntityCRUD<ApplicationFeature, typeof ENTITY>;

export const applicationFeatureIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: applicationFeatureQuery,
  });


export const applicationFeatureListIntegration =
  createListIntegration({
    key: "applicationFeatures",
    fields: applicationFeatureQuery,
  });

export const applicationFeatureDeleteIntegration =
  createDeleteIntegration(ENTITY);
