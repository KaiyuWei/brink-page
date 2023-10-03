import React from "react";
import styles from "./section3.module.css";
import { useMediaQuery } from "react-responsive";
import DesktopFlex from "./flexes/desktopFlex";

export default function Section3() {
  // media query to determine the rendering result
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      <section className="dark-section">
        <div style={{ width: "100%", height: "8rem" }}>&nbsp;</div>
        {/* the section that desplays in desktop media size */}
        {isDesktopOrLaptop && <DesktopFlex />}
        <div className={styles.whiteLine}></div>
      </section>
    </div>
  );
}
