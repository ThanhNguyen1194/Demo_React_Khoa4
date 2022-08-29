import {fork,take} from 'redux-saga/effects'


function * getTaskListApi() {
    yield take('getTaskListApiAction')
}



export function * rootSaga(){

    yield fork(getTaskListApi)
}