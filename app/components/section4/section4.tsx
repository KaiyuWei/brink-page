import React from "react";
import styles from "./section4.module.css";

export default function Section4() {
  return (
    <div>
      <section className="dark-section">
        <div style={{ width: "100%", height: "9rem" }}>&nbsp;</div>
        <div
          className={`${styles.reverseFlex} flex-container justify-evenly px-6`}
        >
          <div className={`${styles.flexItem} placeholder-box`}>&nbsp;</div>
          <div className={`${styles.flexItem} placeholder-box`}>&nbsp;</div>
          <div className={`${styles.flexItem}`}>
            <p className="title-2">
              Proin enim enim, tincidunt consequat sollicitudin.
            </p>
          </div>
        </div>
        <div style={{ width: "100%", height: "9rem" }}>&nbsp;</div>
      </section>
    </div>
  );
}
