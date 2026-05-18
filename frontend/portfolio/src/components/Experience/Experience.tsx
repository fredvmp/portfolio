import styles from "./Experience.module.css";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experienceList = [
    {
      role: "Python & Data Developer",
      company: "Servinnova",
      period: "Mar 2024 – Ago 2025",
      tasks: [
        "Desarrollo de lógica de servidor y APIs utilizando Python, asegurando una comunicación fluida entre el frontend y la base de datos.",
        "Optimización y creación de consultas SQL complejas mediante el uso de CTEs y window functions, reduciendo los tiempos de respuesta.",
        "Diseño e implementación de pipelines de procesamiento de datos con Pandas y NumPy para la limpieza, normalización y transformación de grandes volúmenes de información.",
        "Revisión y optimización de aplicaciones ya en funcionamiento para que fueran más rápidas y fáciles de ampliar en el futuro.",
        "Colaboración en la arquitectura de datos para Business Intelligence, garantizando la integridad de la información para su posterior visualización en herramientas como Power BI.",
      ],
    },
    {
      role: "Técnico de TI",
      company: "Triodos Bank",
      period: "Mar 2022 – Jun 2022",
      tasks: [
        "Asistencia técnica a empleados y clientes, resolviendo incidencias de hardware y software.",
        "Gestión y mantenimiento del inventario de equipos informáticos, asegurando su correcto funcionamiento.",
        "Configuración, instalación y mantenimiento preventivo de sistemas.",
        "Colaboré con el equipo de IT para mejorar la organización del soporte y reducir tiempos de respuesta.",
      ],
    },
  ];

  return (
    <section className={styles.experienceSection} id="experience">
      <h2 className={styles.title}>Experiencia</h2>

      <div className={styles.list}>
        {experienceList.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
