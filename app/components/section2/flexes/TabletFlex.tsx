/** this is the flex box layout for tablet devices */
import styles from "../section2.module.css";
import React from "react";

export default function TabletFlex() {
  return (
    <div className="m-auto">
      <div className={`m-auto ${styles.flexRow}`}>
        <div className={`${styles.flexVertical}`}>
          <div className={`${styles.flexItem} ${styles.left}`}>
            <img src="https://fastly.picsum.photos/id/227/560/780.jpg?hmac=Itg52EbSgUK99Q6Pw6tWslBDDdjrRTmbgvdXU6mpSrw" />
          </div>
          <div className={`${styles.flexItem} ${styles.left}`}>
            <img src="https://picsum.photos/id/35/5000/3333" />
          </div>
        </div>
        <div className={`${styles.flexVertical}`}>
          <div className={`${styles.flexItem} ${styles.rightTop}`}>
            <img src="https://picsum.photos/id/1/5000/3333" />
          </div>

          <div className={`${styles.flexItem} ${styles.rightMiddle}`}>
            <img src="https://picsum.photos/id/23/5000/3333" />
          </div>
          <div className={`${styles.flexItem} ${styles.rightBottom}`}>
            <img src="https://picsum.photos/id/12/5000/3333" />
          </div>
        </div>
      </div>
    </div>
  );
}
