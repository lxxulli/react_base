import { styled } from "styled-components";

const SMainMusic = styled.div`
  text-align: center;
`;
const MainImg = styled.div`
  width: 230px;
  height: 250px;
  margin: 10px auto 0;
  background-color: #ccc;
  border-radius: 20px;
`;
const MainWrap = styled.div`
  margin: 27px 0;
`;
const MainName = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const MainSubName = styled.h4`
  font-size: 15px;
`;

export const MainMusic = () => {
  return (
    <>
      <SMainMusic>
        <MainImg></MainImg>
        <MainWrap>
          <MainName>Blue bird</MainName>
          <MainSubName>Pick Dreams</MainSubName>
        </MainWrap>
      </SMainMusic>
    </>
  );
};
