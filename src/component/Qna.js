import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { OneButton } from '../component/Button';
import Writing from '../pages/Writing';

const Qna = ({
  posts,
  handleSearch,
  filterValue,
  handleEnter,
  inputData,
  userValues,
  userName,
  userPw,
  userTitle,
  userContent,
  handelPush,
}) => {
  const navigate = useNavigate();
  // console.log('qna', userName);

  //현재날짜 구함
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  let today = `${year}-${month}-${day}`;

  //게시글 제목 클릭하면 해당 내용으로 이동
  const handleTitle = () => {
    navigate('/');
  };

  const handleWrite = () => {
    navigate('/writing');
  };

  return (
    <QnaBox>
      <SearchBox onKeyPress={handleEnter}>
        <Search placeholder="Search" onChange={handleSearch} />
      </SearchBox>
      <Table>
        <thead>
          <tr>
            <HeadTh style={{ width: 100 }}>No</HeadTh>
            <HeadTh style={{ width: 700 }}>제목</HeadTh>
            <HeadTh style={{ width: 150 }}>글쓴이</HeadTh>
            <HeadTh style={{ width: 150 }}>날짜</HeadTh>
          </tr>
        </thead>
        <tbody>
          {/* 필터링된 입력값이 없으면 전체 게시물을, 아니면 필터링된 게시물을 보여줌 */}
          {!filterValue
            ? posts.map(data => {
                return (
                  <tr key={data.no}>
                    <BodyTd>{data.no}</BodyTd>
                    <BodyTd
                      onClick={handleTitle}
                      style={{ textAlign: 'left', cursor: 'pointer' }}
                    >
                      {data.userTitle}
                    </BodyTd>
                    <BodyTd>{data.userName}</BodyTd>
                    <BodyTd>{today}</BodyTd>
                  </tr>
                );
              })
            : filterValue.map(data => {
                return (
                  <tr key={data.no}>
                    <BodyTd>{data.no}</BodyTd>
                    <BodyTd
                      onClick={handleTitle}
                      style={{ textAlign: 'left', cursor: 'pointer' }}
                    >
                      {data.userTitle}
                    </BodyTd>
                    <BodyTd>{data.userName}</BodyTd>
                    <BodyTd>{today}</BodyTd>
                  </tr>
                );
              })}
          {inputData &&
            inputData.map(user => {
              return (
                <tr key={user.id}>
                  <BodyTd>{user.id}</BodyTd>
                  <BodyTd
                    onClick={handleTitle}
                    style={{ textAlign: 'left', cursor: 'pointer' }}
                  >
                    {user.userTitle}
                  </BodyTd>
                  <BodyTd>{user.userName}</BodyTd>
                  <BodyTd>{today}</BodyTd>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <OneButton text="글쓰기" handleWrite={handleWrite} />
    </QnaBox>
  );
};

const SearchBox = styled.form`
  float: right;
  margin-bottom: 20px;
  width: 20%;
  border-bottom: 1px solid lightgray;
`;

const Search = styled.input`
  border-style: none;
  padding-bottom: 5px;

  ::placeholder {
    color: lightgray;
    letter-spacing: 1px;
  }
`;

const QnaBox = styled.div`
  margin: 4%;
  height: 100vh;
`;
const Table = styled.table`
  width: 100%;
  border-top: 1px solid #003300;
  border-collapse: collapse;
`;

const HeadTh = styled.th`
  padding: 15px 0;
  color: #003300;
  letter-spacing: 1px;
  font-weight: 400;
`;

const BodyTd = styled.td`
  text-align: center;
  padding: 15px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  color: #a0a0a0;
  letter-spacing: 1px;
`;

export default Qna;
