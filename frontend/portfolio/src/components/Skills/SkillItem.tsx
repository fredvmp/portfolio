import React from "react";
import styles from "./Skills.module.css";

interface SkillItemProps {
  name: string;
  icon?: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon }) => {
  return (
    <div className={styles.skillItem}>
      {icon && <img src={icon} alt={name} className={styles.icon} />}
      <span>{name}</span>
    </div>
  );
};

export default SkillItem;
