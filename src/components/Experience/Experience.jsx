import { useTranslation } from "react-i18next";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t("experience.title")}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, skillId) => (
            <div key={skillId} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, historyId) => (
            <li key={historyId} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>
                  {t(`experience.history.${historyId}.role`)},{" "}
                  {t(`experience.history.${historyId}.organisation`)}
                </h3>
                <p>
                  {t(`experience.history.${historyId}.startDate`)} -{" "}
                  {t(`experience.history.${historyId}.endDate`)}
                </p>
                <ul>
                  {historyItem.experiences.map((_, expId) => (
                    <li key={expId}>
                      {t(
                        `experience.history.${historyId}.experiences.${expId}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
