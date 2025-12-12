import styles from "./Experience.module.css";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experienceList = [
    {
      role: "Desarrollador Full Stack",
      company: "Servinnova",
      period: "Mar 2024 – Jun 2024",
      tasks: [
        "Desarrollo de módulos web tanto en frontend como en backend, utilizando principalmente Python y JavaScript.",
        "Mejoras de rendimiento y refactorización de código para facilitar el mantenimiento.",
        "Documentación técnica de los proyectos.",
        "Traducción de aplicaciones a otros idiomas.",
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
