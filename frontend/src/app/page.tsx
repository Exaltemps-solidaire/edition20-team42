"use client";

import { useState } from "react";
import { PROFILS, argumentsDuProfil, estProfilDisponible, peutContinuer, type Profil } from "./personas";
import styles from "./page.module.css";

const RUBRIQUES = ["L'ASSOCIATION", "LES COURSES", "LE CANCER DES ENFANTS", "LA RECHERCHE", "NOUS AIDER"];

export default function Home() {
  const [profilChoisi, setProfilChoisi] = useState<Profil | null>(null);
  const [nom, setNom] = useState("");
  const [authentifie, setAuthentifie] = useState(false);
  const [profilActif, setProfilActif] = useState<Profil>("particulier");

  if (!authentifie) {
    return (
      <div className={styles.page}>
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
                  setAuthentifie(true);
                }
              }}
            >
              <label htmlFor="nom">Votre nom</label>
              <input id="nom" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Votre nom" />
              <button type="submit" disabled={!peutContinuer(nom)}>
                Continuer
              </button>
            </form>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.marque}>Imagine for Margo</span>
        <nav className={styles.profils}>
          {PROFILS.map((p) => (
            <button
              key={p.id}
              className={profilActif === p.id ? styles.profilActif : styles.profilBouton}
              onClick={() => setProfilActif(p.id)}
            >
              {p.etiquette}
            </button>
          ))}
        </nav>
        <button
          className={styles.changerPersona}
          onClick={() => {
            setAuthentifie(false);
            setProfilChoisi(null);
            setNom("");
          }}
        >
          Se déconnecter ({nom})
        </button>
      </header>
      <nav className={styles.siteNav} aria-label="Navigation du site (démo, liens inertes)">
        <span className={styles.siteLogo}>Imagine for Margo</span>
        <ul className={styles.rubriques}>
          {RUBRIQUES.map((rubrique) => (
            <li key={rubrique}>{rubrique}</li>
          ))}
        </ul>
        <button className={styles.faireUnDon}>FAIRE UN DON</button>
      </nav>
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
            <button className={styles.faireUnDon}>Accéder au don</button>
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
