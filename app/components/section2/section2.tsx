import styles from "./section2.module.css";
import { useMediaQuery } from "react-responsive";
import DesktopFlex from "./flexes/DesktopFlex";
import MobileFlex from "./flexes/MobileFlex";
import TabletFlex from "./flexes/TabletFlex";
import AppSettings from "@/app/appSettings";

export default function Section2() {
  // the view is for desktop, tablet, or mobilephone devices
  const isDesktop = useMediaQuery({
    query: `(min-width: ${AppSettings.MIN_DESKTOP_WIDTH})`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width: ${AppSettings.MIN_TABLET_WIDTH}) and (max-width: ${AppSettings.MAX_TABLET_WIDTH})`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${AppSettings.MAX_MOBILE_WIDTH})`,
  });

  return (
    <div>
      <section className="my-2">
        <div id={`${styles.sectionTwoHeader}`}></div>
        <div className="flex-container justify-center">
          <div
            className="flex-col items-center flex-container"
            id={`${styles.sectionTwoTextBox}`}
          >
            <div className={styles.title}>
              <p className="titleTwo text-center">
                Suspendisse tincidunt vulputate ex, a laoreet neque luctus
                vitae.
              </p>
            </div>
            <div className="my-2 py-2">
              <p className="plainText text-center">
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
        <div id={`${styles.sectionTwoWaist}`}></div>
        {isDesktop && <DesktopFlex />}
        {isTablet && <TabletFlex />}
        {isMobile && <MobileFlex />}
        <div id={`${styles.sectionTwoFooter}`}></div>
      </section>
    </div>
  );
}
