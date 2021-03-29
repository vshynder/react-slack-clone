import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { fetchOpenDirectChats, openDirectModal } from "../../redux";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import SideBarSelect from "./SideBarSelect";

export interface SideBarProps {}

const data: [] = [];

const SideBar: React.FC<SideBarProps> = () => {
  const histoty = useHistory();

  const dispatch = useAppDispatch();
  const directChats = useAppSelector((state) => state.directChat.chats);

  useEffect(() => {
    dispatch(fetchOpenDirectChats());
  }, []);

  const handleCreateNew = () => {};
  const createNewDialog = () => {
    return dispatch(openDirectModal());
  };
  const directChatSelect = (i: number) => {
    const address = `/directchat/${directChats[i].id}`;
    histoty.push(address);
  };

  return (
    <>
      <SideBarSelect
        title="channels"
        elements={data}
        onCreateNew={handleCreateNew}
        onSelect={() => {}}
      />
      <SideBarSelect
        title="Direct messages"
        elements={directChats.map((chat) => ({ title: chat.name }))}
        onCreateNew={createNewDialog}
        onSelect={directChatSelect}
      />
    </>
  );
};

export default SideBar;
