import { useState } from "react";

export const EventEx01 = () => {
  const [num, setNum] = useState(0);
  //   ㄴ리액트 hook 중 하나로 변수값을 저장 후 변경하여 사용 가능

  const plusHandler = () => {
    // setNum(num++); 는 안됨
    setNum(num + 1);
  };

  return (
    <>
      <h2>클릭하면 숫자가 올라감</h2>
      <h3>{num}</h3>
      <button onClick={plusHandler}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </>
  );
};

// * 리액트 특징
//   ㄴ SPA(Single Page Application) 사용으로 어플리케이션 속도가 빠름
//   ㄴ 숫자가 바껴도 새로고침이 안되고 숫자만 바뀜
//   ㄴ hook

// '() => {}' 여기서 {}없이 '() => ' 이렇게 쓰면 바로 return 한다는 뜻
