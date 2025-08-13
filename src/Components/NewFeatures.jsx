import pages from "../navigation/pages";
import { useNavigate } from "react-router-dom";
import { StyledH6, StyledA } from "./Calculators";

const NewFeatures = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <StyledH6>New Features</StyledH6>
        <StyledA
          onClick={() => {
            navigate(pages.ToDoList);
          }}
        >
          To Do List
        </StyledA>
        <br />

        <br />
      </div>
    </>
  );
};
export default NewFeatures;
