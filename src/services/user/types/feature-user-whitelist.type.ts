import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { FeatureUserWhitelist } from "../../../types";
import { featureUserWhitelistQuery } from "../user.entity";

const ENTITY = "featureUserWhitelist" as const;
export type FeatureUserWhitelistCRUD = EntityCRUD<FeatureUserWhitelist, typeof ENTITY>;

export const featureUserWhitelistIntegration =
    createStandardEntityIntegration({
        key: ENTITY,
        fields: featureUserWhitelistQuery,
    });

export const featureUserWhitelistListIntegration =
    createListIntegration({
        key: ENTITY,
        fields: featureUserWhitelistQuery,
    });
    
export const featureUserWhitelistDeleteIntegration =
    createDeleteIntegration(ENTITY);