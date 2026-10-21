# 05 - BACKEND SCHEMA
## Plateforme de Petites Annonces - Côte d'Ivoire
### Schéma de base de données (Supabase / PostgreSQL)

---

### 1. Tables Principales

#### `profiles` (extends auth.users)
```sql
id                 uuid primary key references auth.users
email              text
phone              text
full_name          text
avatar_url         text
city               text
bio                text
role               text default 'user'  -- 'user' | 'professional' | 'admin'
is_pro_verified    boolean default false
pro_type           text  -- 'immobilier' | 'auto' | 'boutique' | null
company_name       text
company_logo       text
company_address    text
company_description text
created_at         timestamptz
updated_at         timestamptz
```

#### `categories`
```sql
id                 uuid primary key
name               text
slug               text unique
icon               text
parent_id          uuid references categories
order_index        int
is_active          boolean default true
```

#### `listings` (Annonces)
```sql
id                 uuid primary key
user_id           uuid references profiles
category_id        uuid references categories
title              text
description        text
price              numeric
currency           text default 'FCFA'
city               text
neighborhood       text
status             text default 'active'  -- active, sold, expired, moderated, deleted
is_pro             boolean default false
is_featured        boolean default false  -- boost
featured_until     timestamptz
views_count        int default 0
contact_count      int default 0
created_at         timestamptz
updated_at         timestamptz
published_at       timestamptz
```

#### `listing_images`
```sql
id                 uuid primary key
listing_id         uuid references listings on delete cascade
url                text
position           int
is_cover           boolean default false
created_at         timestamptz
```

#### `conversations`
```sql
id                 uuid primary key
listing_id         uuid references listings
buyer_id           uuid references profiles
seller_id          uuid references profiles
last_message_at    timestamptz
created_at         timestamptz
```

#### `messages`
```sql
id                 uuid primary key
conversation_id    uuid references conversations on delete cascade
sender_id          uuid references profiles
content            text
is_read            boolean default false
created_at         timestamptz
```

#### `favorites`
```sql
id                 uuid primary key
user_id           uuid references profiles
listing_id         uuid references listings
created_at         timestamptz
unique(user_id, listing_id)
```

#### `boosts` (optionnel pour historique)
```sql
id                 uuid primary key
listing_id         uuid references listings
user_id           uuid references profiles
starts_at          timestamptz
ends_at            timestamptz
amount             numeric  -- pour historique
created_at         timestamptz
```

---

### 2. Tables de Modération

#### `reports` (Signalements)
```sql
id                 uuid primary key default gen_random_uuid()
reporter_id        uuid references profiles not null
-- Cible du signalement (un seul des trois doit être rempli)
reported_listing_id uuid references listings
reported_user_id   uuid references profiles
reported_message_id uuid references messages
reason             text not null  -- 'scam', 'inappropriate', 'spam', 'false_info', 'prohibited', 'other'
description        text           -- détails optionnels
status             text default 'pending'  -- 'pending', 'reviewed', 'resolved', 'rejected'
admin_notes        text
reviewed_by         uuid references profiles
reviewed_at        timestamptz
created_at         timestamptz default now()
```

#### `moderation_logs` (Historique des actions de modération)
```sql
id                 uuid primary key default gen_random_uuid()
admin_id           uuid references profiles not null
action             text not null  -- 'hide_listing', 'restore_listing', 'ban_user', 'unban_user', 'warn_user', 'delete_listing', etc.
target_type        text not null  -- 'listing', 'user', 'message', 'report'
target_id          uuid not null
reason             text
metadata           jsonb          -- infos supplémentaires si besoin
created_at         timestamptz default now()
```

#### `user_warnings` (Avertissements)
```sql
id                 uuid primary key default gen_random_uuid()
user_id            uuid references profiles not null
admin_id           uuid references profiles not null
reason             text not null
description        text
created_at         timestamptz default now()
```

#### `user_blocks` (Blocages entre utilisateurs)
```sql
id                 uuid primary key default gen_random_uuid()
blocker_id         uuid references profiles not null
blocked_id         uuid references profiles not null
created_at         timestamptz default now()
unique(blocker_id, blocked_id)
```

#### Colonnes supplémentaires recommandées sur `profiles`
```sql
-- À ajouter à la table profiles :
is_banned          boolean default false
banned_at          timestamptz
ban_reason         text
warning_count      int default 0
```

#### Colonnes supplémentaires recommandées sur `listings`
```sql
-- Déjà présent : status (active, sold, expired, moderated, deleted, rejected, pending)
moderation_reason  text
moderated_at       timestamptz
moderated_by       uuid references profiles
```

---

### 3. Row Level Security (RLS) - Principes

- Tout le monde peut lire les annonces `status = 'active'`
- Seul le propriétaire peut modifier/supprimer ses annonces
- Seuls les participants d’une conversation peuvent lire les messages
- Seuls les admins peuvent tout gérer
- Les profils Pro ont des droits supplémentaires (boost, etc.)
- Les signalements (`reports`) ne sont visibles que par leur auteur et les admins
- Les logs de modération sont réservés aux admins
- Un utilisateur ne peut pas voir les conversations avec quelqu’un qu’il a bloqué (ou qui l’a bloqué)

---

### 4. Index Importants

- `listings(status, created_at desc)`
- `listings(category_id, status)`
- `listings(city, status)`
- `listings(user_id)`
- `messages(conversation_id, created_at)`
- `conversations(buyer_id)`, `conversations(seller_id)`
- `reports(status, created_at desc)`
- `reports(reported_listing_id)`
- `reports(reported_user_id)`
- `moderation_logs(target_type, target_id)`
- `user_blocks(blocker_id)`, `user_blocks(blocked_id)`

---

### 5. Storage Buckets (Supabase)

- `avatars` → photos de profil
- `listings` → photos d’annonces
- `company` → logos de boutiques

Politique : public read, authenticated write (avec validation).

---

**Fin du Backend Schema**
