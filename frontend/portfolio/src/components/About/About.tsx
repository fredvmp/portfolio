import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <h2>Sobre mí</h2>
      <p>
        Para mí, programar va más allá de escribir código; es entender cómo cada
        pieza encaja en un sistema coherente y funcional. Me gusta diseñar
        soluciones que combinen orden, propósito y una estructura que tenga
        sentido por dentro y por fuera.{" "}
      </p>{" "}
      <br />
      <p>
        Me apasiona el trabajo con bases de datos, tanto relacionales como no
        relacionales, desde el diseño del modelo hasta la creación de queries
        complejas y optimizadas. Disfruto analizando cómo fluyen los datos,
        afinando índices y consultas para lograr el máximo rendimiento. Creo que
        un buen sistema nace de una estructura sólida, un código claro y una
        mentalidad de mejora continua.
      </p>
    </section>
  );
};

export default About;
