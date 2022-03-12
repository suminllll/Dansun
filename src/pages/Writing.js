import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { WritingNav } from '../component/Nav';
import { TwoButton } from '../component/Button';

const Writing = ({
  userValues,
  handleChange,
  userName,
  userPw,
  userTitle,
  userContent,
  handlePush,
}) => {
  const [inputData, setInputData] = useState([]); // 입력된 데이터를 갱신해줄 state
  const [check, setCheck] = useState(false); // 조건에 만족하면 true로 바꿀 state

  const navigate = useNavigate();

  //엔터를 눌러도 새로고침이 되지않는 함수
  const handleEnter = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  //취소버튼 클릭시 홈으로 가기
  const handleCancel = () => {
    navigate('/');
  };

  const handleSubmit = e => {
    setCheck(true);
  };

  return (
    <>
      <WritingNav />

      <InputForm onKeyPress={handleEnter} onSubmit={handleSubmit}>
        <TopBox>
          <InputStyle
            name="userName"
            value={userName}
            onChange={handleChange}
            placeholder="작성자 이름"
            style={{ marginRight: '10%' }}
          />
          <InputStyle
            name="userPw"
            value={userPw}
            onChange={handleChange}
            type="password"
            placeholder="비밀번호"
          />
        </TopBox>
        <InputStyle
          name="userTitle"
          value={userTitle}
          onChange={handleChange}
          placeholder="제목"
          style={{ height: '18%', borderTop: '1px solid lightgray' }}
        />
        <TextArea
          name="userContent"
          value={userContent}
          onChange={handleChange}
          placeholder="내용을 입력하세요"
        />
        <>
          <TwoButton
            handleCancel={handleCancel}
            handlePush={handlePush}
            cancelText="취소"
            PushText="게시"
          />
        </>
      </InputForm>
    </>
  );
};

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 100px 150px 0 140px;
  height: 70vh;
`;

const TopBox = styled.label`
  height: 18%;
`;

const InputStyle = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  font-size: 18px;
  height: 100%;
  padding-left: 20px;

  ::placeholder {
    color: lightgray;
    letter-spacing: 1px;
  }
`;

const TextArea = styled.textarea`
  height: 80%;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
  font-size: 18px;

  ::placeholder {
    color: lightgray;
    letter-spacing: 1px;
    font-size: 18px;
  }
`;

export default Writing;
