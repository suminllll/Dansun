import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from '../../component/Nav/Nav';

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/mainData.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

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
        <ImgBox>
          {data.map((list, index) => {
            return (
              <ImgWrap to={list.to} key={index}>
                <Img src={list.src} />
                <Text>{list.text}</Text>
              </ImgWrap>
            );
          })}
        </ImgBox>
      </ProjectMain>
      {/* ------ */}
    </Article>
  );
};

const MainLink = styled(Link)``;
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
  height: 100vh;
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  color: #003300;
  font-size: 50px;
`;

const ImgBox = styled.div``;

const ImgWrap = styled(MainLink)`
  position: relative;
  width: 4vw;
  height: 9vh;
`;

const Img = styled.img`
  margin-top: 50px;
  height: 80%;
  width: 80%;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
`;

export default Main;
