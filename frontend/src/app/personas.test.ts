import { describe, expect, it } from "vitest";
import { PERSONAS, trouverPersona } from "./personas";

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
