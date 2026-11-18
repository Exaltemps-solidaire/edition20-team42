import { expect, test } from "@playwright/test";

// Démo du cas passant, de bout en bout. Chaque itération ajoute ses étapes (test.step).
test("Démo : le cas passant", async ({ page }) => {
  await test.step("J'ouvre l'application", async () => {
    await page.goto("/");
    await expect(page.locator("body")).toBeVisible();
  });

  await test.step("Je choisis le profil particulier et je m'authentifie", async () => {
    await page.getByRole("button", { name: "PARTICULIER", exact: true }).click();
    await page.getByLabel("Votre nom").fill("Camille");
    await page.getByRole("button", { name: "Continuer" }).click();
    await expect(page.getByRole("button", { name: /Se déconnecter/ })).toBeVisible();
  });

  await test.step("Je vois la barre de navigation du site, fidèle au croquis", async () => {
    await expect(page.getByText("Imagine for Margo").last()).toBeVisible();
    await expect(page.getByRole("button", { name: "FAIRE UN DON" })).toBeVisible();
  });

  await test.step("Je regarde le profil TESTATEUR, sans contenu pour l'instant", async () => {
    await page.getByRole("button", { name: "TESTATEUR" }).click();
    await expect(page.getByText("Cette page arrive dans une prochaine version.")).toBeVisible();
  });

  await test.step("Je me déconnecte et je choisis le profil organisateur", async () => {
    await page.getByRole("button", { name: /Se déconnecter/ }).click();
    await page.getByRole("button", { name: "ORGANISATEUR", exact: true }).click();
    await page.getByLabel("Votre nom").fill("Une structure partenaire");
    await page.getByRole("button", { name: "Continuer" }).click();
    await expect(page.getByText("Cette page arrive dans une prochaine version.")).toBeVisible();
  });
});
