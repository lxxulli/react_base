import { text } from "@fortawesome/fontawesome-svg-core";
import { styled } from "styled-components";

const Errors = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: seagreen;
  margin-top: 5px;
`;

export const ErrorMessage = ({ text }) => {
  return (
    <>
      <Errors>{text}</Errors>
    </>
  );
};
