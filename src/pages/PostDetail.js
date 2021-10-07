import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Image, Input, Button } from '../elements';
import PostList from './PostList';

const PostDetail = () => {
    return (
        <React.Fragment>
            <PostList />
            <Grid padding="16px" is_flex>
                <Input placeholder="댓글 내용을 입력해주세요 :)"/>
                <Button width="50px" margin="0 2px 0 2px" text="작성"></Button>
            </Grid>
            <Grid padding="16px">
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
            </Grid>
        </React.Fragment>
    )
}

export default PostDetail;

const CommentItem = (props) => {

    const { user_profile, user_name, user_id, post_id, insert_dt, contents} = props;
    return (
        <Grid is_flex>
            <Grid is_flex width="auto">
                <Image shape="circle"/>
                <Text bold>{user_name}</Text>
            </Grid>
            <Grid is_flex margin="0px 4px">
                <Text>{contents}</Text>
                <Text>{insert_dt}</Text>
            </Grid>
        </Grid>
    )
}

CommentItem.defaultProps = {
    user_profile: '',
    user_name: 'cherry',
    user_id: '',
    post_id: 1,
    contents: '아무내용이나쓰자',
    insert_dt: '2021-01-01 19:00:00'
}
