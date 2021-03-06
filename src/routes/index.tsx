import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ SignIn }/>
    <Route path="/signup" exact component={ SignUp } isPrivate/>
    {/* <Route path="/repository" exact component={ Repository } isPrivate/> */}
    <Route path="/dashboard" exact component={ Dashboard } isPrivate />
  </Switch>
);

export default Routes;