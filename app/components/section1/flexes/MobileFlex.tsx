import styles from "../section1.module.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function MobileTwoBoxContainer() {
  return (
    <div>
      <Carousel showThumbs={false} dynamicHeight={true}>
        <img src="https://fastly.picsum.photos/id/892/700/815.jpg?hmac=wZfsXJYn-gDdyFimSYfDJ1wo0Y-6VtOlctXjQ1Zvn2E" />
        <img src="https://fastly.picsum.photos/id/137/600/690.jpg?hmac=yRDxJMbETe2xc4tHBINSwHwRnrY68udKYEgJhpTRQ1M" />
      </Carousel>
    </div>
  );
}
