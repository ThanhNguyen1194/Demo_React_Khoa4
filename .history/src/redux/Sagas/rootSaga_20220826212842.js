import { Axios } from 'axios'
import { fork, take, takeEvery, delay, takeLatest, call } from 'redux-saga/effects'


function* getTaskListApi(action) {

    let result = yield call(() => {
      return  Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET'
        })
    })

    console.log("data", result)
    console.log("status", status)
}



export function* rootSaga() {

    yield takeLatest("getTaskListApiAction", getTaskListApi)
}