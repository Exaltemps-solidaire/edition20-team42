import { describe, expect, it } from "vitest";
import { PERSONAS, estProfilDisponible, trouverPersona } from "./personas";

describe("trouverPersona", () => {
  it("retrouve un persona par son identifiant", () => {
    expect(trouverPersona("particulier")?.profil).toBe("particulier");
    expect(trouverPersona("entreprise")?.profil).toBe("entreprise");
  });

  it("renvoie undefined pour un identifiant inconnu", () => {
    expect(trouverPersona("testateur")).toBeUndefined();
  });

  it("ne propose que les profils couverts par la version 1", () => {
    expect(PERSONAS.map((p) => p.profil).sort()).toEqual(["entreprise", "particulier"]);
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
