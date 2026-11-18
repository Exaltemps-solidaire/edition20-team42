export type Profil = "particulier" | "entreprise";

export type Persona = {
  id: string;
  nom: string;
  role: string;
  profil: Profil;
};

// Les acteurs de la version 1 : testateur et organisateur sont hors périmètre (voir ITERATIONS.md).
export const PERSONAS: Persona[] = [
  { id: "particulier", nom: "Camille", role: "Le particulier qui veut donner", profil: "particulier" },
  { id: "entreprise", nom: "Julien", role: "L'entreprise mécène", profil: "entreprise" },
];

export function trouverPersona(id: string): Persona | undefined {
  return PERSONAS.find((p) => p.id === id);
}
