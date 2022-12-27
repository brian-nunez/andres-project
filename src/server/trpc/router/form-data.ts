import { z } from "zod";
import { v4 } from 'uuid';
import type { MyFormData } from "@prisma/client";

import { router, publicProcedure } from "../trpc";
import { dateOfBirthValidation, firstNameValidation, lastNameValidation, titleValidation } from "../../../utils/validations";

export const formDataRouter = router({
  getDataById: publicProcedure
    .input(z.object({
      id: z.string(),
    }))
    .query(async ({ input, ctx }) => {
      try {
        const data = await ctx.prisma.myFormData.findFirst({
          where: {
            id: input.id,
          },
        });

        return data;
      } catch (e) {
        // handle errors
      }
    }),
  savePage1: publicProcedure
    .input(z.object({
      firstName: firstNameValidation,
      lastName: lastNameValidation,
    }))
    .mutation(async ({ input, ctx }) => {
      try {
        const data = await ctx.prisma.myFormData.create({
          data: {
            id: v4(),
            firstName: input.firstName,
            lastName: input.lastName
          },
        }) as MyFormData;

        return { id: data.id };
      } catch (e) {
        // handle error
      }
    }),

  savePage2: publicProcedure
    .input(z.object({
      id: z.string(),
      firstName: firstNameValidation,
      lastName: lastNameValidation,
      dateOfBirth: dateOfBirthValidation,
    }))
    .mutation(async ({ input, ctx }) => {
      try {
        const data = await ctx.prisma.myFormData.update({
          where: {
            id: input.id,
          },
          data: {
            firstName: input.firstName,
            lastName: input.lastName,
            dateOfBirth: input.dateOfBirth,
          },
        }) as MyFormData;

        return { id: data.id };
      } catch (e) {
        // handle error
      }
    }),
  savePage3: publicProcedure
    .input(z.object({
      id: z.string(),
      firstName: firstNameValidation,
      lastName: lastNameValidation,
      dateOfBirth: dateOfBirthValidation,
      title: titleValidation,
    }))
    .mutation(async ({ input, ctx }) => {
      try {
        const data = await ctx.prisma.myFormData.update({
          where: {
            id: input.id,
          },
          data: {
            firstName: input.firstName,
            lastName: input.lastName,
            dateOfBirth: input.dateOfBirth,
            title: input.title,
          },
        }) as MyFormData;

        return { id: data.id };
      } catch (e) {
        // handle error
      }
    }),
});
