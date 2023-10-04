import React from "react";
import styles from "./section1.module.css";
import { useMediaQuery } from "react-responsive";
import AppSettings from "@/app/appSettings";
import DesktopFlex from "./flexes/DesktopFlex";
import MobileFlex from "./flexes/MobileFlex";

export default function Section1() {
  // determine if the media is a mobile phone now
  const isMobile = useMediaQuery({
    query: `(max-width: ${AppSettings.MAX_MOBILE_WIDTH})`,
  });

  return (
    <div>
      <div id={styles.sectionOneHeader}>&nbsp;</div>
      <div>
        <p className={`plainText ${styles.topText}`}>Luctus vitae.</p>
      </div>
      <div className={styles.topTitle}>
        <p className={`titleOne ${styles.titleOne}`}>
          Utrum ut placerat nec, varius sit amet lacus
        </p>
      </div>
      {isMobile ? <MobileFlex /> : <DesktopFlex />}
    </div>
  );
}
