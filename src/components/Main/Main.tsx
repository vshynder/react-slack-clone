import React from "react";
import styled from "styled-components";
import { SideBar } from "../SideBar";

const MainDiv = styled.div`
  display: flex;
  background-color: #70335a;
  height: 90vh;
  min-height: calc(100vh - 60px);
`;
const SideBarWrapper = styled.div`
  flex: 1;
  height: 100%;
  background-color: #400f3f;
  padding: 20px;
`;
const ChatWrapper = styled.div`
  flex: 3;
`;

const Main: React.FC = () => {
  return (
    <MainDiv>
      <SideBarWrapper>
        <SideBar />
      </SideBarWrapper>
      <ChatWrapper></ChatWrapper>
    </MainDiv>
  );
};

export default Main;
