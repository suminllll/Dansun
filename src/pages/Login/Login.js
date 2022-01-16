import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({
    idValue: '',
    pwValue: '',
  });

  const [buttonOn, setButtonOn] = useState('false');

  const { idValue, pwValue } = inputs;

  const goToMain = () => {
    // const navigate = useNavigate();
    // navigate('/');
  };

  const handleInput = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

    console.log(idValue);
  };

  const buttonChange = () => {
    console.log(idValue, pwValue);
    setButtonOn(
      idValue.indexOf('@') !== -1 && idValue.length >= 5 && pwValue.length >= 5
    );
    console.log(buttonOn);
  };

  return (
    <Main>
      <LoginBox>
        <Logo>Westagram</Logo>
        <MiddleBox>
          <InputId
            onChange={handleInput}
            name="idValue"
            value={idValue}
            onKeyUp={buttonChange}
          />
          <InputPw
            onChange={handleInput}
            name="pwValue"
            value={pwValue}
            onKeyUp={buttonChange}
          />
          <LoginButton onClick={goToMain} buttonOn={buttonOn}>
            로그인
          </LoginButton>
        </MiddleBox>
        <FindPw to="/">비밀번호를 잊으셨나요?</FindPw>
      </LoginBox>
    </Main>
  );
};

//재사용
const Input = styled.input`
  width: 80%;
  height: 50px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  background-color: #fafafa;
  border-radius: 3px;
  padding-left: 10px;
`;

//----------
const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10%;
`;

const LoginBox = styled.div`
  width: 50vw;
  height: 70vw;
  border: 1px solid lightgray;
`;

const Logo = styled.div`
  margin-top: 40px;
  font-size: 50px;
  font-family: 'Lobster', cursive;
`;

const MiddleBox = styled.div`
  margin-top: 50px;
`;

const InputId = styled(Input).attrs({
  type: 'text',
  placeholder: '전화번호, 사용자 이름 또는 이메일',
})``;

const InputPw = styled(Input).attrs({
  type: 'password',
  placeholder: '비밀번호',
})``;

const LoginButton = styled.button`
  width: 84%;
  height: 45px;
  margin-top: 10px;
  background-color: #0095f6;
  color: white;
  margin-bottom: 170px;
  border-radius: 6px;
  border: 0;
  cursor: grab;
  opacity: ${inputs => (inputs.buttonOn ? '1' : '0.5')};
`;

const FindPw = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  color: #24507d;
`;

export default Login;
