import { initTRPC, type inferAsyncReturnType } from "@trpc/server";
import superjson from "superjson";
import { prisma } from "../db";

export const createInternalTrpcContext = async () => {
  return {
    prisma,
  };
};

const t = initTRPC.context<inferAsyncReturnType<typeof createInternalTrpcContext>>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const createTrpcRouter = t.router;
export const publicProcedure = t.procedure;
