import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { maincolors } from "../../../GlobalStyled";

const SHeader = styled.div`
  width: 100%;
  padding: 20px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: ${maincolors.fontColor};
  }
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
`;
const LOGO = styled.div`
  font-size: 28px;
  font-weight: 700;
`;
const MenuWrap = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  li {
    margin-left: 200px;
  }
`;

export const Header = () => {
  return (
    <>
      <SHeader>
        <LOGO>
          <Link to={"/"}>LOGO</Link>
        </LOGO>
        <MenuWrap>
          <li>
            <Link to={"/menu/0"}>MENU1</Link>
          </li>
          <li>
            <Link to={"/menu/1"}>MENU2</Link>
          </li>
          <li>
            <Link to={"/menu/2"}>MENU3</Link>
          </li>
        </MenuWrap>
      </SHeader>
    </>
  );
};
