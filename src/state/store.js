import { applyMiddleware, configureStore } from "redux";
import reducers from "./reducers"
import { thunk } from "redux-thunk";


export const store = configureStore(reducers, {}, applyMiddleware(thunk))