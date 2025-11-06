import { beforeAll, describe, expect, it } from "vitest";
import { createReadStream } from "fs";
import path from "path";
import FormData from "form-data";
import { initTestEnv } from "./testEnv";
import { createFileService } from "../src/services/file/file.service";
import { createProductService } from "../src/services/inventory/product.service";
import { getProduct } from "./dummy";

// --- define generic upload types for this test
interface TestUploadInput {
  productId: string;
  storeId?: string;
  file: File | Blob;
}

interface TestUploadResponse {
  imageUrl?: string;
  productId?: string;
  success?: boolean;
}

// --- main test suite
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
    const product =  getProduct(env?.storeId || "")
        const res = await productService.addProduct({
            product,
            imageTypes: ["image/jpeg", "image/png"],
        })
        expect(res?.product).not.toBeNull();
        productId = res?.product?._id || "";
    });

  it("should upload a real image file from disk", async () => {
    const testImagePath = path.resolve(__dirname, "assets/test-image.jpg");

    // Read file from disk (Node doesn't have `File`, so we wrap Blob or FormData)
    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("file", createReadStream(testImagePath));

    // Upload through file service (using the generic method)
    const res = await fileService.uploadFile<FormData, TestUploadResponse>(formData);

    expect(res).toBeDefined();
    expect(res?.imageUrl).toBeTruthy();

    uploadedUrl = res.imageUrl;
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
    formData.append("file", createReadStream(testTextPath));

    await expect(
      fileService.uploadFile<FormData, TestUploadResponse>(formData)
    ).rejects.toThrow(/File upload failed/i);
  });
});
