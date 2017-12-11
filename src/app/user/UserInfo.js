import React from 'react'
import { connect } from 'dva'
import { List, Switch } from 'antd-mobile'
import { createForm } from 'rc-form'
import Style from './user.less'

const Item = List.Item
const Brief = Item.Brief

let UserInfo = props => {
  const { getFieldProps } = props.form

  return (
    <div>
      <List className="my-list">
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => { props.history.push('/edit') }}
        >
        我是名字<Brief>我是描述</Brief>
        </Item>
        <Item>
          <div className={Style.itemBox}>
            <div className={Style.item}>
              <span>300</span>
              <span>关注</span>
            </div>
            <div className={Style.item}>
              <span>300</span>
              <span>粉丝</span>
            </div>
            <div className={Style.item}>
              <span>300</span>
              <span>动态</span>
            </div>
          </div>
        </Item>
        <Item
          extra={
            <Switch
              {...getFieldProps('Switch1', {
                initialValue: true,
                valuePropName: 'checked'
              })}
              onClick={checked => { console.log(checked) }}
            />
          }
        >接收陌生人的消息</Item>
        <Item
          extra={
            <Switch
              {...getFieldProps('Switch2', {
                initialValue: true,
                valuePropName: 'checked'
              })}
              onClick={checked => { console.log(checked) }}
            />
          }
        >允许别人搜索到我</Item>
        <Item onClick={() => {}}>意见反馈</Item>
        <Item onClick={() => {}}>关于江湖</Item>
        <Item onClick={() => {}}>退出登录</Item>
      </List>
    </div>
  )
}
UserInfo = createForm()(UserInfo)
export default connect()(UserInfo)
