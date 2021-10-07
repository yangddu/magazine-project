import React from 'react'
import {Grid, Text, Button} from '../elements';
import { getCookie, deleteCookie } from '../shared/Cookie';

// 스토어에 있는 값을 가져와서 쓸 수 있게 해줌.
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

import {history} from '../redux/configureStore';
import { apiKey } from '../shared/firebase';

const Header = (props) => {
    const dispatch = useDispatch();

    const is_login = useSelector((state) => state.user.is_login);
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key)? true: false;
    console.log(_session_key);
    console.log(sessionStorage.getItem(_session_key));
    console.log(is_session);
    //const [ is_login, setIsLogin ] = React.useState(false);

    // React.useEffect(() => {
        
    //     let cookie = getCookie('user_id');
    //     if( cookie ) {
    //         setIsLogin(true)
    //     }else {
    //         setIsLogin(false)
    //     }
    // })

    
    if( is_login && is_session ) {
        return (
        <React.Fragment>
            <Grid is_flex padding="16px">
                <Grid>
                    <Text bold>logo</Text>
                </Grid>
                <Grid is_right>
                    <Button radius="0px" width="70px" color="#212121" text="info"></Button>
                    <Button radius="0px" width="70px" color="#212121" text="notice"></Button>
                    <Button radius="0px" width="70px" color="#212121" text="logout" onClick={() => {
                        dispatch(userActions.logoutFB());
                    }}></Button>
                </Grid>
            </Grid>
        </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <Grid is_flex padding="16px">
                <Grid>
                    <Text bold>logo</Text>
                </Grid>
                <Grid is_right>
                    <Button radius="0px" width="70px" color="#212121" text="login" onClick={() => {
                        history.push('/login')
                    }}></Button>
                    <Button radius="0px" width="70px" color="#212121" text="signup" onClick={() => {
                        history.push('/signup')
                    }}></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Header;
