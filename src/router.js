import React from 'react'
import { Router, Route } from 'dva/router'
import Layout from 'app/layout'

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Layout} />
    </Router>
  )
}

export default RouterConfig
