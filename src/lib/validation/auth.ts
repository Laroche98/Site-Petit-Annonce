import { z } from "zod"

export const signInSchema = z.object({
  email: z.string().trim().email("Indiquez un e-mail valide.").max(160),
  password: z.string().min(8, "8 caractères minimum.").max(72),
})

export const signUpSchema = signInSchema.extend({
  fullName: z.string().trim().min(2, "Indiquez votre nom.").max(80),
  city: z.string().trim().min(2, "Indiquez votre ville.").max(80),
})

export const profileSchema = z.object({
  fullName: z.string().trim().min(2, "Indiquez votre nom.").max(80),
  city: z.string().trim().min(2, "Indiquez votre ville.").max(80),
  bio: z.string().trim().max(500, "500 caractères maximum."),
})

export type SignInValues = z.infer<typeof signInSchema>
export type SignUpValues = z.infer<typeof signUpSchema>
export type ProfileValues = z.infer<typeof profileSchema>
