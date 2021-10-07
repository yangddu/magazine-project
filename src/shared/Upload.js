import React from 'react';

import { Button } from '../elements';
import { storage } from './firebase';

import { actionCreators as imageActions } from '../redux/modules/image';
import { useDispatch, useSelector } from 'react-redux'; 

const Upload = (props) => {
    const dispatch = useDispatch();
    const is_uploading = useSelector(state => state.image.uploading);
    const fileInput = React.useRef();

    const selectFile = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.files[0]);

        console.log(fileInput.current.files[0]);
    }


    const uploadFB = () => {
        let image = fileInput.current.files[0];
        // const _upload = storage.ref(`images/${image.name}`).put(image);

        // _upload.then((snapshot) => {
        //     console.log(snapshot);

        //     snapshot.ref.getDownloadURL().then((url) => {
        //         console.log(url);
        //     })
        // })
        dispatch(imageActions.uploadImageFB(image));
    }

    return(
        <React.Fragment>
            <input type="file" onChange={selectFile} ref={fileInput} disabled={is_uploading}/>
            <Button onClick={uploadFB} text="업로드하기"></Button>
        </React.Fragment>
    )
}

export default Upload;