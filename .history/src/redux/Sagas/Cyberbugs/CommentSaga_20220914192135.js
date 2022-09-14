import { call, delay, put, takeLatest } from "redux-saga/effects";
import {commentsService} from "../../../services/CommentsService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_COMMENTS_SAGA, INSERT_COMMENT_SAGA } from "../../constants/Cyberbugs/CommentConstans";

function* getAllComments(action) {

  
 
    try {

        //Gọi api lấy dữ liệu về
        const { data, status } = yield call(() => commentsService.getAllComments(action.taskId));
        //Gọi api thành công thì dispatch lên reducer thông qua put

        if (status === STATUS_CODE.SUCCESS) {
            
        }


    } catch (err) {
        console.log(err);
    }
   
   
}





export function* theoDoiGetAllcommentSaga() {
    yield takeLatest(GET_ALL_COMMENTS_SAGA, getAllComments);
}


function* insertComment(action) {

    console.log(action.newComment);

    
 
    try {

        //Gọi api lấy dữ liệu về
        const { data, status } = yield call(() => commentsService.insertComment(action.newComment));
        //Gọi api thành công thì dispatch lên reducer thông qua put
        console.log('data', data);
        // if (status === STATUS_CODE.SUCCESS) {
       
        // }


    } catch (err) {
        console.log(err);
        console.log(err.response?.data)

    }
   
   
}





export function* theoDoiInsertCommentSaga() {
    yield takeLatest(INSERT_COMMENT_SAGA, insertComment);
}