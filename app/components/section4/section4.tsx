import React from "react";
import styles from "./section4.module.css";

export default function Section4() {
  return (
    <div>
      <section className="dark-section">
        <div id={styles.sectionFourHeader}>&nbsp;</div>
        <div
          className={`${styles.reverseFlex} flex-container justify-evenly px-6`}
        >
          <div className={`${styles.flexItem} placeholder-box`}>&nbsp;</div>
          <div className={`${styles.flexItem} placeholder-box`}>&nbsp;</div>
          <div className={`${styles.flexText}`}>
            <p className="titleTwo">
              Proin enim enim, tincidunt consequat sollicitudin.
            </p>
          </div>
        </div>
        <div id={styles.sectionFourFooter}>&nbsp;</div>
      </section>
    </div>
  );
}
