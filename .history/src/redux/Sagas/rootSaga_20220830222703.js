import { all } from "redux-saga/effects";
import Todolist from "../../pages/Todolist/TodolistRCC";
import TodolistRFC from "../../pages/Todolist/TodolistRFC";
import * as ToDoListSaga from './ToDoListSaga'
// import {theoDoiActionGetTaskApi} from './ToDoListSaga'
import * as Cyberbugs from './Cyberbugs/UserCyberbugsSaga'
import * as ProjectCategorySaga from './Cyberbugs/ProjectCategorySaga'

export function* rootSaga() {

  yield all([
    //Nghiệp vụ theo dõi các action saga todolist
    ToDoListSaga.theoDoiActionGetTaskApi(),
    ToDoListSaga.theoDoiActionAddTaskApi(),
    ToDoListSaga.theoDoiActionDeleteTask(),
    ToDoListSaga.theoDoiDoneTask(),
    ToDoListSaga.theoDoiRejectTask(),
    
    //Nghiệp vụ cyberbugs .... ,
    Cyberbugs.theoDoiSignin(),
    ProjectCategorySaga.theoDoigetAllProjectCategory()
  ])


}