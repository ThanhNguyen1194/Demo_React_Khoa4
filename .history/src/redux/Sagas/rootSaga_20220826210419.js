import {fork,take} from 'redux-saga/effects'


function * getTaskListApi() {
    yield take('getTaskListApiAction')
    console.log('getTaskListApi')
}



export function * rootSaga(){

    yield fork(getTaskListApi)
}