import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';

import { getCookie, setCookie, deleteCookie } from '../../shared/Cookie';

//액션
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';



//액션생성함수
//로그인, 로그아웃, 유저 정보 가져오는 함수
const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));


//initialState
const initialState = {
    user: null,
    is_login: false,
}


//middleware actions 
const loginAction = (user) => {
    return function (dispatch, getState, {history}) {
        console.log(history);
        dispatch(logIn(user));
        history.push('/');
    }
}


//리듀서
export default handleActions({
    [LOG_IN] : (state, action) => produce(state, (draft) => {
        setCookie("is_login", "success");

        //initialState에 들어있는 user에 어떤 값이 들어가야하고,
        //is_login에 true가 되어야함.
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOG_OUT] : (state, action) => produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
    }),
    [GET_USER] : (state, action) => produce(state, (draft) =>{

    }),
}, initialState)

// 액션 생성 함수 export
const actionCreators = {
    logIn,
    logOut,
    getUser,
    loginAction,
};

export { actionCreators }; 