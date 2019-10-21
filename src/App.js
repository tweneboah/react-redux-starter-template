import React from "react";

import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Template setup</h1>
      </div>
    </Provider>
  );
}

export default App;
