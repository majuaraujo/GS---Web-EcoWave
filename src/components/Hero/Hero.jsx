import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>EcoWave, conecta você a vida marinha</h1>
        <p className={styles.description}>
          Imagine um futuro onde os oceanos não apenas sobrevivem, mas
          prosperam, sustentando uma biodiversidade rica e saudável, enquanto
          impulsionam economias e protegem comunidades costeiras.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contate-nos
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
