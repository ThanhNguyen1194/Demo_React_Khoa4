import { call, delay, put, takeLatest } from "redux-saga/effects";
import CommentsService from "../../../services/CommentsService";

function* getAllComments(action) {

  
 
    try {

        //Gọi api lấy dữ liệu về
        const { data, status } = yield call(() => CommentsService.getAllComments(action.taskId));
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            history.push('/projectmanagement');
        }


    } catch (err) {
        console.log(err);
    }
   
    yield put({
        type: HIDE_LOADING
    })
}





export function* theoDoiCreateProjectSaga() {
    yield takeLatest('CREATE_PROJECT_SAGA', createProjectSaga);
}