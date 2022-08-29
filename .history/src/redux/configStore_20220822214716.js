import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import TodolisReducer from "./reducers/TodolistReducer";
const rootReducer = combineReducers({
    TodolisReducer
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk));

export default store;