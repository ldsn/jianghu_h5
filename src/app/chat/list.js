import React from 'react'
import { connect } from 'dva'
import List from './components/list'

const ChatComponent = ({ chatList }) => {
  return (
    <div>
        <List {...chatList} />
    </div>
  )
}

function mapStateToProps ({ chatList }) {
  return {
    ...chatList
  }
}
export default connect(mapStateToProps)(ChatComponent)
