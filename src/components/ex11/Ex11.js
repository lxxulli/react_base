import { dom } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { HeaderEx } from "./components/HeaderEx";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { Sub01 } from "./pages/Sub01";
import { Sub02 } from "./pages/Sub02";
import { Sub03 } from "./pages/Sub03";
import { Sub04 } from "./pages/Sub04";

export const Ex11 = () => {
  return (
    <BrowserRouter>
      <HeaderEx />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 />} />
        <Route path="/sub03" element={<Sub03 />} />
        <Route path="/sub04" element={<Sub04 />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

// * react router dom
//   - 리액트에서 경로를 이동할 때 사용
//   - Router > Routes > Route
//   - Route는 path(경로) 와 element(컴포넌트)속성으로 구성
//   - 1)HashRouter = /#/로 url에 입력
//   - 2)BrowserRouter = 일반적으로 경로 지정할 때 사용하는 /(슬래시) 구성

// router 설치
//   ㄴ 터미널에 npm i react-router-dom
//   ㄴ 패키지 제이슨에 있는지 확인

// 나중에 만들어야지 하는거보단 기획 때 전부 다 짜고 시작하는게 나음
