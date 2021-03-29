import { all } from "redux-saga/effects";
import chatWatcher from "./chat";

export function* rootSaga() {
  yield all([chatWatcher()]);
}
