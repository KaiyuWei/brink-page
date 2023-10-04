import React from "react";
import styles from "../section3.module.css";

export default function DesktopFlex() {
  return (
    <div>
      <div className={styles.textContainer}>
        <div className={`${styles.flexTextTitle}`}>
          <p className="titleTwo">
            Proin enim enim, tincidunt consequat sollicitudin.
          </p>
        </div>
        <div className={`${styles.flexText}`}>
          <p className="plainText">
            Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel
            leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet
            pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam ac.
            Pellentesque non augue ullamcorper arcu facilisis bibendum. Nulla
            quis tincidunt turpis. Sed quis erat arcu.
            <br />
            <br />
            Phasellus gravida felis quis ex mattis, sed suscipit tellus
            tincidunt. In imperdiet dapibus vehicula. In auctor nec nibh
            vestibulum ornare. Morbi porta, enim hendrerit consectetur ultrices,
            libero dui ultricies libero, vel rutrum sem magna quis augue. Nulla
            quis magna at lorem sodales gravida.
          </p>
        </div>
      </div>
      <div className={styles.moveRightContainer}>
        <div className={`placeholder-box ${styles.flexItem}`} />
      </div>
      <div className={styles.moveLeftContainer}>
        <div
          className={`placeholder-box ${styles.flexItem} ${styles.darker}`}
        ></div>
      </div>
    </div>
  );
}
