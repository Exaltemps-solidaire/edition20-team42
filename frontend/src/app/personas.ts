export type Profil = "particulier" | "entreprise" | "testateur" | "organisateur";

// Les 4 boutons du croquis de l'écran 1 : seuls particulier et entreprise ont un contenu en V1.
export const PROFILS: { id: Profil; etiquette: string }[] = [
  { id: "particulier", etiquette: "PARTICULIER" },
  { id: "entreprise", etiquette: "ENTREPRISE" },
  { id: "testateur", etiquette: "TESTATEUR" },
  { id: "organisateur", etiquette: "ORGANISATEUR" },
];

export function estProfilDisponible(profil: Profil): boolean {
  return profil === "particulier" || profil === "entreprise";
}

// Arguments du scénario idéal du PRD, par profil (cadrage/7-prd.md, cadrage/6-plan-de-livraison.md).
const ARGUMENTS_PAR_PROFIL: Partial<Record<Profil, string[]>> = {
  particulier: [
    "Réduction d'impôt liée au don",
    "Valorisation de l'engagement personnel et solidaire",
    "Présentation des niveaux de fidélité",
  ],
};

export function argumentsDuProfil(profil: Profil): string[] | undefined {
  return ARGUMENTS_PAR_PROFIL[profil];
}

// Authentification simulée (itération 5, retour cadreur) : pas de mot de passe, rien persisté.
export function peutContinuer(nom: string): boolean {
  return nom.trim().length > 0;
}
