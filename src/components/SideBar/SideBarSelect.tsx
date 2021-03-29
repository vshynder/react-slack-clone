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
  onSelect: (i: number) => void;
}

interface iWrapperProps {
  readonly isClosed: boolean;
}
interface iItemProps {
  last?: boolean;
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

const Item = styled.p<iItemProps>`
  color: white;
  ${(props) => (props.last ? "opacity: 0.2" : "opacity: 0.6")};
  transition: 250ms;
  padding: 3px 0;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const SideBarSelect: React.FC<SideBarSelectProps> = ({
  title,
  elements,
  onCreateNew,
  onSelect,
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
            const handelClick = () => onSelect(index);
            return (
              <Item onClick={handelClick} key={index}>
                {element.title}
              </Item>
            );
          })}
        <Item last onClick={onCreateNew}>
          + create new
        </Item>
      </Data>
    </Wrapper>
  );
};

export default SideBarSelect;
