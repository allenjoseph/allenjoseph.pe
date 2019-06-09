import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './Home/App';
import Success from './Success/Success';

const Main = () => (
  <main>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/success" component={Success} />
      <Route component={App} />
    </Switch>
  </main>
);

export default Main;
