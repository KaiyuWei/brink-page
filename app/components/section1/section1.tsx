import React from "react";
import styles from "./section1.module.css";

export default function Section1() {
  return (
    <div>
      <div id={styles.sectionOneHeader}>&nbsp;</div>
      <div>
        <p className={`plainText ${styles.topText}`}>Luctus vitae.</p>
      </div>
      <div className={styles.topTitle}>
        <p className={`titleOne ${styles.titleOne}`}>
          Utrum ut placerat nec, varius sit amet lacus
        </p>
      </div>
      <div className={`${styles.twoBoxContainer}`}>
        <div
          className={`placeholder-box ${styles.flexItem} ${styles.left}`}
        ></div>
        <div className={`placeholder-box ${styles.flexItem} ${styles.right}`}>
          &nbsp;
        </div>
      </div>
    </div>
  );
}
