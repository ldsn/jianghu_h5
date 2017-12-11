import React from 'react'
import { connect } from 'dva'
import { List } from 'antd-mobile'
import { createForm } from 'rc-form'
import Style from './user.less'

const Item = List.Item

let EditUser = () => {
  return (
    <div>
      <List className="my-list" renderHeader={() => '个人信息'}>
        <Item
          extra={
            <div className={Style.avator}><img src="" alt="头像" /></div>
          }
          arrow="horizontal"
          onClick={() => {}}
        >头像</Item>
        <Item extra={'我是昵称'} arrow="horizontal" onClick={() => {}}>昵称</Item>
        <Item extra={'我是个人说明'}>个人说明</Item>
        <Item extra={'未知'} arrow="down" onClick={() => {}}>性别</Item>
        <Item extra={'啥学院'} arrow="horizontal" onClick={() => {}}>院系</Item>
        <Item extra={'1991年1月17日'} arrow="horizontal" onClick={() => {}}>生日</Item>
      </List>
    </div>
  )
}
EditUser = createForm()(EditUser)
export default connect()(EditUser)
