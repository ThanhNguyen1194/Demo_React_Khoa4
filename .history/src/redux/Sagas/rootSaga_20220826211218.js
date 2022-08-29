import {fork,take,takeEvery,delay} from 'redux-saga/effects'


function * getTaskListApi() {

    yield delay(3000)
    console.log('getTaskListApi')
}



export function * rootSaga(){

    yield takeEvery("getTaskListApiAction",getTaskListApi)
}