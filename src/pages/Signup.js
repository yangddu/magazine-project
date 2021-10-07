import React from 'react';
import { Grid, Button, Text, Input } from '../elements';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

const Signup = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [user_name, setUserName] = React.useState('');
    const [pwdCheck, setPwdCheck] = React.useState('');

    const signup = () => {


        if( pwd !== pwdCheck ) {
            return;
        }

        if( id === '' || pwd === '' || user_name === '') {
            return;
        }

        dispatch(userActions.signupFB(id, pwd, user_name));
    }

    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold>
                    회원가입
                </Text>

                <Grid padding="16px 0px">
                    <Input 
                        label="아이디"
                        placeholder="아이디"
                        onChange={ (e) => {
                            setId(e.target.value);
                        }}
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input 
                        label="닉네임"
                        placeholder="닉네임"
                        onChange={ (e) => {
                            setUserName(e.target.value);
                        }}
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input 
                        type="password"
                        label="비밀번호"
                        placeholder="비밀번호"
                        onChange={ (e) => {
                            setPwd(e.target.value);
                        }}
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input 
                        type="password"
                        label="비밀번호 확인"
                        placeholder="비밀번호"
                        onChange={ (e) => {
                            setPwdCheck(e.target.value);
                        }}
                    />
                </Grid>

                <Button bg="#212121" 
                        color="#fff" 
                        radius="4px" 
                        text="로그인하기" 
                        padding="4px 12px"
                        onClick={signup}
                >

                </Button>
            </Grid>
        </React.Fragment>
    )
}

export default Signup;
