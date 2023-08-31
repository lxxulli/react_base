import { styled } from "styled-components";
import { useState } from "react";

const Box = styled.div`
  width: 500px;
  height: 500px;
  background-color: seagreen;
  position: relative;
  overflow: hidden;
`;
const Button = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
`;
const HiddenBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
  position: absolute;
  top: 0;
  right: -100%;
`;

export const EventEx03 = () => {
  const [menu, setMenu] = useState(0);
  const onMenu = () => {};
  return (
    <>
      <Box>
        <Button onClick={onMenu}>=</Button>
        <HiddenBox></HiddenBox>
      </Box>
    </>
  );
};
