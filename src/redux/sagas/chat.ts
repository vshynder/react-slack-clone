import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { saveChatIds, saveUser } from "../slices";
import { iSaveUser } from "../slices/auth";
import firebase from "firebase/app";

function* loginWorker({ payload }: iSaveUser) {
  //   // @ts-ignore
  //   const myChatsDocs = yield firebase
  //     .firestore()
  //     .collection("directChats")
  //     .where("users", "array-contains-any", [payload.uid])
  //     .get();
  //   // @ts-ignore
  //   const chats = myChatsDocs.docs.map((s) => s.id);
  //   yield put(saveChatIds(chats));
}

export default function* chatWatcher() {
  yield takeEvery([saveUser.type], loginWorker);
}
