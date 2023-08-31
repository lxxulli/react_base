import styled from "styled-components";

const SBanner = styled.div`
  width: 100%;
  height: 500px;
  background: url("https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Banner = () => {
  return (
    <>
      <SBanner></SBanner>
    </>
  );
};
