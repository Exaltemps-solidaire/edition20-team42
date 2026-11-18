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

// Authentification simulée (itération 5, retour cadreur) : pas de mot de passe, rien persisté.
export function peutContinuer(nom: string): boolean {
  return nom.trim().length > 0;
}
