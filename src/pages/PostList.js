import React from 'react';
import { Grid, Button, Text, Image } from '../elements';


const PostList = (props) => {


    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex padding="16px">
                    <Grid is_flex width="auto">
                        <Image shape="circle" src={props.src}/>
                        <Text bold>{props.user_info.user_name}</Text>
                    </Grid>
                    <Grid is_flex width="auto">
                        <Text>{props.insert_dt}</Text>
                        {props.is_me && <Button width="auto" margin="4px" padding="4px" text="수정"
                        ></Button>}
                    </Grid>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid padding="16px">
                    <Image shape="rectangle" src={props.src} />
                </Grid>
                <Grid padding="16px">
                    <Text margin="0px" bold>댓글 {props.comment_cnt} 개</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

PostList.defaultProps = {
    user_info : {
        user_name : 'cherry',
        user_profile : 'https://cherryiscute.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-08-22+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.56.01.png',

    },
    image_url : 'https://cherryiscute.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-08-22+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.56.01.png', 
    contents: '체리네요!',
    comment_cnt: 10,
    insert_dt: '2021-10-05 10:00:00',
}

export default PostList