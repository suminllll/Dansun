import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const Contact = () => {
  const [values, setValues] = useState({
    nameValue: '',
    numberValue: '',
    contentValue: '',
  });

  const { nameValue, numberValue, contentValue } = values;

  const handleNumber = e => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  //지도
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

  //핸드폰 번호
  useEffect(() => {
    if (numberValue.length === 11) {
      setValues({
        numberValue: numberValue.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    } else if (numberValue.length === 13) {
      setValues({
        numberValue: numberValue
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    }
  }, [numberValue]);

  return (
    <>
      {TEXTLIST.map(list => {
        return (
          <TextBox key={list.id}>
            <div className="textTitle">[{list.title}]</div>
            <div className="text">{list.text}</div>
          </TextBox>
        );
      })}

      <Map id="map"></Map>

      <ContentWrap>
        <ContentBox>
          <div>Name</div>
          <ContentInput
            name="nameValue"
            value={nameValue || ''}
            onChange={handleNumber}
          />
        </ContentBox>
        <ContentBox>
          <div>Phone Number</div>
          <ContentInput
            name="numberValue"
            value={numberValue || ''}
            onChange={handleNumber}
          />
        </ContentBox>
        <ContentBox>
          <div>Content</div>
          <ContentInput
            name="contentValue"
            value={contentValue || ''}
            onChange={handleNumber}
          />
        </ContentBox>
        <Submit>Send</Submit>
      </ContentWrap>
    </>
  );
};

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
  width: 80vw;
  height: 80vh;
`;

const ContentWrap = styled.form.attrs({
  name: 'form',
  method: 'post',
  action: '',
})`
  margin: 5%;
  padding-bottom: 5%;
`;

const ContentBox = styled.div`
  margin-bottom: 5%;
  border-bottom: 1px solid lightgray;
`;

const ContentInput = styled.input`
  margin-top: 3%;
  height: 30px;
  width: 100%;
  border: none;
`;

const Submit = styled.button`
  border: none;
  width: 100%;
  height: 35px;
  background-color: #003300;
  color: white;
  opacity: 0.7;
  border-radius: 3px;
`;

export default Contact;

const TEXTLIST = [
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

const INPUTTITLE = [
  {
    id: 1,
    title: 'Name',
    name: 'nameValue',
  },
  {
    id: 2,
    title: 'Phone Number',
    name: 'numberValue',
  },
  {
    id: 3,
    title: 'Content',
    name: 'contentValue',
  },
];
