import "./Content.css";
import Calculators from "./Calculators";

const Content = () => {
  return (
    <>
      <div
        className="container"
        style={{ alignContent: "flex-start", margin: "24px 0 0 24px" }}
      >
        <div className="row">
          <div className="col-sm" style={{ paddingLeft: "0" }}>
            <Calculators />
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
