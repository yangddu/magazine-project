import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';

import { getCookie, setCookie, deleteCookie } from '../../shared/Cookie';

import { auth } from '../../shared/firebase';
import firebase from 'firebase/compat/app';

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
                dispatch(setUser({
                    user_name: user_name, 
                    id: id, 
                    user_profile: '',
                    uid: user.user.uid,
                }))
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

const loginFB = (id, pwd) => {
    return function (dispatch, getState, {history}) {

        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
        auth
        .signInWithEmailAndPassword(id, pwd)
        .then((user) => {
            console.log(user);

            dispatch(setUser({
                user_name: user.user.displayName, 
                id: id, 
                user_profile: '',
                uid: user.user.uid,
            }))
            history.push('/');
            //로그인 한 다음에 뭐 할꺼야?
            // Signed in
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode, errorMessage)
        });
        });

    }
}

const loginCheckFB = () => {
    return function ( dispatch, getState, {history} ) {
        auth.onAuthStateChanged((user) => {
            if(user){
                dispatch(
                    setUser({
                        user_name: user.displayName,
                        user_profile: '',
                        id: user.email,
                        uid: user.uid,
                    })
                );
            }else {
                dispatch(logOut());
            }
        })
    }
}

const logoutFB = () => {
    return function (dispatch, getState, {history}) {
        auth.signOut().then(() => {
            dispatch(logOut());
            history.replace('/');
        })
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
    loginFB,
    logoutFB,
    loginCheckFB,
};

export { actionCreators }; 