import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../redux/configureStore';

import PostList from '../pages/PostList';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Header from '../components/Header';
import { Grid, Button } from '../elements';
import Permit from './Permit';

import { actionCreators as userActions } from '../redux/modules/user';
import {useDispatch} from 'react-redux';
import {apiKey} from './firebase';
import PostWrite from '../pages/PostWrite';
import PostDetail from '../pages/PostDetail';

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true : false;

  React.useEffect(() => {
    if(is_session){
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid>
      <Header />
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/write" exact component={PostWrite}></Route>
        <Route path="/post/:id" exact component={PostDetail}></Route>
      </ConnectedRouter>
      </Grid>
      <Permit>
        <Button is_float text="+" onClick={() => {
          history.push('/write');
        }}></Button>
      </Permit>
    </React.Fragment>
  );
}

export default App;
