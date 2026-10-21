const TAGS = /<[^>]*>/g

export function sanitizeText(input: string, maxLength: number) {
  return input.replace(TAGS, "").replace(/\s+/g, " ").trim().slice(0, maxLength)
}
