import styled from "styled-components";
import { PageTitle } from "../components/PageTitle";

const MenuImg1 = styled.div`
  width: 300px;
  height: 400px;
`;

export const Menu01 = () => {
  return (
    <>
      <PageTitle title={"MENU_1"} />
      <MenuImg1
        img={
          "https://images.unsplash.com/photo-1692708632140-ee01624d558d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
        }
      ></MenuImg1>
    </>
  );
};
