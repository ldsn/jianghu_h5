import React from 'react'
import { connect } from 'dva'
import Things from './things'

const LifeComponent = () => {
  return (
    <Things />
  )
}

export default connect()(LifeComponent)
