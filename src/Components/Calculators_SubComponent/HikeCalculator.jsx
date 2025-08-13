import { useState } from "react";
import formatNumber from "../../utils/formatNumber";
import {
  StyledInput,
  StyleButton,
  StyleDiv,
  StyledP,
  StyledH1,
  StyledP2,
} from "./FindAge";

const HikeCalculator = () => {
  const [percent, setPercent] = useState();
  const [currentSalary, setCurrentSalary] = useState();
  const [increaseSalary, setIncreaseSalary] = useState();
  const [salaryError, setSalaryError] = useState(false);
  const [percentError, setEPercentError] = useState(false);
  const findIncreaseSalary = () => {
    if (!currentSalary) {
      return setSalaryError(true);
    } else if (!percent) {
      return setEPercentError(true);
    } else {
      const increaseSalary = (currentSalary * percent) / 100;
      const TotalAmount = increaseSalary + Number(currentSalary);
      setIncreaseSalary(TotalAmount);
    }
  };
  const onSalaryChange = (e) => {
    setCurrentSalary(e.target.value);
    if (e.target.value) {
      setSalaryError(false);
    }
  };
  const onPercentChange = (e) => {
    setPercent(e.target.value);

    if (e.target.value) {
      setEPercentError(false);
    }
  };
  const reset = () => {
    setPercent();
    setCurrentSalary();
    setIncreaseSalary();
    setSalaryError(false);
    setEPercentError(false);
  };
  return (
    <>
      <StyledH1>Find new increased salary by Percentage</StyledH1>
      <StyleDiv>
        <StyledP>Current salary: </StyledP>
        <StyledInput
          type="number"
          id="currentSalary"
          name="currentSalary"
          style={{ width: "100%" }}
          isError={salaryError}
          required
          value={Number(currentSalary) !== 0 && Number(currentSalary)}
          onChange={(e) => {
            onSalaryChange(e);
          }}
        />
        {salaryError && (
          <span id="error-msg" style={{ color: "red" }}>
            Please add your current salary
          </span>
        )}
      </StyleDiv>
      <StyleDiv>
        <StyledP>Increase Percentage: </StyledP>
        <StyledInput
          type="number"
          id="percent"
          name="percent"
          required
          isError={percentError}
          style={{ width: "100%" }}
          value={Number(percent) !== 0 && Number(percent)}
          onChange={(e) => {
            onPercentChange(e);
          }}
        />
        {percentError && (
          <span id="error-msg" style={{ color: "red" }}>
            Please add the increased Percentage pay
          </span>
        )}
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
          New increased Salary :
          {increaseSalary && formatNumber(Math.floor(increaseSalary))}
        </StyledP2>
      </StyleDiv>
      <StyleDiv>
        <StyledP2>
          Salary increased by amount :
          {increaseSalary &&
            formatNumber(increaseSalary - Number(currentSalary))}
        </StyledP2>
      </StyleDiv>
    </>
  );
};

export default HikeCalculator;
