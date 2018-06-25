import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./src/modules/store";
import Feed from "src/screens/Feed/container"

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Feed />
      </Provider>
    );
  }
}