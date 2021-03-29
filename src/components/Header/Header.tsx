import React, { useEffect } from "react";
import styled from "styled-components";
import firebase from "firebase/app";
import { logout, saveUser } from "../../redux";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

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
  cursor: pointer;
`;
const Welcome = styled.div`
  color: white;
  font-size: 28px;
`;

const Header: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.auth.name);
  const token = useAppSelector((state) => state.auth.token);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const { email, displayName: name, uid } = user;
        dispatch(saveUser({ token, email, name, uid }));
      }
    });
    return unsubscribe;
  }, []);

  const signOut = () => dispatch(logout());
  return (
    <Wrapper>
      <Left></Left>
      <Right>
        {token ? (
          <SearchBar placeholder="Search..."></SearchBar>
        ) : (
          <Welcome>Welcome to Slack Clone by sv.dev</Welcome>
        )}
        <UserInfo onClick={signOut}>{name ? name[0] : "G"}</UserInfo>
      </Right>
    </Wrapper>
  );
};

export default Header;
