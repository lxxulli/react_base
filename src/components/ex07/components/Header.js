import { styled } from "styled-components";
import { maincolors } from "../../../GlobalStyled";

const SHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const LOGO = styled.div`
  font-size: 24px;
  font-weight: 900;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    margin-left: 20px;
    a {
      color: ${maincolors.fontColor};
      &:hover {
        color: ${maincolors.pointColor};
      }
    }
  }
  /* 상위 코드처럼 현재 컴포넌트의 자식 태그를 선택할 수 있음 */
`;

export const Header = () => {
  return (
    <SHeader>
      <LOGO>LOGO</LOGO>
      <Menu>
        <li>
          <a href="#">menu</a>
        </li>
        <li>
          <a href="#">menu</a>
        </li>
        <li>
          <a href="#">menu</a>
        </li>
      </Menu>
    </SHeader>
  );
};
