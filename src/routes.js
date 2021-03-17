import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './components/pages/App';
import Characters from './components/pages/Characters';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/Characters" component={Characters} />
  </Switch>
);

export default Routes;
