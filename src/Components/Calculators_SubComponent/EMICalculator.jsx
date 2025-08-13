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

const EMICalculator = () => {
  // PA= Principal ammount
  // ROI= Rate Of Interest
  // LT= Loan tenure in Years
  const [PA, setPA] = useState();
  const [ROI, setROI] = useState();
  const [LT, setLT] = useState();
  const [EMIAmount, setEMIAmount] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [totalInterest, setTotalInterest] = useState();

  const [PAError, setPAError] = useState(false);
  const [ROIError, setROIError] = useState(false);
  const [LTError, setLTError] = useState(false);

  const findEMIAmount = () => {
    if (!PA) {
      setPAError(true);
    } else if (!ROI) {
      setROIError(true);
    } else if (!LT) {
      setLTError(true);
    } else {
      // const multiplyBottom = PA * ROI
      const monthlyInterestRate = Number(ROI) / 12 / 100;

      // Convert tenure from years to months
      const tenureMonths = Number(LT) * 12;

      // EMI Calculation formula
      const emi =
        (Number(PA) *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, tenureMonths)) /
        (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);

      // Convert EMI from string to a number
      const monthlyEMI = parseFloat(emi);

      const totalPayment = monthlyEMI * tenureMonths;
      setTotalAmount(totalPayment);
      // Calculate total interest paid
      const totalInterestAmt = totalPayment - Number(PA);
      setTotalInterest(totalInterestAmt);
      setEMIAmount(emi);
    }
  };
  const onPAChange = (e) => {
    setPA(Number(e.target.value));
    if (e.target.value) {
      setPAError(false);
    }
  };
  const onROIChange = (e) => {
    setROI(Number(e.target.value));

    if (e.target.value) {
      setROIError(false);
    }
  };
  const onLTChange = (e) => {
    setLT(Number(e.target.value));

    if (e.target.value) {
      setLTError(false);
    }
  };
  const reset = () => {
    setPA();
    setROI();
    setLT();
    setEMIAmount();
    setTotalAmount();
    setTotalInterest();
    setPAError(false);
    setROIError(false);
    setLTError(false);
  };

  const data = [
    { label: "Loan Amount", value: PA },
    { label: "Rate of Interest (Per annum)", value: ROI },
    { label: "Loan tenure in Years", value: LT },
    { label: "Monthly EMI", value: formatNumber(Math.floor(EMIAmount)) },
    { label: "Total interest", value: formatNumber(Math.floor(totalInterest)) },
    {
      label: "Total amount of Repay",
      value: formatNumber(Math.floor(totalAmount)),
    },
  ];

  const downloadPDF = () => {
    downloadAsPDF({
      title: "Loan EMI Calculated Summary",
      filename: "loan-summary.pdf",
      data,
    });
  };

  return (
    <>
      <StyledH1>EMI Calculator</StyledH1>
      <StyleDiv>
        <StyledP>Loan Amount: </StyledP>
        <StyledInput
          type="number"
          id="PA"
          name="PA"
          isError={PAError}
          style={{ width: "100%" }}
          value={Number(PA) !== 0 && Number(PA)}
          onChange={(e) => {
            onPAChange(e);
          }}
        />
        {PAError && (
          <span id="error-msg" style={{ color: "red" }}>
            Please add the Loan amount
          </span>
        )}
      </StyleDiv>
      <StyleDiv>
        <StyledP>Rate of Interest (Per annum): </StyledP>
        <StyledInput
          type="number"
          id="ROI"
          name="ROI"
          isError={ROIError}
          style={{ width: "100%" }}
          value={Number(ROI) !== 0 && Number(ROI)}
          onChange={(e) => {
            onROIChange(e);
          }}
        />
        {ROIError && (
          <span id="error-msg" style={{ color: "red" }}>
            Please add Rate of Interest
          </span>
        )}
      </StyleDiv>
      <StyleDiv>
        <StyledP>Loan tenure in Years: </StyledP>
        <StyledInput
          type="number"
          id="LT"
          name="LT"
          isError={LTError}
          style={{ width: "100%" }}
          value={Number(LT) !== 0 && Number(LT)}
          onChange={(e) => {
            onLTChange(e);
          }}
        />
        {LTError && (
          <span id="error-msg" style={{ color: "red" }}>
            Please add Loan tenure in Years
          </span>
        )}
      </StyleDiv>
      <StyleDiv>
        <StyleButton
          onClick={() => {
            findEMIAmount();
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
        <StyledP2>Loan amount :{PA && formatNumber(Math.floor(PA))}</StyledP2>
        <StyledP2>
          Monthly EMI :{EMIAmount && formatNumber(Math.floor(EMIAmount))}
        </StyledP2>
        <StyledP2>
          Total interest :
          {totalInterest && formatNumber(Math.floor(totalInterest))}
        </StyledP2>
        <StyledP2>
          Total amount of Repay :
          {totalAmount && formatNumber(Math.floor(totalAmount))}
        </StyledP2>
      </StyleDiv>
    </>
  );
};

export default EMICalculator;
