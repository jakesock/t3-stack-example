import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "@/env/server.mjs";
import { appRouter } from "@/server/api/root";
import { createInternalTrpcContext } from "@/server/api/trpc";

export default createNextApiHandler({
  router: appRouter,
  createContext: createInternalTrpcContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(`❌ tRPC failed on ${path}: ${error}`);
        }
      : undefined,
});
