import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t("projects.title")}</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
