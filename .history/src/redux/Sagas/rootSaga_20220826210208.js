import {fork} from 'redux-saga/effects'


function * getTaskListApi() {
    yield take('getTaskListApiAction')
}



export function * rootSaga(){

    yield fork(getTaskListApi)
}