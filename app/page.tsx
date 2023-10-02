import styles from "./webpage.module.css";

export default function Home() {
  return (
    <>
      <section>
        <div style={{ width: "100%", height: "10em" }}></div>
        <p className={styles.plainText}>Luctus vitae.</p>
        <p className={styles.firstLevelTitle}>Utrum ut placerat nec, varius</p>
        <p className={styles.firstLevelTitle}>sit amet lacus</p>
        <div className="flex-container">
          <div className={`${styles.placeHolderBox} flex-container`}>
            &nbsp;
          </div>
          <div className={`${styles.placeHolderBox} flex-container`}>
            &nbsp;
          </div>
        </div>
      </section>
      <section>Section 2</section>
      <section>Section 3</section>
      <section>Section 4</section>
    </>
  );
}
