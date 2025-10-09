export * from "./types";
export * from "./auth";
export * from "./errors";
export * from "./middleware";
export * from "./client";
export * from "./transport"
export { GraphQLClient } from "./client";
export * from "./services";

/* Example ready-to-use factory:
   export const createDefaultClient = (opts) => new GraphQLClient(opts);
*/
