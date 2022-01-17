import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({
    idValue: '',
    pwValue: '',
  });
  const { idValue, pwValue } = inputs;
  const [buttonOn, setButtonOn] = useState(false);
  const navigate = useNavigate();

  const goToMain = () => {
    fetch('http://localhost:3000/data/loginData.json', {})
      .then(res => res.json())
      .then(data => {
        if (data.email === idValue && data.pw === pwValue) {
          navigate('/');
        } else {
          alert('아이디 또는 비밀번호를 확인하세요.');
        }
      });
  };

  const handleInput = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const buttonChange = e => {
    setButtonOn(
      idValue.indexOf('@') !== -1 && idValue.length >= 5 && pwValue.length >= 5
    );
    if (e.key === 'Enter') {
      goToMain();
    }
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
          {/* <Kakao onClick={kakaoLogin} /> */}
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
  height: 60vw;
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
  height: 50px;
  margin-top: 10px;
  margin-bottom: 150px;
  background-color: rgb(0, 149, 246);
  color: white;
  border-radius: 6px;
  border: 0;
  cursor: grab;
  letter-spacing: 1px;
  opacity: ${inputs => (inputs.buttonOn ? '1' : '0.5')};
`;

// const Kakao = styled.img.attrs({
//   src: '/images/kakao.png',
//   alt: 'kakaoLoginButton',
// })`
//   width: 84%;
//   height: 49px;
//   margin-bottom: 20px;
// `;

const FindPw = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  color: #24507d;
`;

export default Login;
