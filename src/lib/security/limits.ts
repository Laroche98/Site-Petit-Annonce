export const LIMITS = {
  title: 80,
  description: 4000,
  message: 2000,
  bio: 500,
  city: 80,
  reportNote: 500,
  imagesPerListing: 10,
  imageMaxBytes: 5 * 1024 * 1024,
} as const

export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const

export const ACCEPTED_IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp"] as const
