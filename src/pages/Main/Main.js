import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MainNav } from '../../component/Nav';
import Design from '../../component/Design';
import Contact from '../../component/Contact';
import Qna from '../../component/Qna';

const Main = () => {
  const [scrollY, setScrollY] = useState(0); //[nav] 색깔을 바꿔주는 state

  const [values, setValues] = useState({
    nameValue: '',
    numberValue: '',
    contentValue: '',
  }); //[contact] 이름, 핸드폰번호, 내용값을 담을 state
  const [inputStatus, setInputStatus] = useState({}); //[contact] 입력값을 err 함수로 보냄
  const [errCheck, setErrCheck] = useState(false); //[contact] 입력값을 받으면 true로 변환

  const [posts, setPosts] = useState([]); //[QnA] 통신으로 데이터 받아오는 state
  const [searchValue, setSearchValue] = useState(''); //[QnA] 검색창에서 입력값을 받는 state
  const [filterValue, setFilterValue] = useState(''); //[QnA] 유효성 검사가 완료된 값을 담음

  const focusTarget = useRef([]); //[nav] 해당 카테고리로 이동할때 사용

  //[nav] 색깔 바꾸는 로직
  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };
  //[nav] 카테고리를 클릭하면 해당 카테고리 위치로 내려감
  const scrollTo = e => {
    const name = e.target.name;

    const category = {
      design: 0,
      contact: 1,
      qna: 2,
    };
    focusTarget.current[category[name]].scrollIntoView({ behavior: 'smooth' });
  };

  //[contact] 계산된 속성명
  const handleChange = e => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //[contact] send 버튼 클릭하면 값을 받아와서 err로 보내고, errCheck를 true로 변환
  const handleSubmit = e => {
    e.preventDefault();
    setInputStatus(err(values));
    setErrCheck(true);
  };

  //[contact] 값을 받아와서 유효성검사
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

  //[contact] 휴대폰 번호 자동 하이픈기능
  useEffect(() => {
    if (values.numberValue.length === 11) {
      setValues({
        numberValue: values.numberValue.replace(
          /(\d{3})(\d{4})(\d{4})/,
          '$1-$2-$3'
        ),
      });
    } else if (values.numberValue.length === 13) {
      setValues({
        numberValue: values.numberValue
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    }
  }, [values.numberValue]);

  //[QnA] 통신으로 데이터 받아옴
  useEffect(() => {
    fetch('data/boardData.json')
      .then(res => res.json())
      .then(posts => {
        setPosts(posts);
      });
  }, []);

  //[QnA] SearchValue에 입력값으로 업데이트
  const handleSearch = e => {
    setSearchValue(e.target.value);
  };

  //[QnA] 엔터를 누르면 searchCheck 함수를 호출함
  const handleEnter = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchCheck();
    }
  };

  //[QnA] 입력값 확인 하는 함수
  const searchCheck = () => {
    const filter = posts.filter(
      posts =>
        posts.title.toLowerCase().includes(searchValue) ||
        posts.writer.toLowerCase().includes(searchValue)
    );

    //입력값이 없으면 알림창 띄우기
    if (!searchValue) alert('검색할 내용을 입력해주세요.');
    else if (filter) setFilterValue(filter);
  };

  return (
    <Article>
      <MainNav
        handleScroll={handleScroll}
        scrollY={scrollY}
        scrollTo={scrollTo}
      />
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
      <Contact
        values={values}
        inputStatus={inputStatus}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errCheck={errCheck}
        filterValue={filterValue}
        searchCheck={searchCheck}
      />

      <Title ref={el => (focusTarget.current[2] = el)}>QnA</Title>
      <Qna
        posts={posts}
        handleSearch={handleSearch}
        filterValue={filterValue}
        handleEnter={handleEnter}
      />
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
  padding-top: 28%;
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
