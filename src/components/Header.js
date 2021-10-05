import React from 'react'
import {Grid, Text, Button} from '../elements';

const Header = (props) => {
    return (
        <React.Fragment>
            <Grid is_flex padding="16px">
                <Grid>
                    <Text bold>logo</Text>
                </Grid>
                <Grid is_right>
                    <Button radius="0px" width="70px" color="#212121" text="login"></Button>
                    <Button radius="0px" width="70px" color="#212121" text="logout"></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Header
