import React, { useState } from "react";
import styled from "styled-components";
import { transform } from "typescript";

export interface iSideBarElement {
  title: string;
}

export interface SideBarSelectProps {
  title: string;
  elements: Array<iSideBarElement> | [];
  onCreateNew: () => void;
}

interface iWrapperProps {
  readonly isClosed: boolean;
}

const Wrapper = styled.div<iWrapperProps>`
  color: white;
  font-size: 18px;
  overflow: hidden;
  transition: 250ms;
  ${(props) => (props.isClosed ? "max-height: 500px" : "max-height: 40px")}
`;
const Title = styled.div`
  display: flex;
  cursor: pointer;
  padding: 10px;
  transition: 250ms;
  border-radius: 5px;
  :hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;
const Icon = styled.div<iWrapperProps>`
  transition: 250ms;
  ${(props) => (props.isClosed ? "transform: rotate(90deg)" : null)};
`;
const Name = styled.p`
  padding-left: 20px;
`;
const Data = styled.div`
  padding-left: 30px;
`;

const Item = styled.p`
  color: white;
  opacity: 0.2;
  transition: 250ms;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

const SideBarSelect: React.FC<SideBarSelectProps> = ({
  title,
  elements,
  onCreateNew,
}) => {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const toggleIsClosed = () => setIsClosed((p) => !p);
  return (
    <Wrapper isClosed={isClosed}>
      <Title onClick={toggleIsClosed}>
        <Icon isClosed={isClosed}>{">"}</Icon>
        <Name>{title}</Name>
      </Title>
      <Data>
        {elements &&
          elements.map((element: iSideBarElement, index: number) => {
            return <Item key={index}>{element.title}</Item>;
          })}
        <Item onClick={onCreateNew}>+ create new</Item>
      </Data>
    </Wrapper>
  );
};

export default SideBarSelect;
