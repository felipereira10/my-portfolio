import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{t("hero.title")}</h2>
        <p className={styles.description}>
        {t("hero.description")}
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          {t("hero.contact")}
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroFelipe.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />


      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
