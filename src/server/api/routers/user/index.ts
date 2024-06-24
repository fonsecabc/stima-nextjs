import { createTRPCRouter } from "@/server/api/trpc"
import { createUser } from "@/server/api/routers/user/create-user"

export const userRouter = createTRPCRouter({
  create: createUser,
})
