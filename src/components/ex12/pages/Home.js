import styled from "styled-components";
import { Banner } from "../components/Banner";
import { PageTitle } from "../components/PageTitle";

const Sections = styled.div`
  padding: 100px 70px;
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  width: 300px;
  height: 400px;
`;

export const Home = () => {
  const menu1 =
    "https://images.unsplash.com/photo-1692708632140-ee01624d558d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80";

  return (
    <>
      <PageTitle title={"HOME"} />
      <Banner />
      <Sections>
        <Box img={menu1}></Box>
        <Box
          img={
            "https://plus.unsplash.com/premium_photo-1692803224948-3ece06267238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1848&q=80"
          }
        ></Box>
      </Sections>
    </>
  );
};
