import {fork,take,takeEvery,delay,takeLatest,call} from 'redux-saga/effects'


function * getTaskListApi(action) {

  let result = yield call
}



export function * rootSaga(){

    yield takeLatest("getTaskListApiAction",getTaskListApi)
}