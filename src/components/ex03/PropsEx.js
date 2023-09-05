import { Me } from "./Intro"

export const Intro = () => {
  return (
    <>
      <Me name="이유리" age="12살" />
      <hr />
      <Me name="이가원" age="13살" />
      <hr />
    </>
  );
};

// const PropsEx = () => {
//   return <div>첫번째 컴포넌트</div>;
// };
// const propsE02 = () => {
//   return <div>두번째 컴포넌트</div>;
// };

// export default PropsEx;
// export default PropsEx02;
// ㄴexport는 컴포넌트 내부에 단 하나만 존재해야 됨


// *props
//   ㄴ함수 매개변수 역할
//   ㄴ프롭스는 오브젝트로 반환함
