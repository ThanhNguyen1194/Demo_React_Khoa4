import { call, delay, put, takeLatest } from "redux-saga/effects";
import CommentsService from "../../../services/CommentsService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_COMMENTS_SAGA } from "../../constants/Cyberbugs/CommentConstans";

function* getAllComments(action) {

  
 
    try {

        //Gọi api lấy dữ liệu về
        const { data, status } = yield call(() => CommentsService.getAllComments(action.taskId));
        //Gọi api thành công thì dispatch lên reducer thông qua put
        // if (status === STATUS_CODE.SUCCESS) {
        //     console.log(data)

        //     history.push('/projectmanagement');
        // }


    } catch (err) {
        console.log(err);
    }
   
   
}





export function* theoDoiGetAllcommentSaga() {
    yield takeLatest(GET_ALL_COMMENTS_SAGA, getAllComments);
}