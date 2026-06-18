import { beforeAll, describe, expect, it } from "vitest";
import { initTestEnv } from "../testEnv";
import { createFeatureUserWhitelistService, FeatureUserWhitelistService } from "../../src";

describe.sequential("Feature User Whitelist API", () => {
    let featureUserWhitelistService: FeatureUserWhitelistService;
    let featureUserWhitelistId: string;
    let env: Awaited<ReturnType<typeof initTestEnv>>;
    beforeAll(async() => {
        env = await initTestEnv()
        const storeClient = env?.storeClient!
        featureUserWhitelistService = createFeatureUserWhitelistService(storeClient);
    });
    it("should create feature user whitelist", async () => {
        const res = await featureUserWhitelistService.createFeatureUserWhitelist({
            featureUserWhitelist: {
                appFeatures: ["feature1", "feature2"],
                userId: env?.userId!
            }
        })
        expect(res?.featureUserWhitelist).not.toBeNull();
        expect(res?.featureUserWhitelist?.id).not.toBe("");
        featureUserWhitelistId = res?.featureUserWhitelist?.id || "";
    })
    it("should update feature user whitelist", async () => {
        if(!featureUserWhitelistId) throw new Error("featureUserWhitelistId is not defined");
        const res = await featureUserWhitelistService.updateFeatureUserWhitelist({
            featureUserWhitelistId,
            featureUserWhitelist: {
                appFeatures: ["feature1", "feature3"],
                userId: env?.userId!
            }
        })
        expect(res?.featureUserWhitelist).not.toBeNull();
        expect(res?.featureUserWhitelist?.id).not.toBe("");
    })
    it("should get feature user whitelist", async () => {
        if(!featureUserWhitelistId) throw new Error("featureUserWhitelistId is not defined");
        const res = await featureUserWhitelistService.getFeatureUserWhitelist({
            featureUserWhitelist: {
                id: featureUserWhitelistId
            }
        })
        expect(res?.featureUserWhitelist).not.toBeNull();
        expect(res?.featureUserWhitelist?.id).not.toBe("");
    })
    it("should list feature user whitelists", async () => {
        const res = await featureUserWhitelistService.listFeatureUserWhitelists({
            limit: 1,
            skip: 0,
        })
        expect(res?.featureUserWhitelists.length).greaterThan(0);
        expect(res?.total).greaterThan(0);
    })
    it("should delete feature user whitelist", async () => {
        if(!featureUserWhitelistId) throw new Error("featureUserWhitelistId is not defined");
        const res = await featureUserWhitelistService.deleteFeatureUserWhitelist({
            featureUserWhitelistId
        })
        expect(res?.featureUserWhitelistId).not.toBe("");
    })
})