import styled from "styled-components";
import pages from "../navigation/pages";
import { useNavigate } from "react-router-dom";

export const StyledH6 = styled.h6`
  border: 3px solid #ffffff;
  padding: 10px 5px;
  background: #2a52be;
  color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: max-content;
  font-weight: bolder;
  font-size: 16px;
`;
export const StyledA = styled.a`
  padding-left: 12px;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
`;
const Calculators = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <StyledH6>Calculate</StyledH6>
        <StyledA
          onClick={() => {
            navigate(pages.HIKE_CALCULATOR);
          }}
        >
          Calculate salary hike by percentage
        </StyledA>
        <br />
        <StyledA
          onClick={() => {
            navigate(pages.WORK_EXPERIENCE_CALCULATOR);
          }}
        >
          Work experience calculator
        </StyledA>
        <br />
        <StyledA
          onClick={() => {
            navigate(pages.FIND_AGE);
          }}
        >
          Age calculator
        </StyledA>
        <br />
        <StyledA
          onClick={() => {
            navigate(pages.GRATUATY_CALCULATOR);
          }}
        >
          Gratuity Calculator
        </StyledA>
        <br />
        <StyledA
          onClick={() => {
            navigate(pages.EMI_CALCULATOR);
          }}
        >
          EMI Calculator
        </StyledA>
      </div>
    </>
  );
};
export default Calculators;
