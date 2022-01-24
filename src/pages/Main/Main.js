import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from '../../component/Nav/Nav';
import ImgList from './ImgList';

const Main = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/data/mainData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data);
  //     });
  // }, []);

  return (
    <Article>
      <Nav />
      {/* ------- */}
      <Explain>
        <TextBox>
          하나의 선으로 시작해,
          <br />
          의미있는 공간을 만듭니다.
          <br />- 단선 인테리어
        </TextBox>
      </Explain>
      {/* ----- */}
      <ProjectMain>
        <ProjectTitle>Our Project</ProjectTitle>
        <ImgList />
      </ProjectMain>
      {/* ------ */}
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
  padding-left: 50px;
  padding-top: 40vh;
  font-size: 60px;
  font-weight: lighter;
  letter-spacing: 2px;
`;

const ProjectMain = styled.div`
  background-color: white;
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  color: #003300;
  font-size: 50px;
`;

export default Main;
