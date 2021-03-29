import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import { Header, LoginForm, Main, PrivateRoute } from "./components";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <PrivateRoute exact path="/login" component={LoginForm} />
        <PrivateRoute isPrivate path="/" component={Main} />
      </Router>
    </Provider>
  );
}

export default App;
