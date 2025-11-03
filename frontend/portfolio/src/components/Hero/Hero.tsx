import React from "react";
import profile from "../../assets/profile.png";
import styles from "./Hero.module.css";
import cvFile from "../../assets/ALFREDO_TORTUERO_CV.pdf";
import linkedinIcon from "../../../src/assets/icons/linkedin-original.svg";
import githubIcon from "../../../src/assets/icons/github-original.svg";


const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <img src={profile} alt="Foto de perfil" className={styles.photo} />

        {/* Información personal */}
        <h1>Alfredo Tortuero</h1>
        <h2>Desarrollador Full Stack Junior</h2>
        <p>Amante de las bases de datos y apasionado por crear soluciones simples y eficientes</p>

        {/* Botones */}
        <div className={styles.buttonsContainer}>
          <a
            href="https://www.linkedin.com/in/alfredo-tortuero-carretero-9b9297366/"
            target="_blank"
            className={`${styles.button} ${styles.socialBtn}`}
          >
            <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
            LinkedIn
          </a>

          <a
            href="https://github.com/fredvmp"
            target="_blank"
            className={`${styles.button} ${styles.socialBtn}`}
          >
            <img src={githubIcon} alt="GitHub" className={styles.icon} />
            GitHub
          </a>

          <a
            href={cvFile}
            download
            className={`${styles.button} ${styles.cvBtn}`}
          >
            Descargar CV
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
