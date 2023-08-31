import { styled } from "styled-components";
import { maincolors } from "../../../GlobalStyled";

const SSection = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0 30px 20px;
  font-size: 30px;
  font-weight: 900;
  color: ${maincolors.fontColor};
`;

const ConWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Con = styled.div`
  width: 180px;
  height: 180px;
  background-color: #333;
  &:hover {
    background-color: lightgray;
  }
  /* 자기 자신을 선택할 땐 &를 사용함 */
`;

export const Section = () => {
  return (
    <SSection>
      <Title>TITLE</Title>
      <ConWrap>
        <Con></Con>
        <Con></Con>
      </ConWrap>
    </SSection>
  );
};
