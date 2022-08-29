import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import ToDoListReducer from "./reducers/TodolistReducer";

import createMiddleWareSaga from "redux-saga"
import { rootSaga } from "./Sagas/rootSaga";

const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    ToDoListReducer
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga));

middleWareSaga.run(rootSaga);

export default store;