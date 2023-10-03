import "./section2.css";

export default function Section1() {
  return (
    <div>
      <section className="my-2">
        <div style={{ width: "100%", height: "8em" }}></div>
        <div className="flex-col justify-center">
          <h6 className="title-2 text-center">
            Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.
          </h6>
          <div className="my-2 py-2">
            <p className="plain-text text-center">
              Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.
              Quisque maximus ante sapien, at pharetra sem sagittis eu. Maecenas
              nibh leo, interdum ac malesuada quis, tempus vel lacus.
              <br />
              <br />
              Aliquam quis velit et nunc scelerisque auctor quis id lacus. Proin
              sem turpis, rutrum ut placerat nec, varius sit amet lacus.
              Praesent sed viverra lorem.
            </p>
          </div>
        </div>
        <div className="flex-row justify-center">
          <div className="flex">
            <div
              className="placeHoderBox"
              style={{ width: "35rem", height: "23rem", margin: "3rem 0rem" }}
            ></div>
            <div
              className="placeholder-box"
              style={{ width: "35rem", height: "23rem", margin: "3rem 0rem" }}
            ></div>
          </div>
          <div
            className="placeholder-box flex"
            style={{ width: "35rem", height: "49rem", margin: "3rem 0rem" }}
          ></div>
          <div className="flex">
            <div
              className="placeholder-box"
              style={{ width: "35rem", height: "23rem", margin: "3rem 0rem" }}
            ></div>
            <div
              className="placeholder-box"
              style={{ width: "35rem", height: "23rem", margin: "3rem 0rem" }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}
