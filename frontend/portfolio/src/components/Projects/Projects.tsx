import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";


function Projects() {
  const projects = [
    {
      title: "Hallowed Library (en desarrollo)",
      description:
        "Aplicación web Full Stack para la gestión y descubrimiento de libros, inspirada en Goodreads. Permitirá a los usuarios registrarse, valorar y reseñar lecturas, crear listas personalizadas y recibir recomendaciones. Implementa autenticación JWT y arquitectura REST.",
      type: "Full Stack",
      images: ["../../src/assets/hallowed_library_01.png", "../../src/assets/hallowed_library_02.png", "../../src/assets/hallowed_library_03.png", "../../src/assets/hallowed_library_04.png"],
      techs: ["react", "typescript", "css3", "spring", "java", "postgresql"],
      github: "https://github.com/fredvmp/hallowed-library",
      demo: "",
    },
    {
      title: "Ancient Chess",
      description:
        "Aplicación web interactiva que implementa renderizado dinámico del tablero y paneles laterales, control de turnos, detección de jaque mate, registro de piezas eliminadas y un historial de movimientos.",
      type: "Frontend",
      images: ["../../src/assets/ancient_chess_01.png", "../../src/assets/ancient_chess_02.png", "../../src/assets/ancient_chess_03.png"],
      techs: ["react", "typescript", "css3"],
      github: "https://github.com/fredvmp/ancient_chess",
      demo: "",
    },
  ];

  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.grid}>
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
          
        ))}
      </div>
    </section>
  );
}

export default Projects;
