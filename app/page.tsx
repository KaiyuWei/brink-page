import styles from "./webpage.module.css";

export default function Home() {
  return (
    <>
      <section className="my-2">
        <div style={{ width: "100%", height: "10em" }}></div>
        <div>
          <p className={styles.plainText}>Luctus vitae.</p>
          <h1 className={styles.firstLevelTitle}>
            Utrum ut placerat nec, varius
          </h1>
          <p className={styles.firstLevelTitle}>sit amet lacus</p>
        </div>
        <div className="flex-container">
          <div className={`${styles.placeHolderBox} flex-container`}>
            &nbsp;
          </div>
          <div className={`${styles.placeHolderBox} flex-container`}>
            &nbsp;
          </div>
        </div>
      </section>
      <section className="my-2">
        <div style={{ width: "100%", height: "8em" }}></div>
        <div className="flex-col justify-center">
          <h6 className={`${styles.secondLevelTitle} text-center`}>
            Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.
          </h6>
          <div className="my-2 py-2">
            <p className={`${styles.plainText} text-center`}>
              Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.
              Quisque maximus ante sapien, at pharetra sem sagittis eu. Maecenas
              nibh leo, interdum ac malesuada quis, tempus vel lacus.{" "}
              <div>
                <br />
              </div>
              Aliquam quis velit et nunc scelerisque auctor quis id lacus. Proin
              sem turpis, rutrum ut placerat nec, varius sit amet lacus.
              Praesent sed viverra lorem.
            </p>
          </div>
        </div>
      </section>
      <section>Section 3</section>
      <section>Section 4</section>
    </>
  );
}
