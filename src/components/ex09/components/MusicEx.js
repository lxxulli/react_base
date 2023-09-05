import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { Header } from "./component/Header";
import { MainMusic } from "./component/MainMusic";
import { Control } from "./component/Control";
import { useState } from "react";
import { NextMusic } from "./component/NextMusic";

const Wrap = styled.div`
  width: 375px;
  height: 667px;
  background-color: #333;
  margin: 100px auto;
  color: white;
  position: relative;
  overflow: hidden;
`;

export const MusicEx = () => {
  return (
    <>
      <Wrap>
        <Header />
        <MainMusic />
        <Control />
        <NextMusic />
      </Wrap>
    </>
  );
};

// * 메뉴 이벤트 작업
// 1. 메뉴 버튼을 클릭하면 숨김메뉴가 top 100%에서 0%으로 변경됨
// 2. 닫기 버튼을 클릭하면 숨김메뉴가 top 0에서 100%로 변경됨
