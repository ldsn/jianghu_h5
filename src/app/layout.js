import TabBar from './global/tabbar';
import { connect } from 'dva';
import { Router, Route, Switch, IndexRoute, Redirect } from 'dva/router';
import Home from './home';
import User from './user';

const Layout = (props) => {
  return (
    <div>
      <TabBar {...props}>
        <Switch>
          <Route exect path="/home" component={Home} />
          <Route exect path="/friend" component={User} />
          <Route exect path="/articles" component={Home} />
          <Route exect path="/user" component={User} />
          <Route exect path="/" component={Home} />
        </Switch>
      </TabBar>
    </div>
  );
}

export default connect()(Layout);
