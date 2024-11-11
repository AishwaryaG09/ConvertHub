// function render()
import styled from "styled-components";
import './Header.css'
// background: #00bfff;
const Wrapper = styled.section`
  color: #ffffff;
  background: linear-gradient(180deg, #00bfff 0%, #2a52be 100%);
  padding: 10px 0 10px 40px;
  font-size: 50px;
  font-weight: bolder;
`;
const Header = () => {
  return (
    <>
      <Wrapper className="HeaderTitle">ConvertHub</Wrapper>
    </>
  );
};

export default Header;
