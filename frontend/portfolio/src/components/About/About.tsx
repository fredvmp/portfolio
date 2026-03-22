import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <h2>Sobre mí</h2>
      <p>
        Para mí, el análisis de datos va más allá de generar gráficos, es
        entender la historia que cuentan los registros y asegurar su integridad
        desde la base. Me apasiona diseñar flujos de información donde el orden
        y la estructura técnica se traducen en decisiones de negocio
        acertadas.{" "}
      </p>{" "}
      <br />
      <p>
        Mi fuerte reside en el ecosistema de datos: desde el diseño de modelos
        relacionales optimizados hasta la limpieza profunda con Python y Pandas.
        Disfruto diseccionando queries complejas, afinando el rendimiento de las
        consultas SQL y transformando datos en bruto en "insights" accionables.
        Creo firmemente que un análisis de valor solo es posible si nace de una
        estructura sólida, un procesamiento riguroso y una mentalidad orientada
        a la mejora continua del dato.
      </p>
    </section>
  );
};

export default About;
