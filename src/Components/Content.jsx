import Calculators from "./Calculators";
import Formatters from "./Formatters";
import BankFeatures from "./BankFeatures";
import NewFeatures from "./NewFeatures"

const Content = () => {
  return (
    <>
      <div
        className="container"
        style={{ alignContent: "flex-start", margin: "24px 0 0 24px" }}
      >        <div className="row">          <div className="col-sm" style={{ paddingLeft: "0" }}>
            <Calculators />
            <br />
            <BankFeatures />
            <br />
            <NewFeatures />

          </div>
          <div className="col-sm" style={{ paddingLeft: "0" }}>
            <Formatters />
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
