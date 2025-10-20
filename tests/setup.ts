import { beforeAll, afterAll } from "vitest";


beforeAll(async () => {
  
});

afterAll(() => {
  console.log("All tests done.");
});


export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));