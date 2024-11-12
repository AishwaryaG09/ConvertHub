import { useState } from "react";
import styled from "styled-components";

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

export const StyledInput = styled.input`
  border-color: ${(props) => (props.isError ? "red" : "#000000")};
  width: 150px;
  height: 38px;
`;

const FindAge = () => {
  const [DOB, setDOB] = useState();
  const [error, setError] = useState(false);
  const [age, setAge] = useState();

  const findTheAge = () => {
    if (!DOB) {
      setError(true);
    } else {
      setError(false);
      const startDate = new Date(DOB);
      const endDate = new Date();

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

      return setAge({ years, months, days });
    }
  };

  const onDOBChange = (e) => {
    setDOB(e.target.value);
    if (e.target.value) {
      setError(false);
    }
  };

  const reset = () => {
    setDOB("");
    setError(false);
    setAge();
  };

  return (
    <>
      <StyledH1>Get your age</StyledH1>
      <StyleDiv>
        <StyledP>Date of Birthday: </StyledP>
        <StyledInput
          type="date"
          id="DOB"
          name="DOB"
          value={DOB}
          isError={error}
          max={new Date().toISOString().split("T")[0]}
          onChange={(e) => {
            onDOBChange(e);
          }}
        />
        {error && (
          <span id="error-msg" style={{ color: "red" }}>
            Please select date
          </span>
        )}
      </StyleDiv>

      <StyleDiv>
        <StyleButton
          onClick={() => {
            findTheAge();
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
          Your age is:
          {age &&
            ` ${age.years} years, ${age.months} months, and ${age.days} days.`}
        </StyledP2>
      </StyleDiv>
    </>
  );
};

export default FindAge;
