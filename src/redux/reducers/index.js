import { combineReducers } from "redux";
import trade  from "./tradeReducer";

export const appReducer = combineReducers({
  trade
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;