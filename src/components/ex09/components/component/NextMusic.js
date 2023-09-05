import { styled } from "styled-components";

const SNextMusic = styled.div`
  width: 90%;
  height: 60px;
  border-radius: 40px;
  background-color: white;
  margin: 20px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
  padding: 7px;
`;
const BatImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #dbdbdb;
`;
const NextMusicName = styled.div`
  margin-left: -60px;
`;
const Nextbtn = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #dbdbdb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NextMusic = () => {
  return (
    <>
      <SNextMusic>
        <BatImg></BatImg>
        <NextMusicName>NextMusinName</NextMusicName>
        <Nextbtn> ■ </Nextbtn>
      </SNextMusic>
    </>
  );
};
