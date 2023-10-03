import styles from "../section2.module.css";
import React from "react";

export default function DesktopFlex() {
  return (
    <div className="flex-container flex-row justify-center">
      <div className={styles.flexVertical}>
        <div className={`${styles.sideFlexItem} placeholder-box`}>
          <img src="https://picsum.photos/id/35/5000/3333" />
        </div>
        <div className={`${styles.sideFlexItem} placeholder-box`}>
          <img src="https://picsum.photos/id/1/5000/3333" />
        </div>
      </div>
      <div className={`${styles.middleFlexItem} placeholder-box`}>
        <img src="https://fastly.picsum.photos/id/227/560/780.jpg?hmac=Itg52EbSgUK99Q6Pw6tWslBDDdjrRTmbgvdXU6mpSrw" />
      </div>
      <div className={styles.flexVertical}>
        <div className={`${styles.sideFlexItem} placeholder-box`}>
          <img src="https://picsum.photos/id/23/5000/3333" />
        </div>
        <div className={`${styles.sideFlexItem} placeholder-box`}>
          <img src="https://picsum.photos/id/12/5000/3333" />
        </div>
      </div>
    </div>
  );
}
