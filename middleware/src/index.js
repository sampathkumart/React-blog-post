import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Middleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/app";
import reducers from "./reducers";

const store = createStore(reducers, Middleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
