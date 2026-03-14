import { ApplicationFeatureCRUD, applicationFeatureDeleteIntegration, applicationFeatureIntegration, applicationFeatureListIntegration } from "./types/application-feature.type";
import { GraphQLClient } from "../../client";
import { applicationFeatureSchema } from "./schemas/application-feature.schema";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";

export const createApplicationFeatureService = (client: GraphQLClient) =>  ({
    createApplicationFeature: createOperationExecutor<
        "createApplicationFeature",
        ApplicationFeatureCRUD["CreateRequest"],
        ApplicationFeatureCRUD["CreateResponse"],
        typeof applicationFeatureIntegration.create.nestedFields
    >(
        client,
        "createApplicationFeature",
        {
            schema: buildSchema(applicationFeatureSchema.create),
            defaultRootFields: applicationFeatureIntegration.create.responseFields,
            defaultNestedFields: applicationFeatureIntegration.create.nestedFields,
        }
    ),
    updateApplicationFeature: createOperationExecutor<
        "updateApplicationFeature",
        ApplicationFeatureCRUD["UpdateRequest"],
        ApplicationFeatureCRUD["UpdateResponse"],
        typeof applicationFeatureIntegration.update.nestedFields
    >(
        client,
        "updateApplicationFeature",
        {
            schema: buildSchema(applicationFeatureSchema.update),
            defaultRootFields: applicationFeatureIntegration.update.responseFields,
            defaultNestedFields: applicationFeatureIntegration.update.nestedFields,
        }
    ),
    getApplicationFeature: createOperationExecutor<
        "getApplicationFeature",
        ApplicationFeatureCRUD["GetRequest"],
        ApplicationFeatureCRUD["GetResponse"],
        typeof applicationFeatureIntegration.get.nestedFields
    >(
        client,
        "getApplicationFeature",
        {
            schema: buildSchema(applicationFeatureSchema.get),
            defaultRootFields: applicationFeatureIntegration.get.responseFields,
            defaultNestedFields: applicationFeatureIntegration.get.nestedFields,
        }
    ),
    removeApplicationFeature: createOperationExecutor<
        "removeApplicationFeature",
        ApplicationFeatureCRUD["DeleteRequest"],
        ApplicationFeatureCRUD["DeleteResponse"],
        {}
    >(
        client,
        "removeApplicationFeature",
        {
            schema: buildSchema(applicationFeatureSchema.delete),
            defaultRootFields: applicationFeatureDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    getApplicationFeatures: createOperationExecutor<
        "getApplicationFeatures",
        ApplicationFeatureCRUD["ListRequest"],
        ApplicationFeatureCRUD["ListResponse"],
        typeof applicationFeatureListIntegration.nestedFields
    >(
        client,
        "getApplicationFeatures",
        {
            schema: buildSchema(applicationFeatureSchema.list),
            defaultRootFields: [...applicationFeatureListIntegration.responseFields],
            defaultNestedFields: applicationFeatureListIntegration.nestedFields,
        }
    ),
    
})

export type ApplicationFeatureService = ReturnType<typeof createApplicationFeatureService>;