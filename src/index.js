import React from "react";
import ReactDom from "react-dom";
// import Main from "./Main";
import "./style/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./redux/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

//url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;
