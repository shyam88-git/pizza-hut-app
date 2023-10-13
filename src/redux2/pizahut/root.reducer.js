import { combineReducers } from "redux";
import { pizahutReducer } from "./pizahut.reducer";


let rootReducer =combineReducers(pizahutReducer
   
);

export {rootReducer};