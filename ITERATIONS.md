# Plan d'itérations — Imagine for Margo (équipe UQB5MT)

- **Source du plan** : proposé par l'agent (aucun plan d'itérations trouvé dans la passation : pas de fichier `cadrage/*iteration*`, pas de clé `iterations` dans `passation.json`).
- **Temps restant annoncé** : 60 minutes (demandé le 2026-11-18).
- **Durée d'un tour de test PM Lab** : 5 minutes.
- **Plan validé le 2026-11-18**, tel quel, au début de l'itération 1. Temps restant reconfirmé à ce moment : 50 minutes.
- Temps restant reconfirmé au début de l'itération 2 : 45 minutes. Capacité restante pour les itérations 2+3+4 (~13+15+15 = 43 min) : tient de justesse, peu de marge.
- **Capacité estimée** : chaque itération coûte au moins (codage ≤10 min) + publication (~5 min) + tour de test (5 min), soit 15 à 20 min. Sur les 50 minutes reconfirmées au début de l'itération 1, 3 itérations tenaient. L'ajout de l'itération 2 (boutons de header, demandée par le développeur) porte le plan à **4 itérations**, ce qui dépasse l'estimation initiale de ~13 minutes : ✂️ à surveiller, le temps sera reconfirmé au début de chaque `/iteration` et une itération pourra être écourtée ou reportée si besoin.
- **Hors périmètre pour tout le hackathon** (d'après `matiere/arbitrages.md` et le PRD, « Hors périmètre ») :
  - création de compte donateur (historique, avis fiscaux, paiements) ;
  - personnalisation via le CRM (newsletters/SMS adaptées) ;
  - système de points et de niveaux complet (attribution, goodies, badges) ;
  - **contenu réel** des profils testateur et organisateur (aucun argument n'est défini dans la passation pour eux ; seuls particulier et entreprise ont un scénario et des arguments en V1) — voir ⚠️ ci-dessous pour les boutons de header, ajoutés sans contenu à la demande du développeur ;
  - refonte du site existant, remplacement d'iRaiser ;
  - pop-up de relance.

⚠️ **Changement de périmètre demandé par le développeur, hors plan initial** : le croquis de l'écran 1 montre 4 boutons de profil (particulier, entreprise, testateur, organisateur), alors que le PRD avait explicitement mis testateur/organisateur en « Hors périmètre » V1. Le développeur a choisi d'ajouter les 2 boutons manquants pour la fidélité visuelle au croquis, **sans contenu** (aucun argument n'étant fourni par la passation pour ces profils). Insérée en Itération 2, ci-dessous ; les itérations page particulier/page entreprise sont renumérotées 3 et 4. **À faire valider par les cadreurs** au prochain tour de test : c'est leur décision de « hors périmètre » qui est partiellement révisée.

⚠️ `cadrage/5-hypotheses.md` et `matiere/arbitrages.md` sont vides (« Pas encore produit » / « Aucun vote consolidé »). Les critères d'acceptation ci-dessous sont donc dérivés du « scénario idéal » du PRD (`PASSATION.md`), pas d'un fichier d'hypothèses dédié — à confirmer avec les cadreurs si l'occasion se présente pendant un tour de test.

✂️ Le scénario complet du PRD va jusqu'à une page de confirmation avec niveau de fidélité après le don. Ça ne tient pas à côté des 4 itérations détaillées ci-dessous : cette page est repoussée en « À venir » et ne sera codée que s'il reste du temps après l'itération 4.

---

## Itération 1 : Le squelette publié, avec l'écran « Qui êtes-vous ? » et le choix de profil

- **Dans le périmètre** :
  - `.env.example` et `DEPLOIEMENT.md` à la racine (contrat de déployabilité).
  - Écran de lancement « Qui êtes-vous ? » : liste de personas d'exemple (un particulier, une entreprise mécène), sans connexion ni mot de passe, avec un bouton pour changer de persona à tout moment.
  - Écran d'accueil avec un header affichant le choix de profil **PARTICULIER / ENTREPRISE**, données en dur (pas encore de pages par profil).
  - Déploiement sur 8080/8081 selon la recette du `/CLAUDE.md` du serveur.
- **Hors périmètre** : le contenu réel des pages particulier/entreprise (itérations 2 et 3), le lien vers iRaiser, la page de confirmation.
- **Critères d'acceptation** :
  - Étant donné l'application démarrée, quand le visiteur arrive sur `/`, alors il voit l'écran « Qui êtes-vous ? » avec au moins un persona particulier et un persona entreprise.
  - Étant donné un persona choisi, quand le visiteur valide, alors il arrive sur l'accueil et voit le header avec les options PARTICULIER et ENTREPRISE.
  - Étant donné l'application déployée, quand on appelle `/health` et `/sante` (front sur 8080, API sur 8081), alors les deux répondent 200.
- **Hypothèse de l'équipe couverte** : aucune (fichier vide) — couvre l'étape 1 du scénario idéal du PRD (« choix du profil »).
- **Codage estimé** : 10 minutes.
- **Fichiers prévus** : `.env.example`, `DEPLOIEMENT.md`, `frontend/src/app/page.tsx`, un composant/route pour l'écran « Qui êtes-vous ? », un composant header de profil. (~5 fichiers)
- **Tests unitaires prévus** : 1 à 3, sur la logique de sélection de persona/profil (pas sur le balisage).
- **Étapes ajoutées à la démo** : ouverture de l'app → choix du persona → arrivée sur l'accueil avec header de profil visible.
- **Bilan** :
  - Codage réel : 2 minutes (pas de dépassement).
  - Les 3 critères d'acceptation sont satisfaits : écran « Qui êtes-vous ? » avec les 2 personas (particulier, entreprise), header PARTICULIER/ENTREPRISE visible après choix, `/health` et `/sante` répondent 200 sur le front (8080) et l'API (8081).
  - Plateforme démarrée (postgres/openbao/valkey/registre), aucune base ni secret nécessaires pour cette itération (pas encore de persistance).
  - `npm test` : 5 tests passent (2 API + 3 front). `npm run lint` : propre. `./scripts/verifier-deployabilite.sh` : aucune borne, aucune alarme.
  - Déployé sur `localhost:8080`/`localhost:8081` via `podman compose` ; version 1 signalée à PM Lab (`moteur_avance: false`, enregistrée).
  - Rien de bloqué par le harnais.
  - Reporté : aucun report, tout le périmètre prévu est fait.
  - **Modifications** :
    - `.env.example` : ajout de `PORT` (seule variable lue par l'application pour l'instant) — critère 3 (contrat de déployabilité).
    - `DEPLOIEMENT.md` : page de déploiement du gabarit (services, externes, fragile, contacts) — critère 3.
    - `frontend/src/app/personas.ts` : données des 2 personas de la V1 (particulier, entreprise) et `trouverPersona` — critères 1 et 2.
    - `frontend/src/app/personas.test.ts` : 3 tests Vitest sur `trouverPersona` et la couverture des profils — critère 2 (DoD).
    - `frontend/src/app/page.tsx` : écran « Qui êtes-vous ? », puis accueil avec header de choix de profil et bouton pour changer de persona — critères 1 et 2.
    - `frontend/src/app/page.module.css` : styles de l'écran persona et du header — critères 1 et 2.
    - `api/Dockerfile`, `frontend/Dockerfile` : images de base qualifiées en `docker.io/library/...` (résolution hors terminal interactif) — critère 3/4 (déploiement).
    - `podman-compose.yml` (racine) : déploiement sur le réseau `core-network`, ports 8080/8081 — critère 4.
    - `e2e/demo.spec.ts` : étape « je choisis d'être le particulier » ajoutée à la démo (hors DoD).

---

## Itération 2 : Les 4 boutons de profil dans le header, fidèles au croquis

- **Dans le périmètre** : le header affiche les 4 boutons du croquis (PARTICULIER, ENTREPRISE, TESTATEUR, ORGANISATEUR). Cliquer sur TESTATEUR ou ORGANISATEUR affiche un message « Cette page arrive dans une prochaine version », sans argument inventé. PARTICULIER et ENTREPRISE gardent leur comportement actuel (données en dur, inchangé depuis l'itération 1).
- **Hors périmètre** : tout contenu réel pour testateur/organisateur (aucun argument fourni par la passation) ; les pages particulier/entreprise réelles (itérations 3 et 4).
- **Critères d'acceptation** :
  - Étant donné l'accueil, quand le visiteur regarde le header, alors il voit 4 boutons : PARTICULIER, ENTREPRISE, TESTATEUR, ORGANISATEUR.
  - Étant donné un clic sur TESTATEUR ou ORGANISATEUR, alors un message « à venir » s'affiche, sans argument de don inventé.
  - Étant donné cette itération, alors PARTICULIER et ENTREPRISE se comportent comme avant (pas de régression).
- **Hypothèse de l'équipe couverte** : aucune — demande du développeur en cours de hackathon, pour la fidélité visuelle au croquis de l'écran 1 ; ne répond à aucun job to be done du PRD pour testateur/organisateur (hors périmètre PRD).
- **Codage estimé** : 3 minutes.
- **Fichiers prévus** : `frontend/src/app/personas.ts` (type `Profil` étendu), `frontend/src/app/page.tsx` (header à 4 boutons + placeholder), `frontend/src/app/page.module.css` (si besoin). (~3 fichiers)
- **Tests unitaires prévus** : 1, sur la disponibilité de contenu par profil (ex. `estProfilDisponible`).
- **Étapes ajoutées à la démo** : clic sur TESTATEUR → vérification du message « à venir ».
- **Bilan** :
  - Codage réel : 1 minute (pas de dépassement).
  - Les 3 critères d'acceptation sont satisfaits : header à 4 boutons (PARTICULIER, ENTREPRISE, TESTATEUR, ORGANISATEUR), message « Cette page arrive dans une prochaine version. » sur testateur/organisateur, PARTICULIER/ENTREPRISE inchangés (pas de régression, vérifié par la démo et les tests existants).
  - `npm test` : 7 tests passent (2 API + 5 front, dont 2 nouveaux sur `estProfilDisponible`). `npm run lint` : propre. `./scripts/verifier-deployabilite.sh` : aucune borne, aucune alarme.
  - Déployé sur `localhost:8080` (frontend reconstruit et republié ; l'API n'a pas changé) ; version 2 signalée à PM Lab (`moteur_avance: false`, enregistrée).
  - Rien de bloqué par le harnais.
  - Reporté : aucun report, tout le périmètre prévu est fait.
  - **Modifications** :
    - `frontend/src/app/personas.ts` : type `Profil` étendu à testateur/organisateur, `PROFILS` (les 4 boutons) et `estProfilDisponible` — critères 1 et 2.
    - `frontend/src/app/personas.test.ts` : 2 tests Vitest sur `estProfilDisponible` — critère 2 (DoD).
    - `frontend/src/app/page.tsx` : header généré depuis `PROFILS`, placeholder « à venir » pour les profils indisponibles — critères 1, 2, 3.
    - `e2e/demo.spec.ts` : étape « je regarde le profil TESTATEUR » ajoutée à la démo (hors DoD).

---

## Itération 3 : La page particulier réelle

- **Dans le périmètre** : en cliquant sur PARTICULIER, affichage d'une page avec les 3 arguments du PRD (réduction d'impôt, engagement personnel et solidaire, niveaux de fidélité) et un bouton « Faire un don » vers iRaiser (URL externe en variable d'environnement, formulaire non remplacé).
- **Hors périmètre** : la page entreprise (itération 4), la page de confirmation après le don.
- **Critères d'acceptation** :
  - Étant donné le profil PARTICULIER choisi, quand le visiteur arrive sur sa page, alors il voit les 3 arguments particuliers du PRD.
  - Étant donné cette page, quand il clique sur « Faire un don », alors il est orienté vers le formulaire iRaiser (lien externe, via variable d'environnement).
  - Étant donné cette page, alors aucun argument destiné aux entreprises n'y apparaît.
- **Hypothèse de l'équipe couverte** : aucune (fichier vide) — couvre l'étape 2 du scénario idéal (« page adaptée au profil particulier »).
- **Codage estimé** : 5 minutes.
- **Fichiers prévus** : une page/route particulier, mise à jour du header/routing, `.env.example` (ajout de l'URL iRaiser). (~3 fichiers)
- **Tests unitaires prévus** : 1, sur le contenu/choix des arguments affichés selon le profil.
- **Étapes ajoutées à la démo** : clic sur PARTICULIER → vérification des arguments → clic sur « Faire un don ».
- **Bilan** : _à remplir en fin d'itération_

---

## Itération 4 : La page entreprise réelle

- **Dans le périmètre** : en cliquant sur ENTREPRISE, affichage d'une page avec les arguments du PRD pour les mécènes (RSE, avantages fiscaux du mécénat, badges de visibilité) et le même bouton « Faire un don » vers iRaiser.
- **Hors périmètre** : la page de confirmation avec niveau de fidélité.
- **Critères d'acceptation** :
  - Étant donné le profil ENTREPRISE choisi, quand le visiteur arrive sur sa page, alors il voit les arguments RSE / fiscalité du mécénat / badges.
  - Étant donné cette page, quand il clique sur « Faire un don », alors il est orienté vers le formulaire iRaiser.
  - Étant donné cette page, alors aucun argument destiné aux particuliers n'y apparaît.
- **Hypothèse de l'équipe couverte** : aucune (fichier vide) — couvre l'étape 2bis du scénario idéal (« page adaptée au profil entreprise »).
- **Codage estimé** : 5 minutes.
- **Fichiers prévus** : une page/route entreprise, mise à jour du routing/header. (~2-3 fichiers)
- **Tests unitaires prévus** : 1, sur le contenu/choix des arguments affichés selon le profil (peut compléter le test de l'itération 2).
- **Étapes ajoutées à la démo** : retour au choix de profil → clic sur ENTREPRISE → vérification des arguments.
- **Bilan** : _à remplir en fin d'itération_

---

## À venir

1. Page de confirmation après le don, avec affichage statique du niveau de fidélité (si le temps restant le permet).
2. Contenu réel des profils testateur et organisateur (version suivante, hors hackathon sauf décision contraire des cadreurs — aucun argument n'est fourni dans la passation).
3. Stabilisation finale pour le pitch (dès que le temps restant ne permet plus qu'une itération) : vérifier le contrat de déployabilité, l'écran « Qui êtes-vous ? », la démo `e2e/demo.spec.ts`, et figer ce qui sera montré.
