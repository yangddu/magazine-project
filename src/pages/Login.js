import React from 'react';
import { Grid, Button, Text, Input } from '../elements';
import { setCookie, getCookie, deleteCookie } from '../shared/Cookie';
import { actionCreators as userActions } from '../redux/modules/user';

import { useDispatch } from 'react-redux';

const Login = (props) => {
    const dispatch = useDispatch();

    const login = () => {
        dispatch(userActions.loginAction('user_id'));
    }
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold>
                    로그인
                </Text>

                <Grid padding="16px 0px">
                    <Input 
                        label="아이디"
                        placeholder="아이디"
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input 
                        label="비밀번호"
                        placeholder="비밀번호"
                    />
                </Grid>

                <Button bg="#212121" color="#fff" radius="4px" text="로그인하기" padding="4px 12px" onClick={() => {
                    console.log('로그인!')
                    login()
                }}>
                </Button>
            </Grid>
        </React.Fragment>
    )
}

export default Login;
