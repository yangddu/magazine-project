import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../redux/configureStore';

import PostList from '../pages/PostList';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Header from '../components/Header';
import { Grid } from '../elements';

import { actionCreators as userActions } from '../redux/modules/user';
import {useDispatch} from 'react-redux';
import {apiKey} from './firebase';

function App() {
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true: false;

  React.useEffect=(()=> {
    if(is_session) {
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
      </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
