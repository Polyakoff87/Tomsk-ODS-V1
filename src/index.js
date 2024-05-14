import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <HashRouter>
        <App />
      </HashRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);


