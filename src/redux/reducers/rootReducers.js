import { combineReducers } from "redux";
import expensesReducer from "./expenses_reducers";

const rootReducer = combineReducers({
  expenses: expensesReducer
});

export default rootReducer;
