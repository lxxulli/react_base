import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <h2>페이지를 찾을 수 없어용😭</h2>
      <h4>
        <Link to={"/"}>HOME</Link>
      </h4>
    </>
  );
};
