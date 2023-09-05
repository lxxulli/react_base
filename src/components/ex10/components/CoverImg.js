import { styled } from "styled-components";

const SCoverImg = styled.div`
  width: 90%;
  height: 300px;
  background: url(${(props) => props.img}) no-repeat center / cover;
  border-radius: 20px;
  margin: 40px auto 30px auto;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
`;

const Title = styled.div`
  text-align: center;
  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  p {
    color: #dbdbdb;
    font-weight: 300;
  }
`;

export const CoverImg = () => {
  const bgUrl =
    "https://mblogthumb-phinf.pstatic.net/MjAyMDAxMTZfMjk5/MDAxNTc5MTQwMTYyMTE3.Syy9y4l4S5RoU4Rrcs9o-ZjPzQkPhWP6t2jmsZmDyeUg.pQfrrB2DihiWPFbzSvSvRRaJjTNApjT5sC7FBtgRssIg.JPEG.soeun0306/202001100922391910_7_20200110092413116.jpg?type=w800";

  return (
    <>
      <SCoverImg img={bgUrl} />
      <Title>
        <h3>아무노래</h3>
        <p>지코(ZICO)</p>
      </Title>
    </>
  );
};
