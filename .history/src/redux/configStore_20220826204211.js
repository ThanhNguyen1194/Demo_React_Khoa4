import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import ToDoListReducer from "./reducers/TodolistReducer";

import createMiddleWareSaga from "redux-saga"
import { rootSaga } from "./Sagas/rootSaga";

const middleWareSaga = createMiddleWareSaga();

middleWareSaga.run(rootSaga);

const rootReducer = combineReducers({
    ToDoListReducer
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga));

export default store;