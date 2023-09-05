export const Me = (props) => {
  //   console.log(props);
  const name = props.name;
  const age = props.age;
  return (
    <>
      <h2>자기소개</h2>
      <h3>이름 : {name}</h3>
      {/* ㄴjxs문법 내부에 변수를 사용할 땐 {} 중괄호 사용 */}
      <h3>나이 : {age}살</h3>
    </>
  );
};
