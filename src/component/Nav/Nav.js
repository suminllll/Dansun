import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsHouseDoor } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

const Nav = () => {
  return (
    <NavBox>
      <>
        <LogoTitle>Instagram</LogoTitle>
      </>
      <SearchBox>
        <FiSearch className="fisearch" />
        <Search>검색</Search>
      </SearchBox>
      {/* <SearchInput /> */}
      <div className="topIcon">
        <Link to="/">
          <BsHouseDoor />
          <i className="far fa-compass icon" />
        </Link>
        <Link to="/">
          <i className="far fa-heart icon" />
        </Link>
        <Link to="/">
          <i className="far fa-user icon" />
        </Link>
        <Link to="/">
          <img
            className="myPage"
            alt="myPage"
            src="/images/suminKim/오구.png"
          />
        </Link>
      </div>
    </NavBox>
  );
};

const NavBox = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border-bottom: 1px solid lightgray;
`;

const LogoTitle = styled.span`
  padding-left: 20px;
  font-size: 25px;
  font-family: 'Lobster', cursive;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
  height: 32px;
  background-color: #efefef;
  border-radius: 5px;
  /* border-style: none; */
  color: #8e8e8e;
  font-weight: lighter;
  cursor: text;

  .fisearch {
    margin: 0 10px;
    color: #8e8e8e;
    font-size: 18px;
  }
`;

const Search = styled.div`
  width: 200px;
  margin-top: 4px;
  color: #8e8e8e;
  font-weight: lighter;
`;

const SearchInput = styled.input.attrs({
  type: 'text',
  placeholder: '검색',
})`
  margin-top: 4px;
  border-style: none;
  background-color: #efefef;

  &::placeholder {
    color: #c1c1c4;
    font-weight: lighter;
  }
`;

export default Nav;
