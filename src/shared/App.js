import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PostList from '../pages/PostList';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Header from '../components/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={PostList}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
