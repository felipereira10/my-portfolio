import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t("about.title")}</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.webp")}
          className={styles.aboutImage}
          alt="About"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.frontend.title")}</h3>
              <p>{t("about.frontend.desc")}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.backend.title")}</h3>
              <p>{t("about.backend.desc")}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.ui.title")}</h3>
              <p>{t("about.ui.desc")}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};