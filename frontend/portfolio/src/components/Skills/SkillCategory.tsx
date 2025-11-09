import React from "react";
import styles from "./Skills.module.css";
import SkillItem from "./SkillItem";

interface SkillCategoryProps {
  title: string;
  skills: { name: string; icon?: string }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className={styles.category}>
      <h3>{title}</h3>
      <div className={styles.categoryGrid}>
        {skills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
