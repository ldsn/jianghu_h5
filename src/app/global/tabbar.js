import {
  TabBar,
  Icon
} from 'antd-mobile';
import { routerRedux } from 'dva/router';
import pathToRegexp from 'path-to-regexp';

const tabbarConf = {
  tabbar: {
    unselectedTintColor: "#949494",
    tintColor: "#33A3F4",
    barTintColor: "white"
  },
  items: [{
    title: "Home",
    key: "home",
    icon: <Icon type="check" />,
    selectedIcon: <Icon type="check-circle" />
  },
  {
    title: "Friend",
    key: "friend",
    icon: <Icon type="check" />,
    selectedIcon: <Icon type="check-circle" />
  },
  {
    title: "Articles",
    key: "articles",
    icon: <Icon type="check" />,
    selectedIcon: <Icon type="check-circle" />
  },
  {
    title: "User",
    key: "user",
    icon: <Icon type="check" />,
    selectedIcon: <Icon type="check-circle" />
  }]
};

class TabbarComponent extends React.Component {
  constructor(props) {
    super(props);

    const tabName = props.location.pathname.slice(1);

    this.state = {
      selectedTab: tabName
    };
  }

  handlePress = (key) => {
    const { dispatch } = this.props;
    this.setState({
      selectedTab: key
    });
    dispatch(routerRedux.replace(`/${key}`));
  }

  render () {
    return (
      <div
        className="navbar"
        style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}
      >
        <TabBar
          {...tabbarConf.tabbar}
        >
          {tabbarConf.items.map(conf => <TabBar.Item
            {...conf}
            selected={this.state.selectedTab === conf.key}
            onPress={() => this.handlePress(conf.key)}
          >{this.props.children}</TabBar.Item>)}
        </TabBar>
      </div>
    );
  } 
}

export default TabbarComponent;
