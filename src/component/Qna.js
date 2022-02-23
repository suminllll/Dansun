import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Qna = ({ posts }) => {
  const navigate = useNavigate();

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

  return (
    <QnaBox>
      <SearchBox>
        <Search placeholder="Search" />
        {/* <FontAwesomeIcon icon={faSearch} className="search" /> */}
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
          {posts.map(data => {
            return (
              <tr key={data.no}>
                <BodyTd>{data.no}</BodyTd>
                <BodyTd
                  onClick={handleTitle}
                  style={{ textAlign: 'left', cursor: 'pointer' }}
                >
                  {data.title}
                </BodyTd>
                <BodyTd>{data.writer}</BodyTd>
                <BodyTd>{today}</BodyTd>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button>글쓰기</Button>
    </QnaBox>
  );
};

const SearchBox = styled.div`
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

// const FontAwesomeIcon = styled.div``;
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
  color: lightgray;
  letter-spacing: 1px;
`;

const Button = styled.button`
  float: right;
  margin-top: 20px;
  width: 110px;
  height: 35px;
  border-style: none;
  background-color: #003300;
  opacity: 0.7;
  color: white;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
`;

export default Qna;
