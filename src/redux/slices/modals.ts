import { createSlice } from "@reduxjs/toolkit";

interface iInitState {
  directModalIsOpen: boolean;
}
interface iOpenDirectModal {
  type: string;
  //   payload: boolean;
}

const initialState: iInitState = {
  directModalIsOpen: false,
};

const modalsSlice = createSlice({
  initialState,
  name: "modals",
  reducers: {
    openDirectModal(state, action: iOpenDirectModal) {
      return { ...state, directModalIsOpen: true };
    },
    closeDirectModal(state, action: iOpenDirectModal) {
      return { ...state, directModalIsOpen: false };
    },
  },
});

export const { openDirectModal, closeDirectModal } = modalsSlice.actions;

export default modalsSlice.reducer;
