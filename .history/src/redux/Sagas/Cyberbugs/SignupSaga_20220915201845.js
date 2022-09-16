
import { call, delay, fork, take, takeEvery, takeLatest, put, select } from 'redux-saga/effects';
import { TOKEN, USER_LOGIN } from '../../../util/constants/settingSystem';
import { history } from '../../../util/history';
import { DISPLAY_LOADING } from '../../constants/LoadingConst';




function* signinSaga(action) {
    // console.log(action);
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);

    //Gọi api 
    try {
        const { data, status } = yield call(() => cyberbugsService.signinCyberBugs(action.userLogin));

        //Lưu vào localstorage khi đăng nhập thành công
        // localStorage.setItem(TOKEN, data.content.accessToken);
        // localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));


        yield put({
            // type: USLOGIN,
            // userLogin: data.content
        })

        // let history = yield select(state=> state.HistoryReducer.history)

        history.push('/logincyberbug');

    } catch (err) {
        console.log(err.response.data)
    }


    yield put({
        type: HIDE_LOADING
    })

}


export function* theoDoiSignin() {
    yield takeLatest(USER_SIGNIN_API, signinSaga);
}