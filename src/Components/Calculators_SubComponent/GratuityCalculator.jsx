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

const GratuityCalculator = () => {
  const [experience, setExperience] = useState();
  const [basicPay, setBasicPay] = useState();
  const [basicPayError, setBasicPayError] = useState(false);
  const [experienceError, setExperienceError] = useState(false);
  const [gratuityAmount, setGratuityAmount] = useState();

  const findGratuityAmount = () => {
    if (!basicPay) {
      return setBasicPayError(true);
    } else if (!experience) {
      return setExperienceError(true);
    } else {
      setBasicPayError(false);
      setExperienceError(false);
      const amount = (15 * basicPay * experience) / 26;
      setGratuityAmount(amount);
    }
  };
  const onBPChange = (e) => {
    setBasicPay(e.target.value);
    if (e.target.value) {
      setBasicPayError(false);
    }
  };
  const onExpChange = (e) => {
    setExperience(e.target.value);

    if (e.target.value) {
      setExperienceError(false);
    }
  };
  const reset = () => {
    setBasicPay();
    setExperience();
    setGratuityAmount();
    setBasicPayError(false);
    setExperienceError(false);
  };
  return (
    <>
      <StyledH1>Find your Gratuity</StyledH1>
      <StyleDiv>
        <StyledP>Salary (Basic Pay): </StyledP>
        <StyledInput
          type="number"
          id="basicPay"
          name="basicPay"
          isError={basicPayError}
          style={{ width: "100%" }}
          value={Number(basicPay) !== 0 && Number(basicPay)}
          onChange={(e) => {
            onBPChange(e);
          }}
        />
        {basicPayError && (
          <span id="error-msg" style={{ color: "red" }}>
            Please add the basic pay
          </span>
        )}
      </StyleDiv>
      <StyleDiv>
        <StyledP>No.of Years Of Service (Min:5 Years): </StyledP>
        <StyledInput
          type="number"
          id="experience"
          name="experience"
          isError={experienceError}
          style={{ width: "100%" }}
          value={Number(experience) !== 0 && Number(experience)}
          onChange={(e) => {
            onExpChange(e);
          }}
        />
        {experienceError && (
          <span id="error-msg" style={{ color: "red" }}>
            Please add your experience
          </span>
        )}
      </StyleDiv>
      <StyleDiv>
        <StyleButton
          onClick={() => {
            findGratuityAmount();
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
          Gratuity Calculator :
          {gratuityAmount && formatNumber(Math.floor(gratuityAmount))}
        </StyledP2>
      </StyleDiv>
    </>
  );
};

export default GratuityCalculator;
