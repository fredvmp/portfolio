import React from "react";
import profile from "../../assets/profile.png";
import styles from "./Hero.module.css";
import cvFile from "../../assets/ALFREDO TORTUERO CV.pdf";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <img src={profile} alt="Foto de perfil" className={styles.photo} />

        {/* Información personal */}
        <h1>Alfredo Tortuero</h1>
        <h2>Desarrollador Full Stack Junior</h2>
        <p>Apasionado por las BBDD pensar más texto.</p>

        {/* Botones */}
        <div className={styles.buttonsContainer}>
          <a
            href="https://www.linkedin.com/in/alfredo-tortuero-carretero-9b9297366/"
            target="_blank"
            className={`${styles.button} ${styles.socialBtn}`}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/fredvmp"
            target="_blank"
            className={`${styles.button} ${styles.socialBtn}`}
          >
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
