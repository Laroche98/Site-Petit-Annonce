# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 15 (App Router) + TypeScript, Tailwind CSS, shadcn/ui, Lucide, React Hook Form, Zod, Supabase (Auth, PostgreSQL, Storage, Realtime), Zustand si un état global devient nécessaire. Déploiement prévu : Vercel + Supabase. Choix confirmé par le brief (PRD, TRD, consigne de Phase 0). Français uniquement.

## Users

- Particulier en Côte d'Ivoire : vend ou cherche un bien, veut publier gratuitement, trouver vite, contacter le vendeur.
- Professionnel immobilier, automobile ou boutique : veut publier beaucoup, être crédible (badge Pro), avoir une vitrine et discuter avec les clients.
- Administrateur : modère, active les comptes Pro à la main, gère utilisateurs et catégories.

## Product Purpose

Babideal est une plateforme de petites annonces pour le marché ivoirien. Elle doit être la plus soignée du marché local : publication simple, recherche claire, messagerie intégrée, confiance par le design et la modération. Succès MVP : publier en moins de deux minutes, chat fluide, mobile impeccable, chargement rapide sur 3G/4G, un pro peut être activé et mis en avant sans paiement en ligne.

## Positioning

Concurrent de CoinAfrique, dans l'esprit Leboncoin (clarté) et Vinted (esthétique). Gratuit pour les particuliers. Payant pour les professionnels, mais les abonnements Pro sont activés manuellement par l'admin dans cette version. Les transactions se font hors plateforme.

## Operating Context

Usage principalement mobile, souvent en 3G/4G. Parcours : chercher, ouvrir une annonce, contacter, ou publier. L'admin traite les signalements et active les comptes Pro. Documents de référence : `docs/01_PRD.md` à `docs/06_IMPLEMENTATION_PLAN.md`.

## Capabilities and Constraints

Confirmé pour le MVP : auth Supabase, profils, annonces avec photos, recherche et filtres, favoris, chat temps réel, signalements, statuts d'annonce, outils admin, badge Pro, vitrine, boost manuel, dashboard Pro simple.

Hors MVP : paiement en ligne (Wave, Orange Money, CinetPay), application native, avis et notes, livraison, escrow, multi-pays.

Sécurité non négociable : RLS sur toutes les tables, validation Zod, sanitization, uploads jpg/jpeg/png/webp max 5 Mo et 10 images, noms de fichiers non prédictibles, rate limiting, pas d'exposition publique d'email ou de téléphone sans consentement.

Décisions ouvertes : le projet Supabase n'est pas encore créé (URL et clés à fournir). Auth téléphone et Google sont souhaitées « si possible », pas bloquantes pour le socle email. Le nom Babideal est un nom de travail. Le schéma SQL de `docs/05_BACKEND_SCHEMA.md` n'est pas appliqué tant qu'il n'est pas confirmé.

## Brand Commitments

Nom de travail : Babideal. Voix : française, claire, sérieuse, chaleureuse, sans jargon marketing. Contraintes visuelles fixées par le brief (à respecter, non étendues ici) : navy / bleu profond, accent orange / corail, mobile-first, cartes d'annonces à grande photo, prix visible, badge Pro élégant. Références nommées : Leboncoin, Vinted, Linear, Vercel. Le document `docs/04_UI_UX_DESIGN.md` fait foi.

## Evidence on Hand

Spécifications dans `docs/`. Aucun logo, aucune photo réelle, aucun témoignage, aucun chiffre d'usage. Les annonces affichées pendant la Phase 0 sont des aperçus synthétiques et doivent être présentées comme tels.

## Product Principles

- La confiance se construit par la modération, le moindre privilège et un design soigné.
- Le particulier publie gratuitement ; le professionnel paie, mais pas en ligne dans cette version.
- Le mobile et les réseaux lents passent avant l'effet desktop.
- On ne livre pas une fonction qui « marche juste » : sécurité, modération, puis qualité visuelle.
- Aucune donnée sensible n'est publique sans consentement explicite.

## Accessibility & Inclusion

Niveau AA visé (contrastes, zones de clic larges, navigation clavier). Français uniquement pour le MVP.
