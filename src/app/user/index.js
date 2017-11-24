import React from 'react'
import { connect } from 'dva'

const UserComponent = () => {
  return (
    <div>User</div>
  )
}

export default connect()(UserComponent)
