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

  const handleSend = e => {
    e.preventDefault();
    //console.log(typeof stringify(nameValue) === 'undefined');

    const nameValueTrue =
      Object.values(nameValue).length > 4 ||
      Object.values(nameValue).length < 1 ||
      typeof nameValue !== 'string' ||
      Object.values(numberValue) === '' ||
      Object.values(numberValue) === undefined;

    const numberValueTrue =
      Object.values(numberValue).length < 13 ||
      Object.values(numberValue).length > 14;

    const contentValueTrue =
      typeof contentValue !== 'string' ||
      Object.values(contentValue).length < 2 ||
      '' ||
      undefined;

    const error = !e.target.value;

    if (nameValueTrue) {
      alert('이름을 확인해주세요.');
      console.log('name안');
    } else if (numberValueTrue) {
      console.log('number');
      alert('휴대폰번호를 확인해주세요.');
    } else if (contentValueTrue) {
      console.log('content');
      alert('내용을 확인해주세요.');
    } else {
      goto();
    }
  };
  //console.log(nameValue.length, numberValue.length, contentValue.length);
  //console.log(nameValue);

  //   const err = new Error('이름을 확인해주세요.');
  //   const success = alert('전송');
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (numberValue.length < 1 || numberValue.length > 4) {
  //         console.log('name 성공');
  //         return reject(err);
  //       }
  //       resolve(success);
  //     }, 1000);
  //   });
  //   return promise;
  // };
  // async function runTasks() {
  //   try {
  //     let nameValue = await handleSend(undefined);
  //     console.log('try');
  //   } catch (e) {
  //     console.log('catch');
  //   }
  // }

  const goto = () => {
    // fetch('../../../public/data/mainData.json',{})
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(nameValue);
    //     if (data.nameValue === String) {
    alert('전송되었습니다.');
    //     }
    //   });
  };

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
            value={nameValue}
            onChange={handleNumber}
          />
        </ContentBox>
        <ContentBox>
          <div>Phone Number</div>
          <ContentInput
            name="numberValue"
            value={numberValue}
            onChange={handleNumber}
          />
        </ContentBox>
        <ContentBox>
          <div>Content</div>
          <ContentInput
            placeholder="내용 입력."
            name="contentValue"
            value={contentValue}
            onChange={handleNumber}
          />
        </ContentBox>
        <Submit onClick={handleSend}>Send</Submit>
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

const ContentWrap = styled.form`
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

  ::placeholder {
    color: lightgray;
  }
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
