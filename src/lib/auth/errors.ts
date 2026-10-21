export function mapAuthError(message: string, intent: "signin" | "signup", code?: string) {
  const text = `${code ?? ""} ${message}`.toLowerCase()
  if (text.includes("email_address_invalid") || (text.includes("address") && text.includes("invalid"))) {
    return "Cette adresse e-mail n'est pas acceptée. Utilisez une adresse personnelle réelle."
  }
  if (text.includes("invalid login") || text.includes("invalid credentials")) {
    return "E-mail ou mot de passe incorrect."
  }
  if (text.includes("email not confirmed")) {
    return "Le compte existe. Ouvrez le lien reçu par e-mail avant de vous connecter. Regardez aussi les courriers indésirables."
  }
  if (text.includes("error sending confirmation") || text.includes("over_email_send_rate_limit")) {
    return "Trop d'e-mails envoyés. Attendez une heure, ou désactivez la confirmation d'e-mail dans Supabase pour tester."
  }
  if (text.includes("already registered") || text.includes("already been registered")) {
    return "Un compte existe déjà avec cet e-mail."
  }
  if (text.includes("rate limit") || text.includes("too many")) {
    return "Trop de tentatives. Réessayez dans quelques minutes."
  }
  if (text.includes("password")) {
    return "Le mot de passe doit contenir au moins 8 caractères."
  }
  return intent === "signup"
    ? "L'inscription n'a pas abouti. Réessayez."
    : "La connexion n'a pas abouti. Réessayez."
}
