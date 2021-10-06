import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';

import { getCookie, setCookie, deleteCookie } from '../../shared/Cookie';

import { auth } from '../../shared/firebase';

//액션
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';


//액션생성함수
//로그인, 로그아웃, 유저 정보 가져오는 함수
const setUser = createAction(SET_USER, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));


//initialState
const initialState = {
    user: null,
    is_login: false,
};

const user_inital = {
    user_name: 'joo',
    user_pwd: 'pppp',
}


//middleware actions 
const loginAction = (user) => {
    return function (dispatch, getState, {history}) {
        console.log(history);
        dispatch(setUser(user));
        history.push('/');
    }
};

const signupFB = (id, pwd, user_name) => {
    return function (dispatch, getState, {history}) {

        auth
        .createUserWithEmailAndPassword(id, pwd)
        .then((user) => {

            console.log(user);
            
            auth.currentUser.updateProfile({
                displayName: user_name,
            }).then(() => {
                dispatch(setUser({user_name: user_name, id: id, user_profile: ''}))
                history.push('/');
            }).catch((error) => {
                console.log(error);
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..

            console.log(errorCode, errorMessage)
        });

    }
}


//리듀서
export default handleActions({
    [SET_USER] : (state, action) => produce(state, (draft) => {
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
    logOut,
    getUser,
    loginAction,
    signupFB,
};

export { actionCreators }; 