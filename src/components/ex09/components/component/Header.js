import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { useState } from "react";

const SHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 20px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Silder = styled.div`
  background-color: white;
  color: #333;
`;
const Menu = styled.div`
  border: 1px solid white;
`;
const HiddenMenu = styled.div`
  width: 100%;
  height: 667px;
  background-color: #ccc;
  position: absolute;
  top: ${(props) => props.$isActive};
  left: 0;
  display: flex;
  justify-content: space-between;
  transition: 0.5s;
  div {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 20px 15px;
    font-size: 20px;
  }
`;
const Plofile = styled.div`
  background-color: #333;
`;
const Close = styled.div`
  color: #333;
  border: 3px solid #333;
  cursor: pointer;
`;

export const Header = () => {
  const [active, setActive] = useState("100%");

  return (
    <>
      <SHeader>
        <Silder>
          <FontAwesomeIcon icon={faChevronDown} />
        </Silder>
        <Menu onClick={() => setActive("0")}>
          <FontAwesomeIcon icon={faBars} />
        </Menu>
      </SHeader>
      <HiddenMenu $isActive={active}>
        <Plofile>
          <FontAwesomeIcon icon={faUser} />
        </Plofile>
        <Close onClick={() => setActive("100%")}>
          <FontAwesomeIcon icon={faXmark} />
        </Close>
      </HiddenMenu>
    </>
  );
};
