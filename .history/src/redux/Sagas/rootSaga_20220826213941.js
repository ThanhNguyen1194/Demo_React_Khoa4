import { Axios } from 'axios'
import { fork, take, takeEvery, delay, takeLatest, call,put } from 'redux-saga/effects'
import { GET_TASK_API } from '../constants/ToDoListConst'


function * getTaskListApi(action) {
    let {data,status} = yield call(() => {
        return Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET'
        })
    })

    yield put({
        type:GET_TASK_API,
        taskList:data
    })

    console.log("data", data)
    console.log("status", status)
}



export function* rootSaga() {

    yield takeLatest("getTaskListApiAction", getTaskListApi)
}