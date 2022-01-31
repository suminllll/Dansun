import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Article>
      <ContactTitle>CONTACT</ContactTitle>
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
export default Contact;
