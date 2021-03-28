import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import { firebaseConfig } from "./firebase-config";

import "./index.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
