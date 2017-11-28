import React from 'react'
import { connect } from 'dva'
import { TabBar, Icon } from 'antd-mobile'
import { routerRedux } from 'dva/router'

const tabbarConf = {
  tabbar: {
    unselectedTintColor: '#949494',
    tintColor: '#33A3F4',
    barTintColor: 'white'
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
      selectedTab: tabName
    }
  }

  handlePress = key => {
    const { dispatch } = this.props
    this.setState({
      selectedTab: key
    })
    dispatch(routerRedux.replace(`/${key}`))
  }

  render () {
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
                selected={this.state.selectedTab === conf.key}
                onPress={() => this.handlePress(conf.key)}
              >{this.props.children}</TabBar.Item>
            )
          })}
        </TabBar>
      </div>
    )
  }
}

export default TabbarComponent
