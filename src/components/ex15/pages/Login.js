import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { ErrorMessage } from "../components/ErrorMessage";
import { userData } from "./userData";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 250px;
`;
const Form = styled.form`
  max-width: 450px;
  width: 100%;
  border: 1px solid #dbdbdb;
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
`;
const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  width: 100%;
  padding: 5px 15px;
  border-radius: 5px;
  margin-top: 10px;
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  text-align: center;
  color: white;
  margin-top: 20px;
  font-weight: 600;
  box-sizing: border-box;
  background-color: seagreen;
  cursor: pointer;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
`;

const Errosmessage = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: seagreen;
  margin-top: 5px;
`;

export const Login = () => {
  const nav = useNavigate();

  console.log(nav);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    // 아이디, 비번 오류날 것을 대비
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data.username);
    // console.log(data.password);
    // const inputUsername = data.username;
    // const inputPassword = data.password;
    const { username, password } = data;
    // user가 input에 입력한 valus값을 비구조화 할당으로 표현

    if (username !== userData.username) {
      setError("username", {
        message: "아이디가 틀렸습니다",
      });
    }

    if (password !== userData.password) {
      setError("password", {
        message: "패스워드가 틀렸습니다",
      });
    }

    // 로그인 성공 시 메인페이지로 이동
    nav("/");
    // 경로를 지정하여 페이지를 이동시킬 수 있음
  };

  // console.log(errors);
  // console.log(errors && errors.nsername && errors.username.message);
  // console.log(errors?.username?.message);
  // 옵셔널체이닝(optional shaining)
  // 중첩 객체를 에러없이 안전하게 접근할 수 있음

  console.log(isValid);

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>LOGIN</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수입니다.",
          })}
          placeholder="아이디"
        />
        <ErrorMessage text={errors?.username?.message} />
        <Input
          {...register("password", {
            required: "패스워드는 필수입니다.",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해주세요.",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage text={errors?.password?.message} />
        <Button $isActive={isValid}>로그인</Button>
      </Form>
    </Wrap>
  );
};

// ... < 스프레드 연산자
// ?. < 옵셔널 체이닝
