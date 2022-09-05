import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import ToDoListReducer from "./reducers/TodolistReducer";
import LoadingReducer from "./reducers/LoadingReducer";
import {ModalReducer} from "./reducers/ModalReducer";
import {HistoryReducer} from "./reducers/HistoryReducer";
import {UserLoginCyberBugsReducer} from "./reducers/UserCyberBugsReducer"
import {ProjectCategoryReducer} from "./reducers/ProjectCategoryReducer"
import {ProjectCyberBugsReducer} from "./reducers/ProjectCyberBugsReducer"

import createMiddleWareSaga from "redux-saga"
import { rootSaga } from "./Sagas/rootSaga";

const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    ToDoListReducer,
    LoadingReducer,
    ModalReducer,
    HistoryReducer,
    UserLoginCyberBugsReducer,
    ProjectCategoryReducer,
    ProjectCyberBugsReducer
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga));

middleWareSaga.run(rootSaga);

export default store;