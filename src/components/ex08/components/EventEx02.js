import { useState } from "react";
import { styled } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$isColor};
`;

export const EventEx02 = () => {
  const [bgColor, setBgColor] = useState("hotpink");
  const [num, setNum] = useState(0);

  const onChangeColor = () => {
    setBgColor("seagreen");

    if (num === 0) {
      setBgColor("seagreen");
      setNum(num + 1);
    } else if (num === 1) {
      setBgColor("hotpink");
      setNum(num - 1);
    }
  };

  return (
    <>
      <Box onClick={onChangeColor} $isColor={bgColor}></Box>
      {/* $ 붙이는 이유 버전이 바뀌면서 프롭스명에 붙히게 됨 */}
    </>
  );
};

// 숙제 - 숨김메뉴
