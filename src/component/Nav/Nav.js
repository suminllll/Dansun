import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = ({ moveScroll }) => {
  const handleMove = () => {
    moveScroll.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <NavBox>
        <>
          <LogoTitle to="/">Design DanSun</LogoTitle>
        </>
        <RightBox>
          <About to="">ABOUT US</About>
          <Project to="" onClick={handleMove}>
            PROJECT
          </Project>
          <Contact to="">CONTACT</Contact>
          <Qna to="">QnA</Qna>
        </RightBox>
      </NavBox>
    </>
  );
};

//재사용

const Category = styled(Link)`
  margin-right: 40px;
  color: white;
  text-decoration: none;
  letter-spacing: 1.5px;
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

const Project = styled.button`
  margin-right: 40px;
  color: white;
  text-decoration: none;
  letter-spacing: 1.5px;
`;

const Contact = styled(Category)``;

const Qna = styled(Category)``;

export default Nav;
