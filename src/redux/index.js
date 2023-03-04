import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import { persistReducer } from "redux-persist";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['trade']
  };
  
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(logger));

export default store;