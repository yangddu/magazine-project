import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

import {storage} from '../../shared/firebase';

const UPLOADING = 'UPLOADING'; //업로드 중인지 아닌지 알게 해주는 액션
const UPLOAD_IMAGE = 'UPLOAD_IMAGE'; //실제로 파일을 업로드하는 액션

const uploading = createAction(UPLOADING, (uploading) => ({uploading}));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({image_url}));

const initialState = {
    image_url: '',
    uploading: false,
}

const uploadImageFB = (image) => {
    return function(dispatch, getState, {history}) {
        
        dispatch(uploading(true));
        const _upload = storage.ref(`images/${image.name}`).put(image);

        _upload.then((snapshot) => {
            console.log(snapshot);
            
            snapshot.ref.getDownloadURL().then((url) => {
                dispatch(uploadImage(url));
                console.log(url);
            })
        })
    }
}

export default handleActions({
    [UPLOAD_IMAGE]: (state, action) => produce( state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
    }),
    [UPLOADING] : (state, action) => produce( state, (draft) => {
        draft.uploading = action.payload.uploading;
    })
}, initialState)

const actionCreators = {
    uploadImage,
    uploadImageFB,

}

export {actionCreators};