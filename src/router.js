import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
import Layout from 'app/layout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Layout}></Route>
    </Router>
  );
}

export default RouterConfig;
