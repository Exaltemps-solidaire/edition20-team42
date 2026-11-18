# Plan d'itérations — Imagine for Margo (équipe UQB5MT)

- **Source du plan** : proposé par l'agent (aucun plan d'itérations trouvé dans la passation : pas de fichier `cadrage/*iteration*`, pas de clé `iterations` dans `passation.json`).
- **Temps restant annoncé** : 60 minutes (demandé le 2026-11-18).
- **Durée d'un tour de test PM Lab** : 5 minutes.
- **Plan validé le 2026-11-18**, tel quel, au début de l'itération 1. Temps restant reconfirmé à ce moment : 50 minutes.
- Temps restant reconfirmé au début de l'itération 2 : 45 minutes. Capacité restante pour les itérations 2+3+4 (~13+15+15 = 43 min) : tient de justesse, peu de marge.
- Temps restant reconfirmé après le retour des cadreurs (2026-11-18) : **moins de 20 minutes**. ✂️ Ça ne tenait plus qu'une itération complète : les pages particulier/entreprise réelles (anciennes itérations 3 et 4) sont reportées en « À venir », non codées, et l'itération 3 a couvert le retour des cadreurs + une stabilisation.
- Temps restant reconfirmé au moment d'une nouvelle demande du développeur (barre de navigation du vrai site, écran 1) : **plus de 20 minutes**. Le build continue : nouvelle Itération 4, ci-dessous.
- Replanification du 2026-11-18 (après l'itération 4) : temps restant reconfirmé à **plus de 30 minutes**, tour de test PM Lab toujours à 5 minutes. Le budget du hackathon n'est donc plus épuisé : les pages particulier/entreprise réelles, reportées en « À venir » pendant le creux de budget, redeviennent planifiables. Détaillées en Itérations 5 et 6 ci-dessous.
- ⚠️ **Correction de la source du plan** : un plan de l'équipe existe bien dans la passation, `passation/cadrage/6-plan-de-livraison.md` — il n'a pas été trouvé plus tôt car il ne s'appelle pas `*iteration*`. Il liste 4 étapes : choix du profil, page particulier, page entreprise, accès au don (bouton iRaiser sur chaque page). Les itérations déjà réalisées (1 à 4) et celles détaillées ci-dessous (5 et 6) suivent exactement cet ordre ; aucune reprise rétroactive n'est nécessaire, mais ce plan fait désormais foi pour la suite plutôt que l'ordre proposé par l'agent seul.
- **Capacité estimée** : chaque itération coûte au moins (codage ≤10 min) + publication (~5 min) + tour de test (5 min), soit 15 à 20 min. Sur les 50 minutes reconfirmées au début de l'itération 1, 3 itérations tenaient. L'ajout de l'itération 2 (boutons de header, demandée par le développeur) portait le plan à 4 itérations ; le budget resserré a ramené le plan à 3 itérations réalisées (1, 2, 3) avant que du temps supplémentaire permette l'itération 4, puis la replanification à plus de 30 minutes restantes. Avec plus de 30 minutes et des itérations réalisées jusqu'ici très courtes (1 minute ou moins de codage réel à chaque fois), 3 itérations supplémentaires (5, 6, 7) tiennent avec de la marge ; la page de confirmation et le contenu testateur/organisateur restent en « À venir », à détailler à la prochaine replanification si le temps le permet encore.
- Replanification du 2026-11-18 (retour cadreur sur l'écran d'entrée) : le cadreur signale « la première page n'est pas forcément utile. L'objectif est de choisir son profil et de s'authentifier par la suite pour avoir un parcours qui colle au profil sélectionné. » ⚠️ Ce retour contredit une décision explicite du PRD (`cadrage/7-prd.md`, « Les utilisateurs : pas de connexion » : « Ne codez ni connexion, ni création de comptes, ni mot de passe ») qui avait justement fait remplacer toute authentification par l'écran « Qui êtes-vous ? ». Clarifié avec le développeur avant de coder : (1) authentification **simulée** (un formulaire léger, sans compte ni mot de passe réels, rien persisté) et non une authentification réelle, qui resterait hors périmètre ; (2) l'écran « Qui êtes-vous ? » (personas fictifs) est remplacé par le choix de profil direct (PARTICULIER/ENTREPRISE/TESTATEUR/ORGANISATEUR), suivi de cette authentification simulée. Temps restant reconfirmé à ce moment : **plus de 30 minutes**. Taillé en nouvelle **Itération 5**, insérée avant les pages de contenu : les anciennes itérations 5 et 6 (pages particulier/entreprise réelles) deviennent 6 et 7, inchangées par ailleurs.
- **Hors périmètre pour tout le hackathon** (d'après `matiere/arbitrages.md` et le PRD, « Hors périmètre ») :
  - création de compte donateur (historique, avis fiscaux, paiements) ;
  - **authentification réelle** (compte, mot de passe, persistance en base) : le retour du cadreur (itération 5) demande de passer par une authentification, clarifiée comme **simulée** (formulaire sans backend) — une vraie authentification resterait hors périmètre du hackathon, comme l'indique le PRD ;
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

## Itération 4 : La barre de navigation du vrai site sur l'écran 1 (demande du développeur)

- **Dans le périmètre** : sous la barre des 4 boutons de profil, une barre de navigation inerte fidèle à la description du croquis dans `cadrage/3-solution.md` — logo texte « Imagine for Margo », rubriques L'ASSOCIATION / LES COURSES / LE CANCER DES ENFANTS / LA RECHERCHE / NOUS AIDER (liens inertes, menu de démo), bouton « FAIRE UN DON » mis en avant en rose (même accent `#e4007c` que l'existant). Visible sur l'écran d'accueil (après choix du persona), pas sur l'écran « Qui êtes-vous ? ».
- **Hors périmètre** : vrai logo/charte graphique de l'association (non fournis dans la passation, seulement décrits textuellement) ; vraies pages derrière les rubriques ; lien réel vers iRaiser pour « FAIRE UN DON » (toujours pas câblé, cf. itérations particulier/entreprise reportées).
- **Critères d'acceptation** :
  - Étant donné l'accueil, quand le visiteur le regarde, alors il voit la barre de navigation avec le logo et les 5 rubriques du croquis.
  - Étant donné cette barre, alors le bouton « FAIRE UN DON » est visuellement mis en avant (couleur rose), comme noté dans l'interprétation du croquis.
  - Étant donné cette itération, alors les 4 boutons de profil et le reste de l'accueil (itérations 1-3) ne régressent pas.
- **Hypothèse de l'équipe couverte** : aucune — demande du développeur, pour la fidélité visuelle au croquis de l'écran 1 (déjà dans le PRD, non codée jusqu'ici).
- **Codage estimé** : 5 minutes.
- **Fichiers prévus** : `frontend/src/app/page.tsx` (nouvelle barre de navigation), `frontend/src/app/page.module.css` (styles). (~2 fichiers)
- **Tests unitaires prévus** : aucun — balisage/présentation pure, pas de logique métier nouvelle (conforme à la DoD : pas de test sur du balisage pur).
- **Étapes ajoutées à la démo** : vérification que la barre de navigation et le bouton « FAIRE UN DON » sont visibles sur l'accueil.
- **Bilan** :
  - Codage réel : moins d'1 minute (pas de dépassement).
  - Les 3 critères d'acceptation sont satisfaits : barre de navigation avec logo et 5 rubriques visible sur l'accueil, bouton « FAIRE UN DON » mis en avant en rose (`--accent`), aucune régression sur les boutons de profil ni le reste de l'accueil.
  - `npm test` : 7 tests passent (aucun nouveau test, balisage pur comme prévu). `npm run lint` : propre. `./scripts/verifier-deployabilite.sh` : aucune borne, aucune alarme.
  - Déployé sur `localhost:8080` (frontend reconstruit et republié ; l'API n'a pas changé) ; `/health` et `/sante` répondent 200/ok. Version 4 signalée à PM Lab (`moteur_avance: false`, enregistrée).
  - Rien de bloqué par le harnais.
  - Reporté : rien de cette itération. Pas de vrai logo/charte (non fournis dans la passation), pas de vraies pages derrière les rubriques, pas de lien iRaiser réel sur « FAIRE UN DON » — explicitement hors périmètre de cette itération.
  - **Modifications** :
    - `frontend/src/app/page.tsx` : barre `<nav>` ajoutée sous le header (logo, 5 rubriques, bouton « FAIRE UN DON »), fidèle à la description du croquis dans `cadrage/3-solution.md` — critères 1, 2, 3.
    - `frontend/src/app/page.module.css` : styles `.siteNav`, `.siteLogo`, `.rubriques`, `.faireUnDon` — critères 1 et 2.
    - `e2e/demo.spec.ts` : étape « je vois la barre de navigation » ajoutée à la démo (hors DoD).

---

## Itération 5 : Choix de profil direct + authentification simulée, à la place de l'écran « Qui êtes-vous ? » (retour cadreur)

- **Dans le périmètre** : l'écran d'entrée affiche directement les 4 boutons de profil (PARTICULIER/ENTREPRISE/TESTATEUR/ORGANISATEUR, réutilisant `PROFILS`) à la place de la liste de personas fictifs. Après le choix d'un profil, un écran d'authentification **simulée** (un champ « Votre nom », pas de mot de passe, rien persisté, bouton « Continuer ») précède l'arrivée sur l'accueil déjà construit (header, barre de navigation, contenu par profil, placeholders testateur/organisateur inchangés).
- **Hors périmètre** : authentification réelle (compte, mot de passe, persistance en base) — reste hors périmètre du hackathon, comme déjà indiqué par le PRD ; les personas fictifs (Camille, Julien, Myriam, structure partenaire) disparaissent de l'écran d'entrée, remplacés par le choix direct de profil.
- **Critères d'acceptation** :
  - Étant donné l'application démarrée, quand le visiteur arrive sur `/`, alors il voit directement les 4 boutons de profil, et non une liste de personas à incarner.
  - Étant donné un profil choisi, quand le visiteur renseigne son nom et valide l'authentification simulée, alors il arrive sur l'accueil adapté à ce profil, inchangé par ailleurs.
  - Étant donné cette itération, alors le header, la barre de navigation et le contenu déjà construits pour chaque profil ne régressent pas.
- **Hypothèse de l'équipe couverte** : retour direct du cadreur (« la première page n'est pas forcément utile. L'objectif est de choisir son profil et de s'authentifier par la suite pour avoir un parcours qui colle au profil sélectionné »), clarifié avec le développeur : authentification simulée, écran de personas remplacé par le choix de profil direct.
- **Codage estimé** : 7 minutes.
- **Fichiers prévus** : `frontend/src/app/page.tsx` (nouvel enchaînement des écrans), `frontend/src/app/page.module.css` (styles du formulaire d'authentification), `frontend/src/app/personas.ts` (retrait de `PERSONAS`/`trouverPersona`, devenus inutiles ; `PROFILS`/`estProfilDisponible` conservés). (~3 fichiers)
- **Tests unitaires prévus** : 1 à 2, sur la validation du formulaire d'authentification simulée (ex. `peutContinuer(nom)` refuse un nom vide ou blanc).
- **Étapes ajoutées à la démo** : ouverture de l'app → choix direct du profil PARTICULIER → authentification simulée (nom renseigné) → arrivée sur l'accueil ; remplace l'étape actuelle « je choisis d'être le particulier (Camille) ».
- **Bilan** : _à remplir en fin d'itération (durée de codage réelle, dépassement éventuel, fait, reporté, modifications fichier par fichier)_

---

## Itération 6 : La page particulier réelle (3 arguments du PRD)

- **Dans le périmètre** : quand le profil actif est PARTICULIER, l'accueil affiche les 3 arguments du scénario idéal du PRD (`cadrage/7-prd.md`, `cadrage/6-plan-de-livraison.md`) au lieu du placeholder — réduction d'impôt liée au don, valorisation de l'engagement personnel et solidaire, présentation des niveaux de fidélité (texte statique, pas le niveau réellement atteint) — suivis d'un bouton « Accéder au don », inerte comme « FAIRE UN DON » (itération 4) : pas de vrai lien iRaiser, non fourni dans la passation. S'appuie sur l'écran d'authentification simulée de l'itération 5, sans le modifier.
- **Hors périmètre** : lien réel vers iRaiser ; page de confirmation post-don avec niveau réellement atteint (« À venir ») ; compte donateur, CRM, pop-up de relance (hors périmètre du hackathon entier).
- **Critères d'acceptation** :
  - Étant donné le profil PARTICULIER actif, quand le visiteur regarde l'accueil, alors il voit les 3 arguments du PRD (réduction d'impôt, engagement personnel et solidaire, niveaux de fidélité), et plus le message « à venir ».
  - Étant donné cette page, alors un bouton « Accéder au don » est visible et visuellement proche du bouton « FAIRE UN DON » existant, sans lien réel (inerte).
  - Étant donné cette itération, alors ENTREPRISE, TESTATEUR et ORGANISATEUR gardent leur comportement actuel (pas de régression).
- **Hypothèse de l'équipe couverte** : étape 2 du plan de livraison de l'équipe (`cadrage/6-plan-de-livraison.md`), « Page particulier » — « le particulier voit uniquement ce qui le concerne, sans arguments destinés aux entreprises ».
- **Codage estimé** : 6 minutes.
- **Fichiers prévus** : `frontend/src/app/personas.ts` ou un nouveau `frontend/src/app/contenuProfils.ts` (les arguments par profil, séparés des personas), `frontend/src/app/page.tsx` (rendu conditionnel), `frontend/src/app/page.module.css`. (~3 fichiers)
- **Tests unitaires prévus** : 1 à 2, sur la fonction d'accès aux arguments par profil (ex. `argumentsDuProfil("particulier")` retourne exactement les 3 arguments attendus, dans le bon ordre, sans mélange avec ceux de l'entreprise).
- **Étapes ajoutées à la démo** : depuis l'accueil en profil particulier, vérification que les 3 arguments et le bouton « Accéder au don » sont visibles.
- **Bilan** : _à remplir en fin d'itération (durée de codage réelle, dépassement éventuel, fait, reporté, modifications fichier par fichier)_

