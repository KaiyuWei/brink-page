import React from "react";
import styles from "./section1.module.css";

export default function Section1() {
  return (
    <div>
      <div id={styles.sectionOneHeader}>&nbsp;</div>
      <div>
        <p className={`plainText ${styles.topText}`}>Luctus vitae.</p>
      </div>
      <div className={`m-0 p-0 ${styles.topTitle}`}>
        <p className={`titleOne ${styles.titleOne}`}>
          Utrum ut placerat nec, varius sit amet lacus
        </p>
      </div>
      <div className="flex-container justify-between">
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
