export const Menu = ({ week, breakfast, lunch, dinner }) => {
  return (
    <>
      <h3>오늘의 메뉴!</h3>
      <ul>
        <li>요일 : {week}</li>
        <li>아침메뉴 : {breakfast}</li>
        <li>점심메뉴 : {lunch}</li>
        <li>저녁메뉴 : {dinner}</li>
      </ul>
    </>
  );
};
