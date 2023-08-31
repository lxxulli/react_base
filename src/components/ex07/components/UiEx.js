import { styled } from "styled-components";
import { maincolors } from "../../../GlobalStyled";
import { Header } from "./Header";
import { Section } from "./Section";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  background-color: #f1f1f1;
`;

const Banner = styled.div`
  height: 400px;
  background: #333;
`;

export const UiEx = () => {
  return (
    <>
      <Wrap>
        <Header />
        <Banner></Banner>
        <Section />
      </Wrap>
    </>
  );
};
