import Helmet from "react-helmet";
import { PageTitle } from "../components/PageTitle";

export const Home = () => {
  return (
    <>
      <PageTitle title={"HOME"} />
      <h2>HOME page</h2>
    </>
  );
};

// * Link
//   ㄴ 리액트에선 a태그 대신 react-router-dom에 포함되어 있는 Link(컴포넌트)를 이용함
//   ㄴ to={"경로"} 속성을 사용하여 경로 지정

// * 연습
// - 페이지 3, 4 만들기
// - 헤더에 링크 연결
// - 404 페이지에서 메인으로 갈 수 있게 링크 제작
