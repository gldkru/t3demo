import { createTRPCRouter } from "@/server/api/trpc";
import { workoutListRouter } from "@/server/api/routers/workoutList";
// import { exampleRouter } from "@/server/api/routers/example";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  workoutList: workoutListRouter,
  // example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
