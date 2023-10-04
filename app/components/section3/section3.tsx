import React from "react";
import styles from "./section3.module.css";
import { useMediaQuery } from "react-responsive";
import DesktopFlex from "./flexes/DesktopFlex";
import MobileFlex from "./flexes/MobileFlex";
import AppSettings from "@/app/appSettings";

export default function Section3() {
  // media query to determine the rendering result
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
      <section className="dark-section">
        <div style={{ width: "100%", height: "8rem" }}>&nbsp;</div>
        {/* desplay for different media type */}
        {(isDesktop || isTablet) && <DesktopFlex />}
        {isMobile && <MobileFlex />}
        <div className={styles.whiteLine}></div>
      </section>
    </div>
  );
}
