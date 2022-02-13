import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const Contact = () => {
  const intialValues = {
    nameValue: '',
    numberValue: '',
    contentValue: '',
  };
  const [values, setValues] = useState(intialValues);
  const [inputStatus, setInputStatus] = useState({});
  const [errCheck, setErrCheck] = useState(false);

  const handleChange = e => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setInputStatus(err(values));
    setErrCheck(true);
  };

  const err = values => {
    let errors = {};

    //name input
    if (
      values.nameValue.length === 1 ||
      values.nameValue.length > 4 ||
      !values.nameValue
    )
      errors.nameValue = '이름을 확인해주세요.';

    //number input
    if (values.numberValue.length < 13)
      errors.numberValue = '휴대번호를 확인해주세요.';

    //content input
    if (values.contentValue.length < 3 || !typeof contentValue === 'string')
      errors.contentValue = '내용을 확인해주세요.';

    return errors;
  };

  //inputStatus길이가 0 이거나 errCheck가 true 상태일 때
  //submitForm을 누르면 inputStatus가 마운트 되도록
  useEffect(() => {
    if (Object.keys(inputStatus).length === 0 && errCheck) {
      submitForm();
    }
  }, [inputStatus]);

  const submitForm = () => {
    console.log('반환되는 값', values);
    if (Object.keys(inputStatus).length === 0 && errCheck) {
      alert('전송되었습니다.');
    }
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
  // useEffect(() => {
  //   if (numberValue.length === 11) {
  //     setValues({
  //       numberValue: numberValue.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
  //     });
  //   } else if (numberValue.length === 13) {
  //     setValues({
  //       numberValue: numberValue
  //         .replace(/-/g, '')
  //         .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
  //     });
  //   }
  // }, [numberValue]);

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

      {/* 버튼을 누르면 이 폼에 데이터들이 제출되도록 */}
      <ContentWrap onSubmit={handleSubmit}>
        <ContentBox>
          <div>Name</div>
          <ContentInput
            name="nameValue"
            defaultValue={values.nameValue}
            onChange={handleChange}
          />
          {/* 에러시 */}
          {inputStatus.nameValue && <ErrMes>{inputStatus.nameValue} </ErrMes>}
        </ContentBox>
        <ContentBox>
          <div>Phone Number</div>
          <ContentInput
            name="numberValue"
            defaultValue={values.numberValue}
            onChange={handleChange}
          />
          {inputStatus.numberValue && (
            <ErrMes>{inputStatus.numberValue}</ErrMes>
          )}
        </ContentBox>
        <ContentBox>
          <div>Content</div>
          <ContentInput
            name="contentValue"
            defaultValue={values.contentValue}
            onChange={handleChange}
          />
          {inputStatus.contentValue && (
            <ErrMes>{inputStatus.contentValue}</ErrMes>
          )}
        </ContentBox>
        <Submit type="submit" onKeyUp={handleSubmit} errCheck={errCheck}>
          Send
        </Submit>
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
`;

const ContentInput = styled.input`
  margin-top: 3%;
  height: 30px;
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgray;
`;

const ErrMes = styled.div`
  margin-top: 5px;
  color: #006633;
  font-size: 13px;
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
