import styles from "../section2.module.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function MobileFlex() {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://picsum.photos/id/35/5000/3333" />
        </div>
        <img src="https://picsum.photos/id/1/5000/3333" />
        <div className={styles.carouselImg}>
          <img src="https://fastly.picsum.photos/id/227/560/780.jpg?hmac=Itg52EbSgUK99Q6Pw6tWslBDDdjrRTmbgvdXU6mpSrw" />
        </div>
        <img src="https://picsum.photos/id/23/5000/3333" />
        <img src="https://picsum.photos/id/12/5000/3333" />
      </Carousel>
    </div>
  );
}
