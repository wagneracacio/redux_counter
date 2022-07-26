import { createStore, combineReducers } from "redux";
import contadorReducer from "../reducers/contador";

const store = createStore(combineReducers({ contadorReducer }));

export default store;
