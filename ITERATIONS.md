# Plan d'itérations — Imagine for Margo (équipe UQB5MT)

- **Source du plan** : proposé par l'agent (aucun plan d'itérations trouvé dans la passation : pas de fichier `cadrage/*iteration*`, pas de clé `iterations` dans `passation.json`).
- **Temps restant annoncé** : 60 minutes (demandé le 2026-11-18).
- **Durée d'un tour de test PM Lab** : 5 minutes.
- **Plan validé le 2026-11-18**, tel quel, au début de l'itération 1. Temps restant reconfirmé à ce moment : 50 minutes.
- Temps restant reconfirmé au début de l'itération 2 : 45 minutes. Capacité restante pour les itérations 2+3+4 (~13+15+15 = 43 min) : tient de justesse, peu de marge.
- Temps restant reconfirmé après le retour des cadreurs (2026-11-18) : **moins de 20 minutes**. ✂️ Ça ne tient plus qu'une itération complète (codage + ~5 min de publication + 5 min de tour de test) : les pages particulier/entreprise réelles (anciennes itérations 3 et 4) sont reportées en « À venir », non codées, et la dernière itération du build (ci-dessous, nouvelle Itération 3) couvre le retour des cadreurs et sert aussi de stabilisation finale pour le pitch.
- **Capacité estimée** : chaque itération coûte au moins (codage ≤10 min) + publication (~5 min) + tour de test (5 min), soit 15 à 20 min. Sur les 50 minutes reconfirmées au début de l'itération 1, 3 itérations tenaient. L'ajout de l'itération 2 (boutons de header, demandée par le développeur) portait le plan à 4 itérations ; avec moins de 20 minutes restantes, le plan revient à **3 itérations réalisées** (1, 2, 3), le reste du scénario PRD étant reporté après le hackathon.
- **Hors périmètre pour tout le hackathon** (d'après `matiere/arbitrages.md` et le PRD, « Hors périmètre ») :
  - création de compte donateur (historique, avis fiscaux, paiements) ;
  - personnalisation via le CRM (newsletters/SMS adaptées) ;
  - système de points et de niveaux complet (attribution, goodies, badges) ;
  - **contenu réel** des profils testateur et organisateur (aucun argument n'est défini dans la passation pour eux ; seuls particulier et entreprise ont un scénario et des arguments en V1) — voir ⚠️ ci-dessous pour les boutons de header, ajoutés sans contenu à la demande du développeur ;
  - refonte du site existant, remplacement d'iRaiser ;
  - pop-up de relance.

⚠️ **Changement de périmètre demandé par le développeur, hors plan initial** : le croquis de l'écran 1 montre 4 boutons de profil (particulier, entreprise, testateur, organisateur), alors que le PRD avait explicitement mis testateur/organisateur en « Hors périmètre » V1. Le développeur a choisi d'ajouter les 2 boutons manquants pour la fidélité visuelle au croquis, **sans contenu** (aucun argument n'étant fourni par la passation pour ces profils). Insérée en Itération 2, ci-dessous.

✅ **Validé par les cadreurs au tour de test de l'itération 2** : leur retour (« sur la première page, il faut avoir les profils testateur et organisateur ») confirme la direction prise en itération 2 — mais porte sur l'écran « Qui êtes-vous ? » (l'écran réellement affiché en premier), qui ne proposait encore que 2 personas (Camille, Julien), le header à 4 boutons n'apparaissant qu'après ce choix. Traité en Itération 3, ci-dessous : 2 personas de plus sur cet écran, menant au même placeholder « à venir » que les boutons du header. Le **contenu réel** (arguments) reste hors périmètre, faute de matière dans la passation.

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

## Itération 3 : Les profils testateur et organisateur sur l'écran « Qui êtes-vous ? » (retour des cadreurs) + stabilisation

- **Dans le périmètre** :
  - 2 personas de plus sur l'écran de choix (ex. un testateur, une structure organisatrice), menant comme les 2 existants à l'accueil — profil testateur/organisateur actif, donc placeholder « à venir » affiché immédiatement (comportement déjà posé en itération 2, pas de contenu inventé).
  - ❗️ Correctif de régression signalé par le développeur (« les textes ne s'affichent pas sur la version PC ») : `.personaBouton` et `.profilBouton` dans `page.module.css` ne fixent pas de `color`, donc le texte prend la couleur de bouton par défaut du navigateur — invisible (texte clair sur fond clair) quand l'OS/navigateur est en thème sombre, à cause de `color-scheme: dark` posé dans `globals.css`. Fixer une couleur de texte explicite sur ces deux classes.
  - Dernière itération du build : sert aussi à stabiliser ce qui sera montré au pitch.
- **Hors périmètre** : tout contenu réel pour testateur/organisateur (toujours aucun argument dans la passation) ; les pages particulier/entreprise réelles, reportées après le hackathon (voir « À venir »).
- **Critères d'acceptation** :
  - Étant donné l'écran « Qui êtes-vous ? », quand le visiteur le regarde, alors il voit 4 personas : particulier, entreprise, testateur, organisateur.
  - Étant donné le choix d'un persona testateur ou organisateur, quand le visiteur valide, alors il arrive sur l'accueil avec le placeholder « à venir » (pas de régression sur particulier/entreprise).
  - Étant donné un navigateur en thème sombre (`prefers-color-scheme: dark`), quand le visiteur regarde l'écran « Qui êtes-vous ? » ou le header, alors le texte des boutons reste lisible (contraste suffisant).
- **Hypothèse de l'équipe couverte** : aucune — retour direct des cadreurs au tour de test de l'itération 2, pas un job to be done du PRD (testateur/organisateur restent hors périmètre PRD pour leur contenu).
- **Codage estimé** : 4 minutes (3 pour les personas, 1 pour le correctif CSS).
- **Fichiers prévus** : `frontend/src/app/personas.ts` (2 personas de plus), `frontend/src/app/page.module.css` (couleur de texte explicite). (~2 fichiers)
- **Tests unitaires prévus** : 1, sur la couverture des 4 profils par `PERSONAS` (le correctif CSS n'est pas testable en Vitest, vérifié visuellement).
- **Étapes ajoutées à la démo** : depuis l'écran « Qui êtes-vous ? », choix d'un persona testateur → vérification du placeholder.
- **Bilan** :
  - Codage réel : moins d'1 minute (pas de dépassement).
  - Les 3 critères d'acceptation sont satisfaits : 4 personas sur l'écran de choix, testateur/organisateur mènent au placeholder sans régression, texte lisible en thème sombre (vérifié visuellement et via la démo Playwright, dont le rendu headless a confirmé le correctif).
  - `npm test` : 7 tests passent (2 API + 5 front, dont le test `PERSONAS`/`trouverPersona` mis à jour pour les 4 profils). `npm run lint` : propre. `./scripts/verifier-deployabilite.sh` : aucune borne, aucune alarme.
  - Déployé sur `localhost:8080` (frontend reconstruit et republié ; l'API n'a pas changé) ; `curl localhost:8080/health`, `/sante` et `localhost:8081/health` répondent 200/ok. Version 3 signalée à PM Lab (`moteur_avance: false`, enregistrée).
  - Rien de bloqué par le harnais.
  - Reporté : rien de cette itération. Les pages particulier/entreprise réelles restent hors budget du hackathon (voir « À venir »).
  - **Modifications** :
    - `frontend/src/app/personas.ts` : 2 personas de plus (testateur, organisateur) dans `PERSONAS` — critères 1 et 2.
    - `frontend/src/app/personas.test.ts` : tests mis à jour pour couvrir les 4 profils et un identifiant réellement inconnu — critère 2 (DoD).
    - `frontend/src/app/page.module.css` : `color` explicite ajoutée sur `.profilBouton` et `.personaBouton`, qui en manquaient — corrige le texte invisible en thème sombre (`color-scheme: dark`), signalé par le développeur — critère 3.
    - `e2e/demo.spec.ts` : étape « je choisis la structure organisatrice » ajoutée à la démo (hors DoD).

---

## À venir

1. Page particulier réelle (3 arguments du PRD + lien iRaiser) et page entreprise réelle (RSE, fiscalité du mécénat, badges) : reportées après le hackathon, faute de temps (moins de 20 minutes restantes après le retour des cadreurs).
2. Page de confirmation après le don, avec affichage statique du niveau de fidélité.
3. Contenu réel des profils testateur et organisateur (version suivante, hors hackathon sauf décision contraire des cadreurs — aucun argument n'est fourni dans la passation).
