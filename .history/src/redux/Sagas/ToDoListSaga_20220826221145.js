import Axios from 'axios'
import { call, delay, fork, take, takeEvery, takeLatest,put } from 'redux-saga/effects'
import { toDoListService } from '../../services/ToDoListService'
import { GET_TASK_API } from '../constants/ToDoListConst'
/*redux 2 loại action: 
    Loại 1: action => object (action thường)
    Loại 2: action => function (thường dùng để xử lý api hoặc gọi các action khác )

*/
function* getTaskApiAction(action) {

    let {data,status} = yield call(toDoListService.getTaskApi)
    //Sau khi lấy giá trị thành công dùng put (giống dispatch bên thunk) 
    yield put({
        type:GET_TASK_API,
        taskList:data
    })
}

export function * theoDoiActionGetTaskApi(){
   yield takeLatest('getTaskApiAction',getTaskApiAction)
}