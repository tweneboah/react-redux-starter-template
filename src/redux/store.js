import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";

//STORE
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
