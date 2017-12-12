import React from 'react'
import { connect } from 'dva'
import { Icon } from 'antd-mobile'
import Things from './things/index'
import Navbar from '../global/navBar'

const LifeComponent = () => {
  const navBarProps = {
    value1: '朋友圈',
    value2: '校友圈',
    value1Func: () => {},
    value2Func: () => {},
    leftContent: <Icon type="check" />,
    rightContent: <Icon type="check" />
  }

  return (
    <div style={{ height: '100%', overflowY: 'auto', paddingTop: '1.2rem' }}>
      <Navbar {...navBarProps} />
      <Things />
    </div>
  )
}

export default connect()(LifeComponent)
