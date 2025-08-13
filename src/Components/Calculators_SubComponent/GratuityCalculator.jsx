import { useState } from "react";
import formatNumber from "../../utils/formatNumber";
import downloadAsPDF from "../../utils/downloadAsPDF";
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

  const data = [
    { label: "Salary (Basic Pay)", value: Number(basicPay) },
    {
      label: "No.of Years Of Service (Min:5 Years)",
      value: Number(experience),
    },
    {
      label: "Calculated Gratuity",
      value: formatNumber(Math.floor(gratuityAmount)),
    },
  ];

  const downloadPDF = () => {
    downloadAsPDF({
      title: "Gratuity Calculated Summary",
      filename: "Gratuity-summary.pdf",
      data,
    });
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
          <StyleButton
          onClick={() => {
            downloadPDF();
          }}
        >
          Download Summary as PDF
        </StyleButton>
      </StyleDiv>
      <StyleDiv>
        <StyledP2>
          Calculated Gratuity :
          {gratuityAmount && formatNumber(Math.floor(gratuityAmount))}
        </StyledP2>
      </StyleDiv>
    </>
  );
};

export default GratuityCalculator;
