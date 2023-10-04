import styles from "./section2.module.css";
import { useMediaQuery } from "react-responsive";
import DesktopFlex from "./flexes/DesktopFlex";
import MobileFlex from "./flexes/MobileFlex";
import DesktopSmallFlex from "./flexes/DesktopSmallFlex";

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
        {/* {isDesktopOrLaptop && <DesktopFlex />}
        {!isDesktopOrLaptop && <MobileFlex />} */}
        <DesktopSmallFlex />
        <div style={{ width: "100%", height: "11em" }}></div>
      </section>
    </div>
  );
}
