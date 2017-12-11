import React from 'react'
import { connect } from 'dva'
import Things from './things/index.js'

const LifeComponent = () => {
  return (
    <div style={{ height: '100%', overflowY: 'auto' }}>
      <Things />
    </div>
  )
}

export default connect()(LifeComponent)
