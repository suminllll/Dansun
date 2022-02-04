import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = ({ scrollTo }) => {
  const [scrollY, setScrollY] = useState(0);

  //nav 색깔 바꾸는 로직
  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleScroll);
    };
    watch();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  //클릭시 맨 위로 이동
  const handleAbout = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <NavBox scrollY={scrollY}>
        <>
          <LogoTitle to="/">Design DanSun</LogoTitle>
        </>
        <RightBox>
          <About onClick={handleAbout}>ABOUT US</About>
          <Design name="design" onClick={scrollTo}>
            DESIGN
          </Design>
          <Contact name="contact" onClick={scrollTo}>
            CONTACT
          </Contact>
          <Qna name="qna" onClick={scrollTo}>
            QnA
          </Qna>
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
  z-index: 990;
  transition: 0.5s ease;

  ${({ scrollY }) => {
    return scrollY > 690
      ? 'background-color: #003300'
      : 'background-color: transparent';
  }}
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

const Design = styled(Category)``;

const Contact = styled(Category)``;

const Qna = styled(Category)``;

export default Nav;
