export type Profil = "particulier" | "entreprise" | "testateur" | "organisateur";

export type Persona = {
  id: string;
  nom: string;
  role: string;
  profil: Profil;
};

// Les 4 profils du croquis sont représentés ici ; testateur et organisateur n'ont pas encore de contenu
// une fois choisis (placeholder « à venir », voir ITERATIONS.md et estProfilDisponible).
export const PERSONAS: Persona[] = [
  { id: "particulier", nom: "Camille", role: "Le particulier qui veut donner", profil: "particulier" },
  { id: "entreprise", nom: "Julien", role: "L'entreprise mécène", profil: "entreprise" },
  { id: "testateur", nom: "Myriam", role: "La personne qui envisage un legs", profil: "testateur" },
  { id: "organisateur", nom: "Une structure partenaire", role: "Organise une collecte", profil: "organisateur" },
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
