# 06 - IMPLEMENTATION PLAN
## Plateforme de Petites Annonces - Côte d'Ivoire

**Objectif :** Construire le MVP de façon ordonnée avec Cursor + agents IA.

---

### Phase 0 : Préparation (1-2 jours)

- [ ] Créer le projet Next.js 15 + TypeScript + Tailwind
- [ ] Installer shadcn/ui
- [ ] Configurer Supabase (projet + Auth + Database + Storage)
- [ ] Mettre en place la structure de dossiers propre
- [ ] Configurer les variables d’environnement
- [ ] Créer le design system de base (couleurs, typo, composants UI)

---

### Phase 1 : Fondations (Jours 1-5)

**Priorité absolue**

1. Authentification complète (Email + Téléphone si possible + Google)
2. Gestion des profils utilisateurs
3. Layout principal (Header + Footer + Navigation mobile)
4. Page d’accueil (structure)
5. Système de catégories

**Livrable :** On peut s’inscrire, se connecter, et naviguer sur un site propre.

---

### Phase 2 : Annonces (Jours 6-12)

1. Formulaire de publication d’annonce (avec upload multiple d’images)
2. Liste des annonces + filtres + recherche
3. Page détail d’annonce (galerie photos)
4. Gestion "Mes annonces" (modifier / supprimer)
5. Système de favoris

**Livrable :** Un particulier peut publier et chercher des annonces.

---

### Phase 3 : Messagerie (Jours 13-17)

1. Création de conversation depuis une annonce
2. Chat en temps réel (Supabase Realtime)
3. Liste des conversations
4. Indicateurs de messages non lus
5. Notifications basiques

**Livrable :** Les utilisateurs peuvent discuter entre eux.

---

### Phase 4 : Espace Professionnel (Jours 18-23)

1. Demande de compte Pro
2. Validation manuelle par admin
3. Badge Pro
4. Page Vitrine / Boutique
5. Système de Boost (mise en avant manuelle ou semi-auto)
6. Dashboard Pro simple (stats de base)

**Livrable :** Les professionnels ont un espace dédié et visible.

---

### Phase 5 : Administration (Jours 24-27)

1. Dashboard Admin
2. Modération des annonces
3. Gestion des utilisateurs
4. Activation / désactivation des comptes Pro
5. Gestion des catégories

---

### Phase 6 : Polish & Optimisation (Jours 28-35)

1. Design final (soigner toutes les pages)
2. Responsive parfait (mobile en priorité)
3. Performance (images, chargement)
4. SEO de base
5. Gestion des erreurs + toasts
6. Tests utilisateurs internes
7. Préparation au déploiement (Vercel)

---

### Ordre de Priorité pour Cursor

Quand tu travailles avec l’agent IA, respecte cet ordre :

1. Design System + Layout
2. Auth + Profiles
3. Listings (CRUD complet)
4. Search & Filters
5. Chat
6. Pro features
7. Admin
8. Polish

---

### Conseils pour travailler efficacement avec Cursor

- Toujours donner le contexte (PRD + TRD + ce plan)
- Demander une fonctionnalité à la fois
- Faire valider le design avant d’avancer trop loin
- Tester régulièrement sur mobile
- Utiliser des commits Git fréquents
- Demander à l’agent de respecter le design system

---

### Déploiement MVP

- Frontend → Vercel
- Backend → Supabase
- Domaine → Nom de domaine ivoirien ou .com
- SSL automatique

---

**Fin de l’Implementation Plan**
