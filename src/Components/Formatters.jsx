import pages from "../navigation/pages";
import { useNavigate } from "react-router-dom";
import { StyledH6, StyledA } from "./Calculators";

const Formatters = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <StyledH6>Formatters</StyledH6>
        <StyledA
          onClick={() => {
            navigate(pages.JSON_FORMATTER);
          }}
        >
          Json Formatter
        </StyledA>
        <br />
        <StyledA
          onClick={() => {
            navigate(pages.XML_FORMATTER);
          }}
        >
          XML Formatter
        </StyledA>
        <br />
      </div>
    </>
  );
};
export default Formatters;
