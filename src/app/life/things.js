import React from 'react'
import { Flex } from 'antd-mobile'
import Style from './things.less'

const Thing = () => {
  return (
    <Flex align="start">
      <Flex.Item>
        <div className={Style.headImg}></div>
      </Flex.Item>
      <Flex.Item>2</Flex.Item>
    </Flex>
  )
}

export default Thing
