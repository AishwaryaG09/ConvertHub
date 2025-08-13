import styled from "styled-components";
import { StyleButton } from "./Calculators_SubComponent/FindAge";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import pages from "../navigation/pages";

const Wrapper = styled.section`
  display: flex;
  color: #ffffff;
  background: linear-gradient(180deg, #00bfff 0%, #2a52be 100%);
  padding: 10px 0 10px 40px;
  font-size: 50px;
  font-weight: bolder;
`;

const StyledButton2 = styled(StyleButton)`
  font-size: 12px;
  height: fit-content;
  align-self: center;
  max-width: max-content;
  padding: 4px;
`;
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper className="HeaderTitle">
        <div style={{ display: "flex", width: "90%" }}>
          <>ConvertHub</>
        </div>
        <div style={{}}>
          <StyledButton2
            onClick={() => {
              navigate(pages.HOME);
            }}
          >
            Menu
          </StyledButton2>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
