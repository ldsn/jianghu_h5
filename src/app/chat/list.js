import React from 'react'
import { connect } from 'dva'
import { Icon } from 'antd-mobile'
import List from './components/list'
// import style from './list.less'
import NavBar from '../global/navBar'

const ChatComponent = ({ list }) => {
  const navBarProps = {
    value1: '聊天',
    value2: '通知(12)',
    value1Func: () => {
      /* eslint-disable */
      console.log('1') 
      /* eslint-enable */
    },
    value2Func: () => {
      /* eslint-disable */
      console.log('2') 
      /* eslint-enable */
    },
    leftContent: <Icon type="check" />,
    rightContent: <Icon type="check" />
  }
  return (
    <div>
      <NavBar {...navBarProps} />
      <List chatList={list} />
    </div>
  )
}

function mapStateToProps ({ chatList }) {
  return {
    ...chatList
  }
}
export default connect(mapStateToProps)(ChatComponent)
