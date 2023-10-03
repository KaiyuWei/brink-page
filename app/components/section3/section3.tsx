import "./section3.css";

export default function Section1() {
  return (
    <div>
      <section className="dark-section">
        <div style={{ width: "100%", height: "8rem" }}>&nbsp;</div>
        <div className="flex flex-wrap flex-row justify-between">
          <div className="basis-5/12">
            <h6 className="secondLevelTitle">
              Proin enim enim, tincidunt consequat sollicitudin.
            </h6>
          </div>
          <div className="basis-5/12">
            <p className="plainText">
              Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel
              leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet
              pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam
              ac. Pellentesque non augue ullamcorper arcu facilisis bibendum.
              Nulla quis tincidunt turpis. Sed quis erat arcu.
              <br />
              Phasellus gravida felis quis ex mattis, sed suscipit tellus
              tincidunt. In imperdiet dapibus vehicula. In auctor nec nibh
              vestibulum ornare. Morbi porta, enim hendrerit consectetur
              ultrices, libero dui ultricies libero, vel rutrum sem magna quis
              augue. Nulla quis magna at lorem sodales gravida.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
