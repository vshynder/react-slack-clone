import { createSlice } from "@reduxjs/toolkit";
import firebase from "firebase/app";

interface IinitState {
  token: string | null;
  name: string | null;
  email: string | null;
  uid: string | null;
}
export interface iSaveUser {
  type: string;
  payload: {
    name: string | null;
    token: string | null;
    email: string | null;
    uid: string | null;
  };
}
interface iLogout {
  type: string;
  // payload: null;
}

const initialState: IinitState = {
  token: null,
  name: null,
  email: null,
  uid: null,
};

const authSlice = createSlice({
  initialState: initialState,
  name: "auth",
  reducers: {
    saveUser(state, action: iSaveUser) {
      if (action.payload.uid) {
        const { name, email, uid } = action.payload;
        firebase.firestore().collection("users").doc(action.payload.uid).set({
          name,
          email,
          uid,
        });
      }
      return { ...state, ...action.payload };
    },
    logout(state, action: iLogout) {
      firebase.auth().signOut();
      return initialState;
    },
  },
});

export const { saveUser, logout } = authSlice.actions;
export default authSlice.reducer;
