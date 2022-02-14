import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Qna = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('data/boardData.json')
      .then(res => res.json())
      .then(posts => {
        setPosts(posts);
      });
  }, []);

  return (
    <QnaBox>
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
                <BodyTd style={{ textAlign: 'left' }}>{data.title}</BodyTd>
                <BodyTd>{data.writer}</BodyTd>
                <BodyTd>{data.date}</BodyTd>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </QnaBox>
  );
};

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
`;

const BodyTd = styled.td`
  text-align: center;
  padding: 15px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  color: lightgray;
`;
export default Qna;
