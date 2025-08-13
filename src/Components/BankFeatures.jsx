import pages from "../navigation/pages";
import { useNavigate } from "react-router-dom";
import { StyledH6, StyledA } from "./Calculators";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBankData } from "../ReduxStore/bankSlice";

const BankFeatures = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/public/bank_records.json") // path relative to the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(addBankData(data));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <div>
        <StyledH6>Banks</StyledH6>
        <StyledA
          onClick={() => {
            navigate(pages.ROI_Loans);
          }}
        >
          Rate of interest for Loans
        </StyledA>
        <br />

        <br />
      </div>
    </>
  );
};
export default BankFeatures;
