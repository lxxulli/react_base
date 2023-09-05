import { styled } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  margin-bottom: 30px;
`;

const Wrap = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Con = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Mini = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.bgColor};
`;

export const StyleEx01 = () => {
  return (
    <>
      {/* <Box bgColor="seagreen"></Box>
      <Box bgColor="hotpink"></Box> */}

      <Wrap w="500px" h="500px" bgColor="seagreen">
        <Con w="300px" h="300px" bgColor="hotpink">
          <Mini bgColor="black"></Mini>
        </Con>
      </Wrap>
    </>
  );
};
