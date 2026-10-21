import { z } from "zod"
import { LIMITS } from "@/lib/security/limits"
import { sanitizeText } from "@/lib/security/text"

const cleaned = (max: number) =>
  z
    .string()
    .transform((value) => sanitizeText(value, max))

export const titleSchema = cleaned(LIMITS.title).pipe(
  z.string().min(8, "Le titre doit contenir au moins 8 caractères.").max(LIMITS.title),
)

export const descriptionSchema = cleaned(LIMITS.description).pipe(
  z
    .string()
    .min(20, "La description doit contenir au moins 20 caractères.")
    .max(LIMITS.description),
)

export const messageSchema = cleaned(LIMITS.message).pipe(
  z.string().min(1, "Écrivez un message.").max(LIMITS.message),
)

export const citySchema = cleaned(LIMITS.city).pipe(
  z.string().min(2, "Indiquez une ville.").max(LIMITS.city),
)
