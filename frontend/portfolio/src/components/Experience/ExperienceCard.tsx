import styles from "./ExperienceCard.module.css";

interface ExperienceProps {
  role: string;
  company: string;
  period: string;
  tasks: string[];
}

function ExperienceCard({ role, company, period, tasks }: ExperienceProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.role}>{role}</h3>
        <span className={styles.company}>{company}</span>
        <span className={styles.period}>{period}</span>
      </div>

      <ul className={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} className={styles.task}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
