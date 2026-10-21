# 02 - TRD (Technical Requirements Document)
## Plateforme de Petites Annonces - Côte d'Ivoire

**Version :** 1.0  
**Stack recommandée pour Cursor + Agents IA**

---

### 1. Stack Technique Recommandée

| Couche | Technologie | Justification |
|--------|-------------|---------------|
| Frontend | **Next.js 15** (App Router) + TypeScript | Excellent avec les agents IA, SEO, performance |
| UI | **Tailwind CSS** + **shadcn/ui** + Lucide Icons | Design moderne, très bon rendu, rapide à générer |
| Backend / DB / Auth | **Supabase** (PostgreSQL + Auth + Storage + Realtime) | Auth, base de données, stockage photos, chat temps réel |
| State Management | Zustand ou React Context | Simple et efficace |
| Forms | React Hook Form + Zod | Validation robuste |
| Images | Supabase Storage + transformation (ou Cloudinary) | Gestion photos optimisée |
| Hosting | Vercel (Frontend) + Supabase | Déploiement simple et performant |
| Analytics | Vercel Analytics ou Plausible | Léger |

**Pourquoi cette stack ?**  
Elle est parfaitement maîtrisée par les agents IA de Cursor (Claude, GPT), très documentée, et permet de construire un produit de qualité rapidement.

---

### 2. Architecture Générale

- **Frontend** : Next.js (Server Components + Client Components)
- **API** : Route Handlers Next.js + Supabase Client
- **Base de données** : PostgreSQL (Supabase)
- **Authentification** : Supabase Auth (Email + Téléphone + Google)
- **Stockage fichiers** : Supabase Storage (photos d’annonces)
- **Chat temps réel** : Supabase Realtime
- **Rôles** : particular, professional, admin

---

### 3. Exigences Non-Fonctionnelles

- **Performance** : Lighthouse > 90 sur mobile
- **Responsive** : Mobile-first (priorité absolue)
- **Sécurité** :
  - Protection CSRF
  - Validation côté serveur
  - Row Level Security (RLS) sur Supabase
  - Limitation d’upload (taille + type de fichiers)
- **SEO** : Bon référencement des pages d’annonces
- **Accessibilité** : Niveau AA minimum
- **Internationalisation** : Français uniquement pour le MVP

---

### 4. Gestion des Images

- Formats acceptés : JPG, PNG, WEBP
- Taille max par image : 5 MB
- Nombre max d’images par annonce : 10
- Compression automatique côté client + serveur
- Génération de miniatures (thumbnails)
- Stockage organisé par annonce

---

### 5. Messagerie (Chat)

- Chat en temps réel (Supabase Realtime)
- Conversations liées à une annonce
- Historique des messages
- Indicateur "en train d’écrire"
- Notifications de nouveaux messages
- Possibilité d’envoyer des images dans le chat (phase 1.1)

---

### 6. Système d’Abonnements Pro (sans paiement en ligne)

Comme il n’y a **pas de paiement en ligne** dans le MVP :
- Les abonnements sont gérés manuellement par l’admin
- L’admin active/désactive le statut Pro d’un utilisateur
- Ou système de code d’activation / validation manuelle
- Plus tard (V2) : intégration Wave / Orange Money / CinetPay

---

### 7. Rôles et Permissions

| Rôle | Permissions |
|------|-------------|
| `user` (Particulier) | Publier, discuter, gérer ses annonces |
| `professional` | Tout ce que user + badge Pro + boosts + vitrine boutique |
| `admin` | Tout + modération + gestion utilisateurs + activation Pro |

---

### 8. Contraintes Techniques

- Pas de paiement en ligne dans cette version
- Pas d’application mobile native
- Support des navigateurs modernes uniquement
- Optimisé pour les connexions 3G/4G africaines (images compressées, chargement progressif)

---

**Fin du TRD**
