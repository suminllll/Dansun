import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { WritingNav } from '../component/Nav';
import { TwoButton } from '../component/Button';

const Writing = () => {
  const WritingTarget = useRef([]);

  const navigate = useNavigate();

  const handleEnter = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  const WritePush = () => {};

  return (
    <Article>
      <WritingNav />

      <InputForm onKeyPress={handleEnter}>
        <TopBox>
          <InputStyle
            placeholder="작성자 이름"
            style={{ marginRight: '10%' }}
          />
          <InputStyle type="password" placeholder="비밀번호" />
        </TopBox>
        <InputStyle
          placeholder="제목"
          style={{ height: '18%', borderTop: '1px solid lightgray' }}
        />
        <TextArea placeholder="내용을 입력하세요" />
        <ButtonWrap>
          <TwoButton
            handleCancel={handleHome}
            handlePush={handleHome}
            cancelText="취소"
            PushText="게시"
          />
        </ButtonWrap>
      </InputForm>
    </Article>
  );
};

const Article = styled.article``;
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

const ButtonWrap = styled.div``;
export default Writing;
