import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProjectsTeam.module.css";

import projectsTeam from "../../data/projectsTeam.json";
import { ProjectCardTeam } from "./ProjectCardTeam";

export const ProjectsTeam = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="projects-team">
      <h2 className={styles.title}>{t("projectsTeam.title")}</h2>
      <div className={styles.projects}>
        {projectsTeam.map((project) => (
          <ProjectCardTeam key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
