"use client";
import React from "react";
import styles from "./webpage.module.css";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";

export default function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <section className="dark-section">Section 4</section>
    </div>
  );
}
