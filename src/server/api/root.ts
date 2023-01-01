import { groceryListRouter } from "./routers/grocery-list-router";
import { createTrpcRouter } from "./trpc";

export const appRouter = createTrpcRouter({
  groceryList: groceryListRouter,
});

export type AppRouter = typeof appRouter;
