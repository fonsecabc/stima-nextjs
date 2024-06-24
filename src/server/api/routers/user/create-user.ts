import { passwordSchema } from "@/validations"
import { publicProcedure } from "@/server/api/trpc"

import { z } from "zod"
import { type User } from "@prisma/client"

export const createUser = publicProcedure
  .input(
    z.object({
      email: z.string().email(),
      password: passwordSchema,
    })
  ).mutation(async ({ input, ctx }) => {
    const user: User = await ctx.db.user.create({
      data: {
        email: input.email,
        password: input.password,
      },
    })

    return user
  })

