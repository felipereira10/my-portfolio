import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW9uOHR3MjcwdHJraHh6NmV0NG9iMzA0MnFtc3c3d2M1YzRleTF2cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7bdpLxQhsSQdyog/giphy.webp"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a Frontend Developer skilled in building responsive, user-friendly websites. I focus on creating visually appealing interfaces and ensuring optimal performance across devices and browsers, while leveraging the latest frontend technologies and best practices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in developing fast, efficient backend systems and APIs, ensuring optimal performance and scalability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have conducted design research, crafted intuitive visual interfaces, and implemented responsive designs for optimal user experiences across all devices.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
