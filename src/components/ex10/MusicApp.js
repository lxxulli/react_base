import {
  faBackward,
  faBars,
  faCaretDown,
  faForward,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { maincolors } from "../../GlobalStyled";
import { CoverImg } from "./components/CoverImg";
import { Header } from "./components/Header";
import { PlayBtn } from "./components/PlayBtn";

const Wrap = styled.div`
  max-width: 390px;
  width: 100%;
  height: 800px;
  margin: 0 auto;
  background-color: ${maincolors.fontColor};
  border-radius: 20px;
  color: white;
  padding: 30px;
`;

export const MusicApp = () => {
  const bgUrl =
    "https://mblogthumb-phinf.pstatic.net/MjAyMDAxMTZfMjk5/MDAxNTc5MTQwMTYyMTE3.Syy9y4l4S5RoU4Rrcs9o-ZjPzQkPhWP6t2jmsZmDyeUg.pQfrrB2DihiWPFbzSvSvRRaJjTNApjT5sC7FBtgRssIg.JPEG.soeun0306/202001100922391910_7_20200110092413116.jpg?type=w800";

  return (
    <>
      <Wrap>
        <Header />
        <CoverImg img={bgUrl} />
        <PlayBtn />
      </Wrap>
    </>
  );
};
