import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from '../../component/Nav/Nav';

const Main = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/data/mainData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data);
  //     });
  // }, []);
  console.log(imgList[0].first[0].id);
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
          <Bath to={`/${imgList[0].first[0].text}`}>
            <Img src={imgList[0].first[0].src} alt={imgList[0].first[0].text} />
            <Text>{imgList[0].first[0].text}</Text>
          </Bath>

          <ImgContainer>
            <Living to={`/${imgList[0].first[1].text}`}>
              <Img
                src={imgList[0].first[1].src}
                alt={imgList[0].first[1].text}
              />
              <Text>{imgList[0].first[1].text}</Text>
            </Living>
          </ImgContainer>
        </ImgBox>

        <ImgBox>
          <ImgContainer>
            <Kitchen to={`/${imgList[0].second[0].text}`}>
              <Img
                src={imgList[0].second[0].src}
                alt={imgList[0].second[0].text}
              />
              <Text>{imgList[0].second[0].text}</Text>
            </Kitchen>
          </ImgContainer>

          <ImgContainer>
            <Dining to={`/${imgList[0].second[1].text}`}>
              <Img
                src={imgList[0].second[1].src}
                alt={imgList[0].second[1].text}
              />
              <Text>{imgList[0].second[1].text}</Text>
            </Dining>
          </ImgContainer>
        </ImgBox>

        <ImgBox>
          <ImgWrap to={`/${imgList[0].second[0].text}`}>
            <Img src={imgList[0].third[0].src} alt={imgList[0].third[0].text} />
            <Text>{imgList[0].third[0].text}</Text>
          </ImgWrap>
          <ImgWrap to={`/${imgList[0].third[1].text}`}>
            <Img src={imgList[0].third[1].src} alt={imgList[0].third[1].text} />
            <Text>{imgList[0].third[1].text}</Text>
          </ImgWrap>
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

const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5%;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const ImgWrap = styled(MainLink)`
  position: relative;
`;

const Bath = styled(ImgWrap)`
  width: 40vw;
  height: 90vh;
`;

const Living = styled(ImgWrap)`
  margin-right: 90px;
  width: 30vw;
  height: 75vh;
`;

const Dining = styled(ImgWrap)`
  width: 30vw;
  height: 55vh;
`;

const Kitchen = styled(ImgWrap)`
  padding-top: 40px;
  width: 20vw;
  height: 50vh;
`;

const Img = styled.img`
  object-fit: cover;
  opacity: 0.9;
  height: 100%;
  width: 100%;
`;

const Text = styled.div`
  position: absolute;
  top: 40%;
  left: 30%;
  color: white;
  font-size: 3em;
`;

export default Main;

const imgList = [
  {
    first: [
      {
        id: 1,
        src: '/images/bathMain.jpg',
        text: 'Bath',
      },
      {
        id: 2,
        src: '/images/livingMain.jpg',
        text: 'Living',
      },
    ],
    second: [
      {
        id: 3,
        src: '/images/kitchenMain.jpg',
        text: 'Kitchen',
      },
      {
        id: 4,
        src: '/images/diningMain.jpg',
        text: 'Dining',
      },
    ],

    third: [
      {
        id: 5,
        src: '/images/bedMain.jpg',
        text: 'Bed Room',
      },
      {
        id: 6,
        src: '/images/dressMain.jpg',
        text: 'Dress Room',
      },
    ],
  },
];
