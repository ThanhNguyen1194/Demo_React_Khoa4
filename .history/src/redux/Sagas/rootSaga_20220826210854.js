import {fork,take,takeEvery} from 'redux-saga/effects'


function * getTaskListApi() {
    yield take('getTaskListApiAction')
    console.log('getTaskListApi')
}



export function * rootSaga(){

    yield takeEvery("getTaskListApiAction",getTaskListApi)
}