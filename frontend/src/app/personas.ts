export type Profil = "particulier" | "entreprise" | "testateur" | "organisateur";

export type Persona = {
  id: string;
  nom: string;
  role: string;
  profil: Profil;
};

// Les acteurs de la version 1 : testateur et organisateur n'ont pas encore de persona ni de contenu (voir ITERATIONS.md).
export const PERSONAS: Persona[] = [
  { id: "particulier", nom: "Camille", role: "Le particulier qui veut donner", profil: "particulier" },
  { id: "entreprise", nom: "Julien", role: "L'entreprise mécène", profil: "entreprise" },
];

export function trouverPersona(id: string): Persona | undefined {
  return PERSONAS.find((p) => p.id === id);
}

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
