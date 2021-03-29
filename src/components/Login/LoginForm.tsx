import React, { useEffect } from "react";
import styled from "styled-components";
import firebase from "firebase/app";
import { useAppSelector } from "../../redux/hooks";
import { useHistory } from "react-router";

export interface LoginFormProps {}

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #70335a;
`;
const Button = styled.button`
  color: white;
  background-color: #400f3f;
  padding: 40px;
  font-size: 24px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 250ms;
  :hover {
    background-color: #380e37;
  }
`;

const LoginForm: React.FC<LoginFormProps> = () => {
  const token = useAppSelector((state) => state.auth.token);
  const history = useHistory();
  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [token]);
  const handleGoogleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((r) => console.log("signed in with google", r))
      .catch((error) => console.log("error signing in with google", error));
  };
  return (
    <Wrapper>
      <Button onClick={handleGoogleLogin}>Login with google</Button>
    </Wrapper>
  );
};

export default LoginForm;
