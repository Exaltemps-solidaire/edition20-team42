import { expect, test } from "@playwright/test";

// Démo du cas passant, de bout en bout. Chaque itération ajoute ses étapes (test.step).
test("Démo : le cas passant", async ({ page }) => {
  await test.step("J'ouvre l'application", async () => {
    await page.goto("/");
    await expect(page.locator("body")).toBeVisible();
  });

  await test.step("Je choisis d'être le particulier qui veut donner", async () => {
    await page.getByRole("button", { name: /Camille/ }).click();
    await expect(page.getByRole("button", { name: "PARTICULIER" })).toBeVisible();
  });

  await test.step("Je vois la barre de navigation du site, fidèle au croquis", async () => {
    await expect(page.getByText("Imagine for Margo").last()).toBeVisible();
    await expect(page.getByRole("button", { name: "FAIRE UN DON" })).toBeVisible();
  });

  await test.step("Je regarde le profil TESTATEUR, sans contenu pour l'instant", async () => {
    await page.getByRole("button", { name: "TESTATEUR" }).click();
    await expect(page.getByText("Cette page arrive dans une prochaine version.")).toBeVisible();
  });

  await test.step("Je reviens au choix de persona et je choisis la structure organisatrice", async () => {
    await page.getByRole("button", { name: /Changer de persona/ }).click();
    await page.getByRole("button", { name: /Une structure partenaire/ }).click();
    await expect(page.getByText("Cette page arrive dans une prochaine version.")).toBeVisible();
  });
});
