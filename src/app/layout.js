import React from 'react'
import { connect } from 'dva'
import { Route, Switch } from 'dva/router'
import TabBar from './global/tabbar'
import Home from './home'
import User from './user'
import Chat from './chat/list'
import Life from './life'
import ArticleDetail from './article/detail'

const Layout = props => {
  return (
    <div>
      <TabBar {...props}>
        <Switch>
          <Route exect path="/home" component={Home} />
          <Route exect path="/life" component={Life} />
          <Route exect path="/chat" component={Chat} />
          <Route exect path="/user" component={User} />
          <Route exect path="/article/:id" component={ArticleDetail} />
          <Route exect path="/" component={Home} />
        </Switch>
      </TabBar>
    </div>
  )
}

export default connect()(Layout)
