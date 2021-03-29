import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import firebase from "firebase/app";
import { closeDirectModal, createNewDirectChat } from "../../redux";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface iUser {
  name: string;
  uid: string;
  email: string;
}

const customModalStyles = {
  content: {
    width: "60%",
    height: "40%",
    minWidth: 500,
    minHeight: 300,
    backgroundColor: "#400f3f",
    outline: "none",
    borderRadius: 15,
    padding: 40,
  },
  overlay: {
    backgroundColor: "#70335a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const StyledModal = styled(Modal)`
  height: 100vh;
  width: 100vw;
`;
const Header = styled.div`
  font-size: 24px;
  color: white;
  text-align: center;
`;
const Content = styled.div`
  color: white;
  overflow: scroll;
  height: 220px;
`;
const Person = styled.div`
  font-size: 18px;
  padding: 7px 20px;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

StyledModal.setAppElement("#root");

const CreateDialog: React.FC = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modals.directModalIsOpen);
  const me = useAppSelector((state) => state.auth.uid);

  const [users, setUsers] = useState<any>([]);

  const closeModal = () => dispatch(closeDirectModal());

  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const data = await firebase.firestore().collection("users").get();
    const users = data.docs.map((d) => d.data());
    setUsers(users);
  };

  return (
    <StyledModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Direct messages modal"
      style={customModalStyles}
    >
      <div>
        <Header>Choose a person to start a live chat with</Header>
        <Content>
          {users
            .filter((user: iUser) => user.uid !== me)
            .map((user: iUser, index: number) => {
              const createNewChat = () =>
                dispatch(createNewDirectChat({ responderId: user.uid }));

              return (
                <Person key={`${user.uid}+${index}`} onClick={createNewChat}>
                  {user.name}
                </Person>
              );
            })}
        </Content>
      </div>
    </StyledModal>
  );
};

export default CreateDialog;
