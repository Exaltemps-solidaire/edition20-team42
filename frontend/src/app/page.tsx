"use client";

import { useState } from "react";
import { PROFILS, argumentsDuProfil, estProfilDisponible, peutContinuer, type Profil } from "./personas";
import styles from "./page.module.css";

const RUBRIQUES = ["L'ASSOCIATION", "LES COURSES", "LE CANCER DES ENFANTS", "LA RECHERCHE", "NOUS AIDER"];

type Etape = "mock" | "profil" | "connecte";

function SiteHeader({ actions }: { actions?: React.ReactNode }) {
  return (
    <header className={styles.header}>
      <img className={styles.marque} src="/logo-imagine-for-margo.svg" alt="Imagine for Margo" />
      <ul className={styles.rubriques}>
        {RUBRIQUES.map((rubrique) => (
          <li key={rubrique}>{rubrique}</li>
        ))}
      </ul>
      <div className={styles.headerActions}>{actions}</div>
    </header>
  );
}

function BoutonFaireUnDon({ versDon, onDemanderProfil }: { versDon: boolean; onDemanderProfil: () => void }) {
  if (versDon) {
    return (
      <a className={styles.faireUnDon} href="#don">
        FAIRE UN DON
      </a>
    );
  }
  return (
    <button className={styles.faireUnDon} onClick={onDemanderProfil}>
      FAIRE UN DON
    </button>
  );
}

function BarreProfil({ profil, nom, onDeconnexion }: { profil: Profil; nom: string; onDeconnexion: () => void }) {
  return (
    <div className={styles.barreProfil}>
      <span className={styles.profilActif}>{PROFILS.find((p) => p.id === profil)?.etiquette}</span>
      <button className={styles.changerPersona} onClick={onDeconnexion}>
        Se déconnecter ({nom})
      </button>
    </div>
  );
}

export default function Home() {
  const [etape, setEtape] = useState<Etape>("mock");
  const [profilChoisi, setProfilChoisi] = useState<Profil | null>(null);
  const [nom, setNom] = useState("");
  const [profilActif, setProfilActif] = useState<Profil>("particulier");

  if (etape === "mock") {
    return (
      <div className={styles.page}>
        <SiteHeader
          actions={
            <>
              <BoutonFaireUnDon versDon={false} onDemanderProfil={() => setEtape("profil")} />
              <button className={styles.changerPersona} onClick={() => setEtape("profil")}>
                Se connecter
              </button>
            </>
          }
        />
        <main className={styles.main}>
          <h1>Mobilisons-nous contre le cancer des enfants</h1>
          <p>Connectez-vous pour accéder à votre parcours, adapté à votre profil.</p>
        </main>
      </div>
    );
  }

  if (etape === "profil") {
    return (
      <div className={styles.page}>
        <SiteHeader actions={<BoutonFaireUnDon versDon={false} onDemanderProfil={() => setEtape("profil")} />} />
        <main className={styles.main}>
          <h1>Choisissez votre profil</h1>
          <p>Sélectionnez le profil qui vous correspond pour accéder à votre parcours.</p>
          <ul className={styles.personas}>
            {PROFILS.map((p) => (
              <li key={p.id}>
                <button
                  className={profilChoisi === p.id ? styles.profilActif : styles.personaBouton}
                  onClick={() => setProfilChoisi(p.id)}
                >
                  {p.etiquette}
                </button>
              </li>
            ))}
          </ul>
          {profilChoisi && (
            <form
              className={styles.authForm}
              onSubmit={(e) => {
                e.preventDefault();
                if (peutContinuer(nom)) {
                  setProfilActif(profilChoisi);
                  setEtape("connecte");
                }
              }}
            >
              <label htmlFor="nom">Votre nom</label>
              <input id="nom" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Votre nom" />
              <button type="submit" disabled={!peutContinuer(nom)}>
                Se connecter
              </button>
            </form>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <BarreProfil
        profil={profilActif}
        nom={nom}
        onDeconnexion={() => {
          setEtape("mock");
          setProfilChoisi(null);
          setNom("");
        }}
      />
      <SiteHeader
        actions={
          <BoutonFaireUnDon versDon={Boolean(argumentsDuProfil(profilActif))} onDemanderProfil={() => setEtape("profil")} />
        }
      />
      <main className={styles.main}>
        <h1>Mobilisons-nous contre le cancer des enfants</h1>
        {argumentsDuProfil(profilActif) ? (
          <>
            <p>Bonjour {nom}. Voici pourquoi votre don compte :</p>
            <ul className={styles.arguments}>
              {argumentsDuProfil(profilActif)!.map((argument) => (
                <li key={argument}>{argument}</li>
              ))}
            </ul>
            <section id="don" className={styles.sectionDon}>
              <p>Formulaire de don (iRaiser) — lien à intégrer dès que l&apos;association nous le fournit.</p>
            </section>
          </>
        ) : estProfilDisponible(profilActif) ? (
          <p>
            Bonjour {nom}. La page adaptée au profil {profilActif} arrive dans une prochaine itération.
          </p>
        ) : (
          <p>Cette page arrive dans une prochaine version.</p>
        )}
      </main>
    </div>
  );
}
