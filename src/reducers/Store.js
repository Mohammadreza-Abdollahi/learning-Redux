import { applyMiddleware, createStore } from "redux";
// import rootReducer from "./RootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import userReducer from "./usersReducer/UserReducer";

const store = createStore(userReducer , composeWithDevTools(applyMiddleware(logger , thunk)));

export default store;