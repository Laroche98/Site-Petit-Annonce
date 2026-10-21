# 04 - UI/UX DESIGN
## Plateforme de Petites Annonces - Côte d'Ivoire

**Objectif principal :** Très bonne apparence, design premium, moderne et professionnel.

---

### 1. Direction Artistique

**Inspiration :**
- Leboncoin (clarté et efficacité)
- Vinted (esthétique moderne et chaleureuse)
- CoinAfrique (mais en beaucoup plus soigné)
- Design systems modernes (Linear, Vercel, Stripe)

**Ambiance recherchée :**
- Clean, aéré, professionnel
- Chaleureux et accessible (pas froid)
- Sensation de confiance et de sérieux
- Très bon rendu sur mobile

---

### 2. Palette de Couleurs Recommandée

| Rôle | Couleur | Code |
|------|---------|------|
| Primaire | Bleu profond / Navy | `#0B3D5C` ou `#0F4C81` |
| Accent | Orange vif / Corail | `#FF6B35` ou `#F97316` |
| Succès | Vert | `#10B981` |
| Fond principal | Blanc / Off-white | `#FFFFFF` / `#F8FAFC` |
| Fond secondaire | Gris très clair | `#F1F5F9` |
| Texte principal | Gris anthracite | `#0F172A` |
| Texte secondaire | Gris moyen | `#64748B` |
| Bordures | Gris clair | `#E2E8F0` |

**Variante possible :**  
Primaire vert émeraude + accent orange (plus "Afrique").

---

### 3. Typographie

- **Titres :** Inter ou Plus Jakarta Sans (Bold / SemiBold)
- **Corps :** Inter ou DM Sans
- **Taille de base :** 16px
- Hiérarchie claire (H1 → H2 → H3 → body → small)

---

### 4. Composants Clés à Soigner

#### Cartes d’annonces
- Grande image en haut (ratio 4:3 ou 1:1)
- Prix en grand et en couleur accent
- Titre en 2 lignes max
- Localisation + date
- Badge "Pro" si applicable
- Bouton cœur (favoris)
- Ombre légère + hover élégant

#### Page Détail Annonce
- Galerie photos (swipe mobile + lightbox)
- Prix très visible
- Bouton "Contacter" sticky en bas sur mobile
- Informations vendeur (photo + badge + note future)
- Description lisible
- Annonces similaires en bas

#### Navigation Mobile
- Bottom navigation (Accueil, Rechercher, Publier, Messages, Profil)
- Bouton Publier central et mis en avant

#### Header Desktop
- Logo à gauche
- Barre de recherche centrale
- Boutons Connexion / Publier à droite

---

### 5. Principes UX

1. **Mobile-First** : Tout doit être parfait sur téléphone en premier.
2. **Moins de clics** : Publier une annonce en maximum 4-5 étapes.
3. **Feedback immédiat** : Loaders, toasts de succès/erreur, états de chargement.
4. **Confiance** : Badges Pro bien visibles, design soigné = sérieux.
5. **Rapidité perçue** : Skeleton loaders, images optimisées, transitions fluides.
6. **Accessibilité** : Contrastes suffisants, zones de clic assez grandes.

---

### 6. Pages Prioritaires pour le Design

1. Accueil
2. Liste des annonces (avec filtres)
3. Détail d’une annonce
4. Formulaire de publication
5. Messagerie
6. Profil + Mes annonces
7. Page Boutique Pro
8. Espace Pro (dashboard)

---

### 7. Livrables Design Attendus (pour Cursor)

- Design system (couleurs, typo, boutons, inputs, cards)
- Maquettes des pages principales (même en texte structuré)
- Comportements hover / active / loading
- Version mobile et desktop

---

**Note importante pour Cursor :**  
Le design doit être **premium**. Utiliser shadcn/ui + Tailwind de façon élégante. Éviter l’aspect "template générique". Soigner particulièrement les cartes d’annonces et la page détail.

---

**Fin du document UI/UX**
