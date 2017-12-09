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
    value1Func: () => { console.log('1') },
    value2Func: () => { console.log('2') },
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
