import React from 'react'
import { connect } from 'dva'
import { SegmentedControl, Icon } from 'antd-mobile'
import List from './components/list'
import style from './list.less'

const ChatComponent = ({ list }) => {
  return (
    <div>
      <div className={style.navbar}>
        <div className={style.left}>
          <Icon type="check" />
        </div>
        <div className={style.middle}>
          <SegmentedControl values={['聊天', '通知']} style={{ width: '100%' }} />
        </div>
        <div className={style.right}>
          <Icon type="check" />
        </div>
      </div>
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
