import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import { firestore } from '../../shared/firebase';
import moment from 'moment';


//action
const SET_POST = 'SET_POST'; //목록 넣어줌
const ADD_POST = 'ADD_POST'; //목록 추가해줌

//action creators
const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

//initialState
const initialState = {
    list: [],
}

const initialPost = {
    // id: 0,
    // user_info : {
    //     user_name : 'cherry',
    //     user_profile : 'https://cherryiscute.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-08-22+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.56.01.png',

    // },
    image_url : 'https://cherryiscute.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-08-22+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.56.01.png', 
    contents: '',
    comment_cnt: 0,
    insert_dt: moment().format('YYYY-MM-DD hh:mm:ss'),
}

//middlewares

const addPostFB = (contents='') => {
    return function (dispatch, getState, {history}) {
        const postDB = firestore.collection('post');
        const _user = getState().user.user;

        const user_info = {
            user_name: _user.user_name,
            user_id: _user.uid,
            user_profile: _user.user_profile,
        };

        const _post = {
            ...initialPost,
            contents: contents,
            insert_dt: moment().format('YYYY-MM-DD hh:mm:ss'),
        };

        postDB.add({...user_info, ..._post}).then((doc) => {
            let post = {
                user_info,
                ..._post,
                id: doc.id,
            }
            dispatch(addPost(post));
            history.replace('/')
        }).catch((err) => {
            console.log('post 작성에 실패했어요!', err);
        })
    }
}

const getPostDB = () => {
    return function (dispatch, getState, {history}) {
        const postDB = firestore.collection("post");
        postDB.get().then((docs) => {
            let post_list = [];
            docs.forEach((doc) => {
                console.log(doc.id, doc.data());

                let _post = {
                    id: doc.id,
                    ...doc.data()
                };

                let post = {
                    id: doc.id,
                    user_info : {
                        user_name : _post.user_name,
                        user_profile : _post.user_profile,
                        user_id: _post.user_id,
                    },
                    image_url : _post.image_url, 
                    contents: _post.contents,
                    comment_cnt: _post.comment_cnt,
                    insert_dt: _post.insert_dt,
                };
                post_list.push(post);
            });
            console.log(post_list);

            dispatch(setPost(post_list));
        });
        
    }
}

//reducer
export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.post_list;
        }),
        [ADD_POST] : (state, action) => produce(state, (draft) => {
            draft.list.unshift(action.payload.post);
        })
    }, initialState
);

const actionCreators = {
    setPost,
    addPost,
    getPostDB,
    addPostFB,
}

export { actionCreators };