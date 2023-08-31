import { Menu } from "./Menu";
import { WeekMeun } from "./WeekMenu";

const menus = [
  {
    week: "월요일",
    breakfast: "시리얼",
    lunch: "햄버거",
    dinner: "닭발",
  },
  {
    week: "화요일",
    breakfast: "토스트",
    lunch: "짜장면",
    dinner: "치킨",
  },
  {
    week: "수요일",
    breakfast: "굶음",
    lunch: "떡볶이",
    dinner: "라면",
  },
];

export const FoodMenu = () => {
  return (
    <>
      {/*
      [문제]
      ul, li태그를 활용하여 아침, 점심, 저녁 메뉴 제작
      단, props를 활용할 것(배열)
      */}
      {/* <Menu
        week="월"
        breakfast="시리얼"
        lunch="연어포케"
        dinner="마라 치즈 타코야키"
      /> */}
      <WeekMeun menuList={menus} />
    </>
  );
};
