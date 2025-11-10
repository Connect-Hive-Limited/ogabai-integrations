import { beforeAll, describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
import { initTestEnv } from "./testEnv";
import { createFileService } from "../src/services/file/file.service";
import { createProductService } from "../src/services/inventory/product.service";
import { getProduct } from "./dummy";
import { Product } from "../src/types";

interface TestUploadResponse {
  product: Product;
}

describe.sequential("File Upload API", () => {
    let fileService: ReturnType<typeof createFileService>;
    let productService: ReturnType<typeof createProductService>;
    let env: Awaited<ReturnType<typeof initTestEnv>>;
    let productId: string;
    let uploadedUrl: string | undefined;

    beforeAll(async () => {
        env = await initTestEnv();
        fileService = createFileService(env?.storeClient!);
        productService = createProductService(env?.storeClient!);

        const product = getProduct(env?.storeId || "");
        const res = await productService.addProduct({
            product,
            imageTypes: ["image/jpeg", "image/png"],
        });
        expect(res?.product).not.toBeNull();
        productId = res?.product?._id || "";
    });

    it("should upload a real image file from disk", async () => {
        const testImagePath = path.resolve(__dirname, "assets/test-image.jpg");
        const formData = new FormData();
        formData.append("productId", productId);
        formData.append("storeId", env?.storeId || "");
        // formData.append("file", fs.createReadStream(testImagePath));
        formData.append("file", new Blob([fs.readFileSync(testImagePath)], { type: "image/jpeg" }), "test-image.jpg");

        const updateProduct = await productService.uploadProductImage(formData as any);

        expect(updateProduct).toBeDefined();
        expect(updateProduct?.images?.length).toBeGreaterThan(0);
        uploadedUrl = updateProduct?.images?.[0];
        console.log("Uploaded file URL:", uploadedUrl);
    });

    it("should return a valid public file URL", async () => {
        expect(uploadedUrl).toBeDefined();
        expect(uploadedUrl).toMatch(/^https:\/\/storage\.googleapis\.com\//);
    });

    it("should reject a non-image file", async () => {
        const testTextPath = path.resolve(__dirname, "assets/test-text.txt");
        const formData = new FormData();
        formData.append("productId", productId);
        formData.append("file", fs.createReadStream(testTextPath) as any);

        await expect(
            await productService.uploadProductImage(formData as any)
        ).rejects.toThrow(/File upload failed/i);
    });
});
