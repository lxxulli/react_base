import { Link } from "react-router-dom";
import styled from "styled-components";
import { data } from "../api";

const Benner = styled.section`
  height: 800px;
  background: url(https://images.unsplash.com/photo-1692260122105-28c26fc3c882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)
    no-repeat center / cover;
`;
const Section = styled.div`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
  a {
    width: 45%;
    height: 500px;
  }
`;
const Con = styled.div`
  height: 100%;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
`;

export const Home = () => {
  return (
    <>
      <Benner></Benner>
      <Section>
        {/* <Link to={"/menu/0"}>
          <Con $bgUrl="https://images.unsplash.com/photo-1689581916399-fb9e1e56c21f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"></Con>
        </Link>
        <Link to={"/menu/1"}>
          <Con $bgUrl="https://images.unsplash.com/photo-1673977976704-d0acbcc784fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"></Con>
        </Link>
        <Link to={"/menu/2"}>
          <Con $bgUrl="https://images.unsplash.com/photo-1689581922048-58c6093d84ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"></Con>
        </Link> */}
        {data.map((con) => (
          <Link to={`/sub/${con.id}`} key={con.id}>
            <Con $bgUrl={con.img}></Con>
          </Link>
        ))}
      </Section>
    </>
  );
};

// * git(기록)
//   - 지정한 파일 및 폴더를 추적하여 각 파일, 폴더의 변화된 부분을 기록하는 파일 관리 툴

// * git hub(저장소)
//   - git으로 관리된 파일을 업로드하여 저장소에 저장 및 관리를 할 수 있는 개발자 플랫폼
