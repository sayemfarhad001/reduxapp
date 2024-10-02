
import { configureStore } from "@reduxjs/toolkit";
//DEPRECATED - createStore is replaced by configureStore using @reduxjs/toolkit
// import { legacy_createStore as createStore, applyMiddleware } from "redux";

import reducers from "./reducers"
import { thunk } from "redux-thunk";

const preLoadedState = {};

//UNCOMMENT BELOW CODE
const middleware = [thunk];
const store = configureStore({reducer : reducers, preLoadedState, middleware: ()=>middleware});

//COMMENT BELOW CODE : DEPRECATED - createStore is replaced by configureStore using @reduxjs/toolkit
// const middleware = applyMiddleware(thunk)
// const store = createStore(reducers, preLoadedState, middleware)

export default store;