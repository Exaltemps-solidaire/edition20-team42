import { describe, expect, it } from "vitest";
import { PROFILS, estProfilDisponible, peutContinuer } from "./personas";

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
