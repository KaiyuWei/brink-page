import React from "react";
import styles from "./section3.module.css";
import { useMediaQuery } from "react-responsive";
import DesktopFlex from "./flexes/DesktopFlex";
import MobileFlex from "./flexes/MobileFlex";

export default function Section3() {
  // media query to determine the rendering result
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  return (
    <div>
      <section className="dark-section">
        <div style={{ width: "100%", height: "8rem" }}>&nbsp;</div>
        {/* desplay for desktops*/}
        {/* {isDesktopOrLaptop && <DesktopFlex />} */}
        {/* display for mobile devices*/}
        {/* {!isDesktopOrLaptop && <MobileFlex />} */}
        <DesktopFlex />
        <div className={styles.whiteLine}></div>
      </section>
    </div>
  );
}
