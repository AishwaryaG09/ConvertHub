import { useState } from "react";
import styled from "styled-components";
import formatNumber from "../../utils/formatNumber";

const StyledH1 = styled.h1`
  padding: 8px 8px;
  color: #2a52be;
`;
const StyleDiv = styled.div`
  padding: 12px;
  width: 60%;
`;
export const StyleButton = styled.button`
  border-radius: 4px;
  background: #2a52be;
  color: #ffffff;
  border: 1px solid #000000;
  margin-right: 14px;
  padding: 8px;
`;

const StyledP = styled.p`
  margin-bottom: 5px;
  color: #000000;
`;

const StyledP2 = styled.p`
  font-size: 24px;
  color: #000000;
`;

const HikeCalculator = () => {
  const [percent, setPercent] = useState();
  const [currentSalary, setCurrentSalary] = useState();
  const [increaseSalary, setIncreaseSalary] = useState();

  const findIncreaseSalary = () => {
    const increaseSalary = (currentSalary * percent) / 100;
    const TotalAmount = increaseSalary + Number(currentSalary);
    setIncreaseSalary(TotalAmount);
  };

  const reset = () => {
    setPercent();
    setCurrentSalary();
    setIncreaseSalary();
  };
  return (
    <>
      <StyledH1>Find new increased salary by Percentage</StyledH1>
      <StyleDiv>
        <StyledP>Current salary: </StyledP>
        <input
          type="number"
          id="currentSalary"
          name="currentSalary"
          style={{ width: "100%" }}
          value={Number(currentSalary) !== 0 && Number(currentSalary)}
          onChange={(e) => {
            setCurrentSalary(e.target.value);
          }}
        />
      </StyleDiv>
      <StyleDiv>
        <StyledP>Increase Percentage: </StyledP>
        <input
          type="number"
          id="percent"
          name="percent"
          style={{ width: "100%" }}
          value={Number(percent) !== 0 && Number(percent)}
          onChange={(e) => {
            setPercent(e.target.value);
          }}
        />
      </StyleDiv>
      <StyleDiv>
        <StyleButton
          onClick={() => {
            findIncreaseSalary();
          }}
        >
          Calculate
        </StyleButton>
        <StyleButton
          onClick={() => {
            reset();
          }}
        >
          Reset
        </StyleButton>
      </StyleDiv>
      <StyleDiv>
        <StyledP2>
          New increased Salary :{" "}
          {increaseSalary && formatNumber(increaseSalary)}
        </StyledP2>
      </StyleDiv>
    </>
  );
};

export default HikeCalculator;
