import {fork,take,takeEvery,delay} from 'redux-saga/effects'


function * getTaskListApi(action) {

    yield delay(3000)
    console.log('getTaskListApi',action)
}



export function * rootSaga(){

    yield takeEvery("getTaskListApiAction",getTaskListApi)
}