/* global kakao */
import { getDefaultNormalizer } from '@testing-library/dom';
import React, { useEffect } from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';

const { kakao } = window;

const Contact = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(36.051641499339475, 129.371858321261), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    //지도 생성
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(
      36.051641499339475,
      129.371858321261
    );
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <Article>
      <ContactTitle>CONTACT</ContactTitle>

      {textList.map(list => {
        return (
          <TextBox>
            <div className="textTitle" key={list.id}>
              [{list.title}]
            </div>
            <div className="text">{list.text}</div>
          </TextBox>
        );
      })}

      <Map id="map"></Map>
    </Article>
  );
};

const Article = styled.article`
  height: 100vh;
`;

const ContactTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -15%;
  color: #003300;
  font-size: 50px;
`;

const TextBox = styled.div`
  margin: 4%;
  font-size: 17px;

  .text {
    margin-top: 0.5%;
    color: lightgray;
  }
`;

const Map = styled.div`
  margin-left: 10%;
  width: 80%;
  height: 80%;
`;
export default Contact;

const textList = [
  {
    id: 1,
    title: 'Tel',
    text: '+82 10-0000-0000',
  },
  {
    id: 2,
    title: 'E-mail',
    text: 'krlatnalsl01@gmail.com',
  },
  {
    id: 3,
    title: 'Address',
    text: '89-8, Seongsan-ro-7-gil, Seodaemun-gu, Seoul, Korea',
  },
];
