import React from "react";
import { useParams } from "react-router";

export interface DirectChatProps {}
interface iParams {
  chatId: string;
}

const DirectChat: React.FC<DirectChatProps> = ({}) => {
  const params = useParams<iParams | undefined>();
  return <div>you are on chat {params?.chatId}</div>;
};

export default DirectChat;
