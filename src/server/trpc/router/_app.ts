import { router } from "../trpc";
import { formDataRouter } from "./form-data";

export const appRouter = router({
  formData: formDataRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
