import React from 'react'
import { connect } from 'dva'
import { TabBar, Icon, Popover } from 'antd-mobile'
import { routerRedux, Link } from 'dva/router'

class CreateBtn extends React.Component {
  state = {
    visible: false
  }

  handleVisibleChange = visible => {
    this.setState({
      visible
    })
  }

  render () {
    return (
      <Popover
        mask
        overlayClassName="fortest"
        overlayStyle={{ color: 'currentColor' }}
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        onSelect={this.handleVisibleChange.bind(this, false)}
        overlay={[(
          <Popover.Item
            key="5"
            value="article/create"
            icon={<Icon type="check-circle" />}
            style={{ whiteSpace: 'nowrap' }}
          ><Link to="/article/create">创建文章</Link></Popover.Item>
        ), (
          <Popover.Item
            key="6"
            value="home"
            icon={<Icon type="check-circle" />}
          >
            <Link to="/home">发朋友圈</Link>
          </Popover.Item>
        )]}
        placement="top"
      >
        <span style={{ fontSize: 20 }}> + </span>
      </Popover>
    )
  }
}

const tabbarConf = {
  tabbar: {
    barTintColor: 'white',
    tintColor: 'purple'
  },
  items: [{
    title: '首页',
    key: 'home',
    icon: <Icon type="check" />,
    selectedIcon: <Icon type="check-circle" />
  },
  {
    title: '江湖',
    key: 'life',
    icon: <Icon type="check" />,
    selectedIcon: <Icon type="check-circle" />
  },
  {
    key: 'article/create',
    onPress: () => {},
    selectedIcon: <CreateBtn />,
    icon: <CreateBtn />
  },
  {
    title: '聊天',
    key: 'chat',
    icon: <Icon type="check" />,
    selectedIcon: <Icon type="check-circle" />
  },
  {
    title: '我的',
    key: 'user',
    icon: <Icon type="check" />,
    selectedIcon: <Icon type="check-circle" />
  }]
}

function mapStateToProps ({ env }) {
  return {
    tabbar: env.tabbar
  }
}

@connect(mapStateToProps)
class TabbarComponent extends React.Component {
  constructor (props) {
    super(props)

    const tabName = props.location.pathname.slice(1) || 'home'
    this.state = {
      selectedTab: tabName,
      content: {
        [tabName]: props.children
      }
    }
  }

  componentWillUpdate (nextProps, nextState) {
    /* eslint-disable */
    const { selectedTab } = nextState
    nextState.content[selectedTab] = nextProps.children
    /* eslint-enable */
  }

  handlePress = key => {
    const { dispatch } = this.props
    this.setState({
      selectedTab: key
    })
    dispatch(routerRedux.replace(`/${key}`))
  }

  render () {
    const { selectedTab, content } = this.state
    return (
      <div
        className="navbar"
        style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}
      >
        <TabBar
          {...tabbarConf.tabbar}
          hidden={!this.props.tabbar.visible}
        >
          {tabbarConf.items.map(conf => {
            return (
              <TabBar.Item
                {...conf}
                selected={selectedTab === conf.key}
                onPress={() => {
                  return conf.onPress ? conf.onPress(conf) : this.handlePress(conf.key)
                }}
              >
                { content[conf.key] }
              </TabBar.Item>
            )
          })}
        </TabBar>
      </div>
    )
  }
}

export default TabbarComponent
