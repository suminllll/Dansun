import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = props => {
  const handleMove = () => {
    props.move();
  };
  return (
    <>
      <NavBox>
        <>
          <LogoTitle to="/">Design DanSun</LogoTitle>
        </>
        <RightBox>
          <About>ABOUT US</About>
          <Project onClick={handleMove}>PROJECT</Project>
          <Contact>CONTACT</Contact>
          <Qna>QnA</Qna>
        </RightBox>
      </NavBox>
    </>
  );
};

//재사용

const Category = styled.button`
  margin-right: 40px;
  color: white;
  text-decoration: none;
  letter-spacing: 1.5px;
  border-style: none;
  background-color: inherit;
`;

//--------

const NavBox = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: 70px;
  width: 100%;
  /* background-color: rgba(40, 40, 40, 0.4); */
`;

const LogoTitle = styled(Link)`
  padding-left: 20px;
  font-size: 30px;
  color: white;
  font-family: 'Dancing Script', cursive;
  text-decoration: none;
`;

const RightBox = styled.div``;

const About = styled(Category)``;

const Project = styled(Category)``;

const Contact = styled(Category)``;

const Qna = styled(Category)``;

export default Nav;