---

## Itération 7 : La page entreprise réelle (RSE, fiscalité du mécénat, badges)

- **Dans le périmètre** : quand le profil actif est ENTREPRISE, l'accueil affiche les 3 arguments du scénario idéal du PRD pour ce profil — engagement RSE, avantages fiscaux du mécénat, badges de visibilité disponibles (texte statique, pas de badge réellement attribué) — suivis du même bouton « Accéder au don » inerte qu'en itération 6.
- **Hors périmètre** : lien réel vers iRaiser ; badges réellement attribués ou partageables sur les réseaux sociaux ; page de confirmation post-don (« À venir »).
- **Critères d'acceptation** :
  - Étant donné le profil ENTREPRISE actif, quand le visiteur regarde l'accueil, alors il voit les 3 arguments du PRD (RSE, avantages fiscaux du mécénat, badges de visibilité), et plus le message « à venir ».
  - Étant donné cette page, alors le bouton « Accéder au don » est visible, inerte comme en itération 6.
  - Étant donné cette itération, alors PARTICULIER, TESTATEUR et ORGANISATEUR gardent leur comportement (pas de régression, en particulier la page particulier de l'itération 6).
- **Hypothèse de l'équipe couverte** : étape 3 du plan de livraison de l'équipe, « Page entreprise » — « l'entreprise voit uniquement ce qui la concerne, sans arguments destinés aux particuliers ».
- **Codage estimé** : 5 minutes (réutilise la structure posée en itération 6).
- **Fichiers prévus** : `frontend/src/app/contenuProfils.ts` (ou `personas.ts` selon le choix fait en itération 6), `frontend/src/app/page.tsx`, `frontend/src/app/page.module.css` si besoin. (~2 à 3 fichiers)
- **Tests unitaires prévus** : 1, sur `argumentsDuProfil("entreprise")` (3 arguments attendus, pas de mélange avec particulier).
- **Étapes ajoutées à la démo** : depuis l'accueil en profil entreprise, vérification que les 3 arguments sont visibles.
- **Bilan** : _à remplir en fin d'itération (durée de codage réelle, dépassement éventuel, fait, reporté, modifications fichier par fichier)_

---

## À venir

1. Page de confirmation après le don, avec affichage statique du niveau de fidélité (étape 4 du scénario idéal du PRD, au-delà du simple bouton « Accéder au don » posé en itérations 6 et 7).
2. Contenu réel des profils testateur et organisateur (version suivante, hors hackathon sauf décision contraire des cadreurs — aucun argument n'est fourni dans la passation pour ces deux profils, à la différence de particulier/entreprise).
