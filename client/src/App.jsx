import React from 'react';
import { connect } from 'react-redux';
import GrommetApp from 'grommet/components/App';

import LoginComponent from './components/LoginComponent';
import Nav from './containers/Nav';
import Events from './containers/Events';
import Profile from './containers/Profile';
import UserList from './containers/Users';

const App = () => (
  <GrommetApp>
    <LoginComponent />
    <Nav />
    <UserList />
    <Events />
    <Profile />
  </GrommetApp>
);

export default connect()(App);
