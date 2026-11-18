import { describe, expect, it } from "vitest";
import { PROFILS, argumentsDuProfil, estProfilDisponible, peutContinuer } from "./personas";

describe("PROFILS", () => {
  it("propose les 4 profils du croquis de l'écran 1", () => {
    expect(PROFILS.map((p) => p.id).sort()).toEqual([
      "entreprise",
      "organisateur",
      "particulier",
      "testateur",
    ]);
  });
});

describe("estProfilDisponible", () => {
  it("est vrai pour particulier et entreprise", () => {
    expect(estProfilDisponible("particulier")).toBe(true);
    expect(estProfilDisponible("entreprise")).toBe(true);
  });

  it("est faux pour testateur et organisateur, sans contenu en V1", () => {
    expect(estProfilDisponible("testateur")).toBe(false);
    expect(estProfilDisponible("organisateur")).toBe(false);
  });
});

describe("peutContinuer", () => {
  it("est faux pour un nom vide ou blanc", () => {
    expect(peutContinuer("")).toBe(false);
    expect(peutContinuer("   ")).toBe(false);
  });

  it("est vrai pour un nom renseigné", () => {
    expect(peutContinuer("Camille")).toBe(true);
  });
});

describe("argumentsDuProfil", () => {
  it("renvoie les 3 arguments du PRD pour le particulier, sans mélange avec l'entreprise", () => {
    expect(argumentsDuProfil("particulier")).toEqual([
      "Réduction d'impôt liée au don",
      "Valorisation de l'engagement personnel et solidaire",
      "Présentation des niveaux de fidélité",
    ]);
  });

  it("renvoie undefined pour l'entreprise, le testateur et l'organisateur (pas encore de contenu)", () => {
    expect(argumentsDuProfil("entreprise")).toBeUndefined();
    expect(argumentsDuProfil("testateur")).toBeUndefined();
    expect(argumentsDuProfil("organisateur")).toBeUndefined();
  });
});
