"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";

/**
 * @todo remove the media query!
 * @returns
 */
export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      <div>
        <h1>Device Test</h1>
        {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
        {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
      </div>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
