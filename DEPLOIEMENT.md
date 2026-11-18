# Déploiement — Imagine for Margo (équipe UQB5MT)

Un menu démo qui oriente chaque visiteur (particulier ou entreprise mécène) vers la page et les
arguments de don adaptés à son profil, pour l'association Imagine for Margo (recherche contre les
cancers pédiatriques).

## Services

- `frontend/` : export statique Next.js, servi par nginx sur le port 80 du conteneur (8080 publié).
  **Service exposé au public.**
- `api/` : Node, écoute sur le port `PORT` (8081 par défaut). Répond `/health` et `/sante`. Pas
  encore de route métier : `/api/v1/...` arrive aux prochaines itérations.

## Services externes

- Aucun pour l'instant. Le bouton de don orientera vers iRaiser (formulaire existant de
  l'association) à partir d'une prochaine itération, via une variable d'environnement — jamais une
  adresse en dur.

## Connu comme fragile ou inachevé

- Le contenu des pages particulier/entreprise est encore un placeholder générique : les arguments
  réels (réduction d'impôt, RSE, etc.) arrivent aux itérations 2 et 3.
- Le choix de persona n'est pas conservé entre deux rechargements de page (état en mémoire
  seulement, pas de stockage).

## Contacts

- Équipe : Équipe 42 (`UQB5MT`).
- Association : Imagine for Margo — responsable communication et responsable collecte et
  partenariats (coordonnées dans `passation/contexte/association.md`, non commité).
