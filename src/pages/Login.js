import React from 'react';
import { Grid, Button, Text, Image, Input } from '../elements';

const Login = (props) => {
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
                        label="패스워드"
                        placeholder="비밀번호"
                        
                    />
                </Grid>

                <Button bg="#212121" color="#fff" radius="4px" text="로그인하기" padding="4px 12px">

                </Button>
            </Grid>
        </React.Fragment>
    )
}

export default Login;
