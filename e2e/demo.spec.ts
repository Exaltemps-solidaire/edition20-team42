import { expect, test } from "@playwright/test";

// Démo du cas passant, de bout en bout. Chaque itération ajoute ses étapes (test.step).
test("Démo : le cas passant", async ({ page }) => {
  await test.step("J'ouvre l'application et je vois le mock du vrai site", async () => {
    await page.goto("/");
    await expect(page.getByText("Imagine for Margo")).toHaveCount(1);
    await expect(page.getByRole("button", { name: "Se connecter" })).toBeVisible();
  });

  await test.step("Je clique sur Se connecter et j'arrive sur le choix de profil", async () => {
    await page.getByRole("button", { name: "Se connecter" }).click();
    await expect(page.getByText("Choisissez votre profil")).toBeVisible();
  });

  await test.step("Je choisis le profil particulier et je me connecte", async () => {
    await page.getByRole("button", { name: "PARTICULIER", exact: true }).click();
    await page.getByLabel("Votre nom").fill("Camille");
    await page.getByRole("button", { name: "Se connecter" }).click();
    await expect(page.getByRole("button", { name: /Se déconnecter/ })).toBeVisible();
  });

  await test.step("Je ne vois que mon profil dans le header, pas les 3 autres", async () => {
    await expect(page.getByRole("banner").getByText("PARTICULIER", { exact: true })).toBeVisible();
    await expect(page.getByRole("banner").getByRole("button", { name: "TESTATEUR" })).toHaveCount(0);
  });

  await test.step("Je ne vois qu'un seul header, avec « Imagine for Margo » une seule fois", async () => {
    await expect(page.getByText("Imagine for Margo")).toHaveCount(1);
  });

  await test.step("Je vois les arguments du PRD pour le particulier et le bouton de don", async () => {
    await expect(page.getByText("Réduction d'impôt liée au don")).toBeVisible();
    await expect(page.getByRole("button", { name: "Accéder au don" })).toBeVisible();
  });

  await test.step("Je me déconnecte, je repasse par le mock, et je vois les arguments du PRD pour l'entreprise", async () => {
    await page.getByRole("button", { name: /Se déconnecter/ }).click();
    await expect(page.getByRole("button", { name: "Se connecter" })).toBeVisible();
    await page.getByRole("button", { name: "Se connecter" }).click();
    await page.getByRole("button", { name: "ENTREPRISE", exact: true }).click();
    await page.getByLabel("Votre nom").fill("Une entreprise partenaire");
    await page.getByRole("button", { name: "Se connecter" }).click();
    await expect(page.getByText("Engagement RSE")).toBeVisible();
    await expect(page.getByRole("button", { name: "Accéder au don" })).toBeVisible();
  });

  await test.step("Je me déconnecte et je regarde le profil TESTATEUR, sans contenu pour l'instant", async () => {
    await page.getByRole("button", { name: /Se déconnecter/ }).click();
    await page.getByRole("button", { name: "Se connecter" }).click();
    await page.getByRole("button", { name: "TESTATEUR" }).click();
    await page.getByLabel("Votre nom").fill("Julien");
    await page.getByRole("button", { name: "Se connecter" }).click();
    await expect(page.getByText("Cette page arrive dans une prochaine version.")).toBeVisible();
  });

  await test.step("Je me déconnecte et je choisis le profil organisateur", async () => {
    await page.getByRole("button", { name: /Se déconnecter/ }).click();
    await page.getByRole("button", { name: "Se connecter" }).click();
    await page.getByRole("button", { name: "ORGANISATEUR", exact: true }).click();
    await page.getByLabel("Votre nom").fill("Une structure partenaire");
    await page.getByRole("button", { name: "Se connecter" }).click();
    await expect(page.getByText("Cette page arrive dans une prochaine version.")).toBeVisible();
  });
});
