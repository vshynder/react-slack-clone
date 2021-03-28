import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { Header, Main } from "./components";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
