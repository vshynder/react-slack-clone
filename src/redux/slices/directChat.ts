import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "firebase";
import { RootState } from "../index";

interface iUser {
  name: string;
  uid: string;
  email: string;
  id: string;
}
interface iInitState {
  id: number | null;
  chats: iUser[];
  chatIds: string[];
}
interface iCreateNewDirectChat {
  responderId: string;
}
interface iSaveChatIds {
  type: string;
  payload: string[];
}

const initialState: iInitState = {
  id: null,
  chats: [],
  chatIds: [],
};

export const createNewDirectChat = createAsyncThunk(
  "directchat/create",
  async (payload: iCreateNewDirectChat, { dispatch, getState }) => {
    const state = getState() as RootState;
    const response = await firebase
      .firestore()
      .collection("directChats")
      .add({
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
        users: [state.auth.uid, payload.responderId],
      });

    dispatch(fetchOpenDirectChats());
  }
);
export const fetchOpenDirectChats = createAsyncThunk(
  "directchat/fetchopen",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const data = await firebase
      .firestore()
      .collection("directChats")
      .where("users", "array-contains-any", [state.auth.uid])
      .get();
    const chats = data.docs.map((d) => ({ data: d.data(), id: d.id }));
    const userIds = chats.map(
      (chat) =>
        chat.data.users.filter((user: string) => user !== state.auth.uid)[0]
    );
    const users: iUser[] = [];
    for (let i = 0; i < userIds.length; i++) {
      const data = await firebase
        .firestore()
        .collection("users")
        .doc(userIds[i])
        .get();
      const user = { ...data.data(), id: chats[i].id } as iUser;
      users.push(user);
    }

    return users;
  }
);

const directChatSlice = createSlice({
  initialState,
  name: "direactChat",
  reducers: {
    saveChatIds(state, action: iSaveChatIds) {
      return { ...state, chatIds: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewDirectChat.fulfilled, (state, action) => {
      console.log("chat was created");
    });
    builder.addCase(fetchOpenDirectChats.fulfilled, (state, action) => {
      return { ...state, chats: action.payload };
    });
  },
});

export const { saveChatIds } = directChatSlice.actions;

export default directChatSlice.reducer;
