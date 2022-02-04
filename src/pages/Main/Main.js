import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from '../../component/Nav/Nav';
import Design from './Design';
import Contact from './Contact';

const Main = () => {
  const focusTarget = useRef([]);

  const scrollTo = e => {
    const name = e.target.name;

    const category = {
      design: 0,
      contact: 1,
      qna: 2,
    };
    focusTarget.current[category[name]].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Article>
      <Nav scrollTo={scrollTo} />
      <Explain>
        <TextBox>
          단 하나의 선으로 시작해,
          <br />
          의미있는 공간을 만듭니다.
          <br />- 단선 인테리어
        </TextBox>
      </Explain>

      <Title ref={el => (focusTarget.current[0] = el)}>DESIGN</Title>
      <Design />

      <ContactTitle ref={el => (focusTarget.current[1] = el)}>
        CONTACT
      </ContactTitle>
      <Contact />

      <Title ref={el => (focusTarget.current[2] = el)}>QnA</Title>
    </Article>
  );
};

const Article = styled.article`
  background: url(./images/배경이미지.jpeg);
  height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const Explain = styled.main`
  height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: rgba(40, 40, 40, 0.4);
  color: white;
`;

const TextBox = styled.div`
  padding-left: 5%;
  padding-top: 25%;
  font-size: 60px;
  font-weight: lighter;
  letter-spacing: 2px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  color: #003300;
  font-size: 50px;
`;

const ContactTitle = styled(Title)`
  margin-top: -15%;
`;

export default Main;
