import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import chess01 from "../../assets/images/ancient_chess_01.png";
import chess02 from "../../assets/images/ancient_chess_02.png";
import chess03 from "../../assets/images/ancient_chess_03.png";
import library01 from "../../assets/images/hallowed_library_01.png";
import library02 from "../../assets/images/hallowed_library_02.png";
import library03 from "../../assets/images/hallowed_library_03.png";
import library04 from "../../assets/images/hallowed_library_04.png";
import library05 from "../../assets/images/hallowed_library_05.png";
import lib_back01 from "../../assets/images/lib_back_01.png";
import lib_back02 from "../../assets/images/lib_back_02.png";
import lib_back03 from "../../assets/images/lib_back_03.png";
import lib_back04 from "../../assets/images/lib_back_04.png";
import lib_back05 from "../../assets/images/lib_back_05.png";


function Projects() {
  const projects = [
    {
      title: "Reader-Insights",
      description:
        "Plataforma de procesamiento de datos diseñada para transformar registros transaccionales de lectura en insights estratégicos. El proyecto implementa un pipeline de datos (ETL) robusto utilizando Python y Pandas para la limpieza, normalización y cálculo de métricas de comportamiento de usuario. Construido bajo una arquitectura de capas (Routes, Services, Data Access), el sistema está optimizado para la escalabilidad y el análisis de grandes volúmenes de información. Se prioriza la integridad del dato mediante validaciones avanzadas, testing automatizado con Pytest y una gestión de errores que garantiza resultados fiables y accionables para la toma de decisiones.",
      
      type: "Backend",
      images: [lib_back01, lib_back02, lib_back03, lib_back04, lib_back05],
      techs: ["flask", "python", "pandas", "pytest", "powerbi", "postgresql"],
      github: "https://github.com/fredvmp/backend-library",
      demo: "",
    },


      {
      title: "Hallowed Library",
      description:
        "Aplicación web Full Stack para la gestión y descubrimiento de libros, inspirada en Goodreads. Permite a los usuarios registrarse, valorar y reseñar lecturas, crear listas personalizadas y recibir recomendaciones. Implementa autenticación JWT y arquitectura REST.",
      type: "Full Stack",
      images: [library01, library02, library03, library04, library05],
      techs: ["react", "typescript", "css3", "spring", "java", "postgresql"],
      github: "https://github.com/fredvmp/hallowed-library",
      demo: "",
    },


    {
      title: "Ancient Chess",
      description:
        "Aplicación web interactiva que implementa renderizado dinámico del tablero y paneles laterales, control de turnos, detección de jaque mate, registro de piezas eliminadas y un historial de movimientos.",
      type: "Frontend",
      images: [chess01, chess02, chess03],
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
