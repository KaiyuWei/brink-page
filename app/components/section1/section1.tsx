import React from "react";
import styles from "./section1.module.css";

export default function Section1() {
  return (
    <div>
      <div id={styles.sectionOneHeader}>&nbsp;</div>
      <div>
        <p className="plain-text">Luctus vitae.</p>
        <h1 className="title-1">Utrum ut placerat nec, varius</h1>
        <p className="title-1">sit amet lacus</p>
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
