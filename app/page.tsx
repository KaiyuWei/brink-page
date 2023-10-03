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
          <div
            className={`${styles.placeHolderBox} flex`}
            style={{ width: "57rem", height: "65rem", margin: "3rem 0rem" }}
          >
            &nbsp;
          </div>
          <div
            className={`${styles.placeHolderBox} flex`}
            style={{ width: "57rem", height: "65rem", margin: "3rem 0rem" }}
          >
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
              nibh leo, interdum ac malesuada quis, tempus vel lacus.
              <div>
                <br />
              </div>
              Aliquam quis velit et nunc scelerisque auctor quis id lacus. Proin
              sem turpis, rutrum ut placerat nec, varius sit amet lacus.
              Praesent sed viverra lorem.
            </p>
          </div>
        </div>
        <div className="flex-container flex-row justify-center">
          <div className="flex-col">
            <div
              className={`${styles.placeHolderBox} flex`}
              style={{ width: "35rem", height: "23rem", margin: "3rem 0rem" }}
            ></div>
            <div
              className={`${styles.placeHolderBox} flex`}
              style={{ width: "35rem", height: "23rem", margin: "3rem 0rem" }}
            ></div>
          </div>
          <div
            className={`${styles.placeHolderBox} flex`}
            style={{ width: "35rem", height: "49rem", margin: "3rem 0rem" }}
          ></div>
          <div className="flex-col">
            <div
              className={`${styles.placeHolderBox} flex`}
              style={{ width: "35rem", height: "23rem", margin: "3rem 0rem" }}
            ></div>
            <div
              className={`${styles.placeHolderBox} flex`}
              style={{ width: "35rem", height: "23rem", margin: "3rem 0rem" }}
            ></div>
          </div>
        </div>
      </section>
      <section className="dark-section">
        <div style={{ width: "100%", height: "8rem" }}>&nbsp;</div>
        <div className="flex-container">
          <div className="flex flex-row">
            <h6 className={`${styles.secondLevelTitle} basis-1/2 flex-wrap`}>
              Proin enim enim, tincidunt consequat sollicitudin.
            </h6>
            <p className={`${styles.plainText} basis-1/2 flex-wrap`}>
              Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel
              leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet
              pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam
              ac. Pellentesque non augue ullamcorper arcu facilisis bibendum.
              Nulla quis tincidunt turpis. Sed quis erat arcu.
              <div>
                <br />
              </div>
              Phasellus gravida felis quis ex mattis, sed suscipit tellus
              tincidunt. In imperdiet dapibus vehicula. In auctor nec nibh
              vestibulum ornare. Morbi porta, enim hendrerit consectetur
              ultrices, libero dui ultricies libero, vel rutrum sem magna quis
              augue. Nulla quis magna at lorem sodales gravida.
            </p>
          </div>
        </div>
      </section>
      <section className="dark-section">Section 4</section>
    </>
  );
}
