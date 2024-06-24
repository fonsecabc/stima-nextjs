import { z } from "zod"

export const passwordSchema = z.string().min(8).refine((value: string) => {
  const hasUppercase = /[A-Z]/.test(value)
  const hasLowercase = /[a-z]/.test(value)
  const hasNumber = /[0-9]/.test(value)
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value)

  return hasUppercase && hasLowercase && hasNumber && hasSpecial
}, {
  message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
})
