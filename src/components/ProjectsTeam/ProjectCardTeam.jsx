import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProjectCardTeam.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCardTeam = ({ project }) => {
  const { t } = useTranslation();
  const { id, imageSrc, skills, demo, source } = project;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${t(`projectsTeam.project${id}.title`)}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{t(`projectsTeam.project${id}.title`)}</h3>
      <p className={styles.description}>{t(`projectsTeam.project${id}.desc`)}</p>
      <ul className={styles.skills}>
        {skills.map((skill, idx) => (
          <li key={idx} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noreferrer">
          {t("projectsTeam.demo")}
        </a>
        <a href={source} className={styles.link} target="_blank" rel="noreferrer">
          {t("projectsTeam.source")}
        </a>
      </div>
    </div>
  );
};
