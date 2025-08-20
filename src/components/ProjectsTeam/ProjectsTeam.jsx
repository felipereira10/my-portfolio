import React from "react";

import styles from "./ProjectsTeam.module.css";

import projectsTeam from "../../data/projectsTeam.json";
import { ProjectCardTeam } from "./ProjectCardTeam";

export const ProjectsTeam = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects Team</h2>
      <div className={styles.projects}>
        {projectsTeam.map((project, id) => {
          return <ProjectCardTeam key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
