"use client";

import { useState } from "react";
import { PERSONAS, PROFILS, estProfilDisponible, trouverPersona, type Profil } from "./personas";
import styles from "./page.module.css";

const RUBRIQUES = ["L'ASSOCIATION", "LES COURSES", "LE CANCER DES ENFANTS", "LA RECHERCHE", "NOUS AIDER"];

export default function Home() {
  const [personaId, setPersonaId] = useState<string | null>(null);
  const [profilActif, setProfilActif] = useState<Profil>("particulier");

  const persona = personaId ? trouverPersona(personaId) : undefined;

  if (!persona) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Qui êtes-vous ?</h1>
          <p>Choisissez la personne que vous incarnez pour tester le site.</p>
          <ul className={styles.personas}>
            {PERSONAS.map((p) => (
              <li key={p.id}>
                <button
                  className={styles.personaBouton}
                  onClick={() => {
                    setPersonaId(p.id);
                    setProfilActif(p.profil);
                  }}
                >
                  {p.nom} — {p.role}
                </button>
              </li>
            ))}
          </ul>
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
        <button className={styles.changerPersona} onClick={() => setPersonaId(null)}>
          Changer de persona ({persona.nom})
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
        {estProfilDisponible(profilActif) ? (
          <p>
            Vous êtes connecté·e en tant que {persona.role.toLowerCase()}. La page adaptée au profil{" "}
            {profilActif} arrive dans une prochaine itération.
          </p>
        ) : (
          <p>Cette page arrive dans une prochaine version.</p>
        )}
      </main>
    </div>
  );
}
