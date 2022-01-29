import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = props => {
  const [scrollY, setScrollY] = useState(0);
  const scrollTrue = scrollY > 600;

  const handleMove = () => {
    props.move();
  };

  //const handleScroll = () => {
  // setScrollY(window.pageYOffset);
  // if (scrollTrue) {
  //   setScrollY(1);
  // }
  //};
  const handleScroll = () => {
    setScrollY(window.pageYOffset);
    if (scrollTrue) {
      setScrollY(1);
    }
  };
  useEffect(() => {
    // window.scroll(function () {
    //   if (scrollTrue) {
    //     window.addEventListener('scroll', handleScroll);
    //   } else {
    //     window.removeEventListener('scroll', handleScroll);
    //   }
    // });
    const watch = () => {
      window.addEventListener('scroll', handleScroll);
      console.log('add');
    };
    watch();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('remove');
    };
  });

  return (
    <>
      <NavBox show={scrollY}>
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
  z-index: 9900;

  ${({ show }) => {
    return show === 1 ? 'background-color: #003300' : '';
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

const Project = styled(Category)``;

const Contact = styled(Category)``;

const Qna = styled(Category)``;

export default Nav;
