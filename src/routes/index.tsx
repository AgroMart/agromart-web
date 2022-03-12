import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ SignIn }/>
    <Route path="/repository" component={ Repository }/>
    <Route path="/dashboard" component={ Dashboard }/>
  </Switch>
);

export default Routes;