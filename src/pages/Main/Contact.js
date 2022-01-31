import { getDefaultNormalizer } from '@testing-library/dom';
import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Article>
      <ContactTitle>CONTACT</ContactTitle>

      {textList.map(list => {
        return (
          <TextBox>
            <div className="textTitle" key={list.id}>
              {list.title}
            </div>
            <div className="text">{list.text}</div>
          </TextBox>
        );
      })}
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
