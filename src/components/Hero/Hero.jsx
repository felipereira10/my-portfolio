import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Felipe Pereira</h1>
        <p className={styles.description}>
        I'm a Full-Stack Developer with over 1 year of experience building modern web applications using React, React-native and Node.js. I have hands-on experience with databases like MongoDB and MySQL, and I'm certified in Google Cloud. I also work with AWS services, and I actively use Python and TypeScript to develop scalable, high-performance solutions across the stack. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me!
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
