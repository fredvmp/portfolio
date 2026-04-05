import React from "react";
import styles from "./Skills.module.css";

// Imports SVG
import reactIcon from "../../../src/assets/icons/react-original.svg";
import typescriptIcon from "../../../src/assets/icons/typescript-original.svg";
import javaIcon from "../../../src/assets/icons/java-original.svg";
import pythonIcon from "../../../src/assets/icons/python-original.svg";
import mysqlIcon from "../../../src/assets/icons/mysql-original.svg";
import mongoIcon from "../../../src/assets/icons/mongodb-original.svg";
import gitIcon from "../../../src/assets/icons/git-original.svg";
import githubIcon from "../../../src/assets/icons/github-original.svg";
import flaskIcon from "../../../src/assets/icons/flask-original.svg";
import springIcon from "../../../src/assets/icons/spring-original.svg";
import html5Icon from "../../../src/assets/icons/html5-original.svg";
import css3Icon from "../../../src/assets/icons/css3-original.svg";
import postgresqlIcon from "../../../src/assets/icons/postgresql-original.svg";
import oracleIcon from "../../../src/assets/icons/oracle-original.svg";
import vscodeIcon from "../../../src/assets/icons/vscode-original.svg";
import jiraIcon from "../../../src/assets/icons/jira-original.svg";
import javascriptIcon from "../../../src/assets/icons/javascript-original.svg";
import nodejsIcon from "../../../src/assets/icons/nodejs-original.svg";
import androidstudioIcon from "../../../src/assets/icons/androidstudio-original.svg";
import kotlinIcon from "../../../src/assets/icons/kotlin-original.svg";
import mavenIcon from "../../../src/assets/icons/maven-original.svg";
import junitIcon from "../../../src/assets/icons/junit-original.svg";
import pytestIcon from "../../../src/assets/icons/pytest-original.svg";
import pandasIcon from "../../../src/assets/icons/pandas-original.svg";
import powerbiIcon from "../../assets/icons/powerbi-original.svg";


import SkillCategory from "./SkillCategory";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: reactIcon },
        { name: "TypeScript", icon: typescriptIcon },
        { name: "HTML5", icon: html5Icon },
        { name: "CSS3", icon: css3Icon },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: pythonIcon },
        { name: "Flask", icon: flaskIcon },
        { name: "Pandas", icon: pandasIcon },
        { name: "Kotlin", icon: kotlinIcon },
        { name: "Java", icon: javaIcon },
        { name: "Spring", icon: springIcon },
        { name: "JavaScript", icon: javascriptIcon },
        { name: "Node.js", icon: nodejsIcon },
      ],
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "MongoDB", icon: mongoIcon },
        { name: "PostgreSQL", icon: postgresqlIcon },
        { name: "Oracle", icon: oracleIcon },
        { name: "MySQL", icon: mysqlIcon },
      ],
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Pytest", icon: pytestIcon },
        { name: "JUnit", icon: junitIcon },
        { name: "Git", icon: gitIcon },
        { name: "GitHub", icon: githubIcon },
        { name: "PowerBi", icon: powerbiIcon },
        { name: "Maven", icon: mavenIcon },
        { name: "VS Code", icon: vscodeIcon },
        { name: "Jira", icon: jiraIcon },
      ],
    },
  ];

  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>Tecnologías</h2>
      <div className={styles.grid}>
        {skillCategories.map((cat) => (
          <SkillCategory
            key={cat.title}
            title={cat.title}
            skills={cat.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
