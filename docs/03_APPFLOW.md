# 03 - APP FLOW (Flux Application)
## Plateforme de Petites Annonces - Côte d'Ivoire

---

### 1. Parcours Utilisateur Principal

#### A. Visiteur non connecté
1. Arrive sur la page d’accueil
2. Voit les annonces populaires / récentes
3. Peut rechercher et filtrer
4. Peut cliquer sur une annonce → page détail
5. Pour contacter → doit s’inscrire / se connecter

#### B. Inscription / Connexion
1. Bouton "Se connecter" ou "Publier une annonce"
2. Choix : Email / Téléphone / Google
3. Vérification (code SMS ou email)
4. Complétion du profil (nom, photo, ville)
5. Redirection vers l’accueil ou la page précédente

#### C. Publication d’une annonce
1. Clic sur "Publier une annonce"
2. Choix de la catégorie
3. Formulaire (titre, description, prix, localisation, photos)
4. Prévisualisation
5. Publication
6. Confirmation + lien vers l’annonce

#### D. Contact / Chat
1. Sur une annonce → bouton "Contacter le vendeur"
2. Ouverture de la conversation (liée à l’annonce)
3. Échange de messages en temps réel
4. Possibilité de voir l’historique

#### E. Espace Professionnel
1. Demande de passage en compte Pro (formulaire)
2. Validation manuelle par l’admin
3. Accès à :
   - Badge Pro
   - Vitrine Boutique
   - Boosts d’annonces
   - Statistiques

---

### 2. Flux Principaux (User Flows)

**Flow 1 : Chercher et contacter**
Accueil → Recherche / Filtres → Liste d’annonces → Détail annonce → Contacter → Chat

**Flow 2 : Publier**
Bouton Publier → Choix catégorie → Formulaire → Upload photos → Prévisualisation → Publication → Succès

**Flow 3 : Gérer ses annonces**
Profil → Mes Annonces → Modifier / Supprimer / Booster (si Pro)

**Flow 4 : Devenir Pro**
Profil → Devenir Professionnel → Formulaire → En attente de validation → Compte Pro activé

**Flow 5 : Admin**
Dashboard Admin → Modération → Gestion utilisateurs → Activation Pro → Statistiques globales

---

### 3. Pages Principales à Créer

| Page | Description |
|------|-------------|
| `/` | Accueil (annonces en avant, catégories, recherche) |
| `/annonces` | Liste des annonces avec filtres |
| `/annonces/[id]` | Détail d’une annonce |
| `/publier` | Formulaire de publication |
| `/messages` | Liste des conversations |
| `/messages/[id]` | Conversation individuelle |
| `/profil` | Profil utilisateur |
| `/profil/annonces` | Gestion de ses annonces |
| `/boutique/[id]` | Page vitrine d’un professionnel |
| `/pro` | Espace professionnel (dashboard Pro) |
| `/admin` | Back-office administrateur |
| `/connexion` | Login / Inscription |

---

### 4. États Importants

- Utilisateur non connecté
- Utilisateur connecté (Particulier)
- Utilisateur Pro (en attente / actif)
- Admin

---

**Fin de l’App Flow**
