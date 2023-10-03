import "./section1.css";

export default function Section1() {
  return (
    <div>
      <div style={{ width: "100%", height: "10em" }}></div>
      <div>
        <p className="plainText">Luctus vitae.</p>
        <h1 className="firstLevelTitle">Utrum ut placerat nec, varius</h1>
        <p className="firstLevelTitle">sit amet lacus</p>
      </div>
      <div className="flex-container">
        <div
          className="placeHolderBox flex"
          style={{ width: "57rem", height: "65rem", margin: "3rem 0rem" }}
        >
          &nbsp;
        </div>
        <div
          className="placeHolderBox flex"
          style={{ width: "57rem", height: "65rem", margin: "3rem 0rem" }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
}
