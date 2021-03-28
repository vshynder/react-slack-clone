import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #400f3f;
  padding: 15px 20px;
  display: flex;
  height: 10vh;
  max-height: 60px;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
`;
const SearchBar = styled.input`
  width: 60%;
  height: 30px;
  background-color: #70335a;
  border: none;
  border-radius: 5px;
  padding: 15px;
  font-size: 18px;
  color: white;
  outline: none;
`;
const UserInfo = styled.div`
  height: 100%;
  width: 30px;
  border-radius: 5px;
  background-color: #70335a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: white;
`;

const Header: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Left></Left>
      <Right>
        <SearchBar placeholder="Search..."></SearchBar>
        <UserInfo>V</UserInfo>
      </Right>
    </Wrapper>
  );
};

export default Header;
