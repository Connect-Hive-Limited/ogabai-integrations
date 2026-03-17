import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { initTestEnv } from "../testEnv";
import { createApplicationFeatureService, ApplicationFeatureService } from "../../src/services/user/application-feature.service";

const chance = new Chance();

describe.sequential("ApplicationFeature API", () => {
    let applicationFeatureId: string;
    let applicationFeatureService: ApplicationFeatureService;


    beforeAll(async () => {
        const env = await initTestEnv();
        applicationFeatureId = env?.userId ?? ""
        applicationFeatureService = createApplicationFeatureService(env?.storeClient!);
    })

    it("should create applicationFeature", async () => {
        const res = await applicationFeatureService.createApplicationFeature({
            applicationFeature: {
                name: chance.name(),
            }
        })
        expect(res?.applicationFeature).not.toBeNull();
        applicationFeatureId = res?.applicationFeature?.id || "";
    })
    it("should get applicationFeature", async () => {
        const res = await applicationFeatureService.getApplicationFeature({
            applicationFeature: {
                id: applicationFeatureId
            }
        })
        expect(res?.applicationFeature?.id).toEqual(applicationFeatureId);
    })
    it("should update applicationFeature", async () => {
        const newLastName = chance.name();
        const res = await applicationFeatureService.updateApplicationFeature({
            applicationFeatureId,
            applicationFeature: {
                name: newLastName,
            }
        })
        expect(res?.applicationFeature?.id).toEqual(applicationFeatureId);
        expect(res?.applicationFeature.name).toEqual(newLastName);
    })

    // list applicationFeatures 
    it("should list applicationFeatures", async() => {
        const res = await applicationFeatureService.getApplicationFeatures({
            applicationFeature: {
                id: applicationFeatureId
            },
            limit: 100,
            skip: 0
        })
        expect(res?.applicationFeatures.length).greaterThan(0);
    })

})