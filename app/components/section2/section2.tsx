import styles from "./section2.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";

export default function Section2() {
  // the view is for desktop of mobile devices
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div>
      <section className="my-2">
        <div style={{ width: "100%", height: "8em" }}></div>
        <div className="flex-container justify-center">
          <div
            className="flex-col items-center flex-container"
            id={`${styles.sectionTwoTextBox}`}
          >
            <div className={styles.title}>
              <p className="title-2 text-center">
                Suspendisse tincidunt vulputate ex, a laoreet neque luctus
                vitae.
              </p>
            </div>
            <div className="my-2 py-2">
              <p className="plain-text text-center">
                Suspendisse tincidunt vulputate ex, a laoreet neque luctus
                vitae. Quisque maximus ante sapien, at pharetra sem sagittis eu.
                Maecenas nibh leo, interdum ac malesuada quis, tempus vel lacus.
                <br />
                <br />
                Aliquam quis velit et nunc scelerisque auctor quis id lacus.
                Proin sem turpis, rutrum ut placerat nec, varius sit amet lacus.
                Praesent sed viverra lorem.
              </p>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: "8em" }}></div>
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
        <div style={{ width: "100%", height: "11em" }}></div>
      </section>
    </div>
  );
}
