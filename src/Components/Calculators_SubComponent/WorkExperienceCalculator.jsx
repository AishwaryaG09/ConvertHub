import { useState } from "react";
import {
  StyledInput,
  StyleButton,
  StyleDiv,
  StyledP,
  StyledH1,StyledP2
} from "./FindAge";

const WorkExperienceCalculator = () => {
  const [DOJ, setDOJ] = useState();
  const [LWD, setLWD] = useState();
  const [Output, setOutput] = useState();
  const [DOJError, setDOJError] = useState(false);
  const [LWDError, setLWDError] = useState(false);

  const findTotalExperience = () => {
    if (!DOJ) {
      setDOJError(true);
    } else if (!LWD) {
      setLWDError(true);
    } else {
      setDOJError(false);
      setLWDError(false);
      const startDate = new Date(DOJ);
      const endDate = new Date(LWD);

      // Calculate the year difference
      let years = endDate.getFullYear() - startDate.getFullYear();

      // Calculate the month difference
      let months = endDate.getMonth() - startDate.getMonth();

      // Calculate the day difference
      let days = endDate.getDate() - startDate.getDate();

      // Adjust months and years if necessary
      if (days < 0) {
        months -= 1;
        days += new Date(
          endDate.getFullYear(),
          endDate.getMonth(),
          0
        ).getDate(); // days in the previous month
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      return setOutput({ years, months, days });
    }
  };
  const onDOJChange = (e) => {
    setDOJ(e.target.value);
    if (e.target.value) {
      setDOJError(false);
    }
  };
  const onLWDChange = (e) => {
    setLWD(e.target.value);

    if (e.target.value) {
      setLWDError(false);
    }
  };
  const reset = () => {
    setDOJ("");
    setLWD("");
    setOutput("");
    setDOJError(false);
    setLWDError(false);
  };

  return (
    <>
      <StyledH1>Work experience</StyledH1>
      <StyleDiv>
        <StyledP>Date of joining: </StyledP>
        <StyledInput
          type="date"
          id="DOJ"
          name="DOJ"
          value={DOJ}
          isError={DOJError}
          max={new Date().toISOString().split("T")[0]}
          onChange={(e) => {
            onDOJChange(e);
          }}
        />
        {DOJError && (
          <span id="error-msg" style={{ color: "red" }}>
            Please select date
          </span>
        )}
      </StyleDiv>
      <StyleDiv>
        <StyledP>Last working day: </StyledP>
        <StyledInput
          type="date"
          id="LWD"
          name="LWD"
          isError={LWDError}
          value={LWD}
          max={new Date().toISOString().split("T")[0]}
          onChange={(e) => {
            onLWDChange(e);
          }}
        />
        {LWDError && (
          <span id="error-msg" style={{ color: "red" }}>
            Please select date
          </span>
        )}
      </StyleDiv>
      <StyleDiv>
        <StyleButton
          onClick={() => {
            findTotalExperience();
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
          Total Experience :
          {Output &&
            ` ${Output.years} years, ${Output.months} months, and ${Output.days} days.`}
        </StyledP2>
      </StyleDiv>
    </>
  );
};

export default WorkExperienceCalculator;
