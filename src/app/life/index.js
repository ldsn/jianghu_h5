import React from 'react'
import { connect } from 'dva'
import Things from './things'

const LifeComponent = () => {
  return (
    <div>
      <Things />
    </div>
  )
}

export default connect()(LifeComponent)
