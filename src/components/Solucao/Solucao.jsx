import React from "react";

import styles from "./Solucao.module.css";
import { getImageUrl } from "../../utils";

export const Solucao = () => {
  return (
    <section className={styles.container} id="solucao">
      <h2 className={styles.title}>Solução</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("solucao/solucaoImage.png")}
          alt="Sentado com o laptop"
          className={styles.solucaoImage}
        />
        <ul className={styles.solucaoItems}>
          <li className={styles.solucaoItem}>
            <img
              src={getImageUrl("solucao/cursorIcon.png")}
              alt="Cursor icon"
            />
            <div className={styles.solucaoItemText}>
              <h3>Montagem dos Sensores</h3>
              <p>
                Montar placas Arduino com sensores de pH, temperatura,
                salinidade e outros.<br></br>
                Ajustar os sensores para que possam coletar dados com precisão.
              </p>
            </div>
          </li>
          <li className={styles.solucaoItem}>
            <img
              src={getImageUrl("solucao/serverIcon.png")}
              alt="Server icon"
            />
            <div className={styles.solucaoItemText}>
              <h3>Infraestrutura</h3>
              <p>
                A instalação de sensores em locais estratégicos, como recifes de
                coral, zonas costeiras e estuários.<br></br>A configuração de
                boias de comunicação para coletar e transmitir informações de
                sensores subaquáticos.
              </p>
            </div>
          </li>
          <li className={styles.solucaoItem}>
            <img src={getImageUrl("solucao/cursorIcon.png")} alt="UI icon" />
            <div className={styles.solucaoItemText}>
              <h3>Desenvolvimento do App</h3>
              <p>
                Desenvolvimento de um aplicativo com interface amigável que
                permite observar os dados acumulados.<br></br>
                Implementação de recursos como alertas em tempo real, mapas
                interativos e relatórios personalizados.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
