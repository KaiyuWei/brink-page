import React from "react";
import styles from "../section3.module.css";

export default function MobileFlex() {
  return (
    <div>
      <div className="px-14 my-8 flex-container flex-row content-between">
        <div className={`${styles.flexTextTitle}`}>
          <p className="title-2">
            Proin enim enim, tincidunt consequat sollicitudin.
          </p>
        </div>
        <div className={`${styles.flexText}`}>
          <p className="my-20 plain-text">
            Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel
            leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet
            pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam ac.
            Pellentesque non augue ullamcorper arcu facilisis bibendum. Nulla
            quis tincidunt turpis. Sed quis erat arcu. Phasellus gravida felis
            quis ex mattis, sed suscipit tellus tincidunt. In imperdiet dapibus
            vehicula. In auctor nec nibh vestibulum ornare. Morbi porta, enim
            hendrerit consectetur ultrices, libero dui ultricies libero, vel
            rutrum sem magna quis augue. Nulla quis magna at lorem sodales
            gravida.
          </p>
        </div>
      </div>
      <div className="px-14 my-8 flex-container flex-row content-between">
        <div className={`placeholder-box ${styles.flexItem}`}></div>
        <div className={`${styles.flexText}`}>
          <p className="my-20 plain-text">
            Phasellus gravida felis quis ex mattis, sed suscipit tellus
            tincidunt. In imperdiet dapibus vehicula. In auctor nec nibh
            vestibulum ornare. Morbi porta, enim hendrerit consectetur ultrices,
            libero dui ultricies libero, vel rutrum sem magna quis augue. Nulla
            quis magna at lorem sodales gravida.
          </p>
        </div>
        <div
          className={`placeholder-box ${styles.flexItem} ${styles.darker}`}
        ></div>
      </div>
    </div>
  );
}
