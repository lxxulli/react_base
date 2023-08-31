import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.div`
  padding: 20px 70px;
  background-color: seagreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const LOGO = styled.div`
  font-size: 25px;
  font-weight: 900;
`;
const Nav = styled.ul`
  display: flex;
  li {
    margin-left: 70px;
  }
`;

export const Header = () => {
  return (
    <>
      <SHeader>
        <LOGO>
          <Link to={"/"}>LOGO</Link>
        </LOGO>
        <Nav>
          <li>
            <Link to={"/menu01"}>menu1</Link>
          </li>
          <li>
            <Link to={"/menu02"}>menu2</Link>
          </li>
        </Nav>
      </SHeader>
    </>
  );
};
