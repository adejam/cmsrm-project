import * as z from 'zod'

export const loginSchema = z.object({
    email: z.string().trim().min(1, {message:'Email field is required' }).email({message: 'Field must be a valid email'}).max(50),
    password: z.string(),
    redirectFrom: z.string().trim(),
  })

export const signupSchema = z.object({
  email: z.string().trim().min(1, {message:'Email field is required' }).email({message: 'Field must be a valid email'}).max(50),
  password: z.string().min(8).max(50),
  password_confirmation: z.string().min(8).max(50),
  redirectFrom: z.string().trim(),
})
.refine((data) => data.password === data.password_confirmation, {
  message: "Passwords do not match",
  path: ["password_confirmation"],
})
.refine((data) => data.password.length >= 8, {
  message: "Password must be at least 8 characters long",
  path: ["password"],
})
.refine((data) => data.password.length <= 50, {
  message: "Password must be at most 50 characters long",
  path: ["password"],
})
