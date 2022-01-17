import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from '../../component/Nav/Nav';
// import FeedList from './FeedList';

const Main = () => {
  return (
    <Article>
      <Header>
        <Nav />
      </Header>
    </Article>
  );
};

const Article = styled.article``;

const Header = styled.header`
  margin-bottom: 30px;
`;

export default Main;
