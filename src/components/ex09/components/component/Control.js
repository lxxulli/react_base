import {
  faBackward,
  faForward,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SControl = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const TimeWrap = styled.div`
  width: 100%;
  height: 4px;
  margin: 0 auto;
  background-color: gray;
`;
const TimeBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BarWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const Bar = styled.div`
  width: 10%;
  height: 100%;
  background-color: coral;
`;
const Time = styled.div`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 300;
  color: #ccc;
`;
const BtnWrap = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  li:nth-child(3) {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: coral;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Control = () => {
  return (
    <>
      <SControl>
        <TimeWrap>
          <BarWrap>
            <Bar />
          </BarWrap>
          <TimeBox>
            <Time>00:29</Time>
            <Time>03:16</Time>
          </TimeBox>
        </TimeWrap>
        <BtnWrap>
          <li>
            <FontAwesomeIcon icon={faShuffle} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBackward} />
          </li>
          <li>
            <FontAwesomeIcon icon={faPause} />
          </li>
          <li>
            <FontAwesomeIcon icon={faForward} />
          </li>
          <li>
            <FontAwesomeIcon icon={faRepeat} />
          </li>
        </BtnWrap>
      </SControl>
    </>
  );
};
