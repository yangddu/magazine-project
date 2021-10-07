import React from 'react';
import { Grid, Button, Text, Input } from '../elements';
import { setCookie, getCookie, deleteCookie } from '../shared/Cookie';
import { actionCreators as userActions } from '../redux/modules/user';

import { useDispatch } from 'react-redux';
import { emailCheck } from '../shared/common';

const Login = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = React.useState('');
    const [pwd, setPwd] = React.useState('');

    const login = () => {

        if( id === '' || pwd === ''){
            window.alert('아이디 혹은 비밀번호가 공란입니다. 입력해주세요!');
            return;
        }

        if( !emailCheck(id)) {
            window.alert('이메일 형식이 맞지 않습니다!')
            return;
        }

        dispatch(userActions.loginFB(id, pwd));
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
                        onChange= {(e) => {
                            setId(e.target.value);
                        }}
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input 
                        label="비밀번호"
                        type="password"
                        placeholder="비밀번호"
                        onChange= {(e) => {
                            setPwd(e.target.value);
                        }}
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
