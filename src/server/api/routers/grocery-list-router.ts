import { createTrpcRouter, publicProcedure } from "../trpc";

import { z } from "zod";

export const groceryListRouter = createTrpcRouter({
  findAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.groceryList.findMany();
  }),
  insertOne: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.groceryList.create({
        data: { title: input.title },
      });
    }),
  updateOne: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string(),
        checked: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { id, ...rest } = input;

      return await ctx.prisma.groceryList.update({
        where: { id },
        data: { ...rest },
      });
    }),
  deleteAll: publicProcedure
    .input(
      z.object({
        ids: z.number().array(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { ids } = input;

      return await ctx.prisma.groceryList.deleteMany({
        where: { id: { in: ids } },
      });
    }),
});
