import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t("contact.title")}</h2>
        <p>{t("contact.subtitle")}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:felipe.pereira99@outlook.com">
            felipe.pereira99@outlook.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/felipe-pereira-638370172/">
            https://www.linkedin.com/in/felipe-pereira-638370172/
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/felipereira10">
            https://github.com/felipereira10
          </a>
        </li>
      </ul>
    </footer>
  );
};