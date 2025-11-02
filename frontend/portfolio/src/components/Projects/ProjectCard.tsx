import { useState } from "react";
import styles from "./ProjectCard.module.css";

interface ProjectProps {
  title: string;
  description: string;
  type: string;
  images: string[];
  techs: string[];
  github: string;
  demo: string;
}

function ProjectCard({
  title,
  description,
  type,
  images,
  techs,
  github,
  demo,
}: ProjectProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.projectCard}>
      <div className={styles.imageArea}>
        <div className={styles.mainImageWrapper}>
          <img
            src={images[activeIndex]}
            alt={`${title} screenshot ${activeIndex + 1}`}
            className={styles.mainImage}
          />

          {/* Miniaturas laterales */}
          {images.length > 1 && (
            <div className={styles.miniatureColumn}>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${title} miniature ${index + 1}`}
                  className={`${styles.miniature} ${
                    index === activeIndex ? styles.activeMiniature : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.info}>
        <span className={styles.tag}>{type}</span>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className={styles.techIcons}>
          {techs.map((tech) => (
            <img
              key={tech}
              src={`../../../src/assets/icons/${tech}-original.svg`}
              alt={tech}
              title={tech}
              className={styles.techIcon}
            />
          ))}
        </div>

        <div className={styles.buttons}>
          {github && (
            <a
              href={github}
              target="_blank"
              className={styles.githubBtn}
            >
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              className={styles.demoBtn}
            >
              Probar ➚
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
