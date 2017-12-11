import React from 'react'
import { connect } from 'dva'
import { List, Switch } from 'antd-mobile'
import { createForm } from 'rc-form'
import Style from './user.less'

const Item = List.Item
const Brief = Item.Brief

let UserInfo = props => {
  const { getFieldProps } = props.form
  const { user } = props
  return (
    <div>
      <List className="my-list">
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => { props.history.push('/edit') }}
        >
          {user.user_name}<Brief>{user.user_des}</Brief>
        </Item>
        <Item>
          <div className={Style.itemBox}>
            <div className={Style.item}>
              <span>{user.follow}</span>
              <span>关注</span>
            </div>
            <div className={Style.item}>
              <span>{user.fans}</span>
              <span>粉丝</span>
            </div>
            <div className={Style.item}>
              <span>{user.dynamic}</span>
              <span>动态</span>
            </div>
          </div>
        </Item>
        <Item
          extra={
            <Switch
              {...getFieldProps('Switch1', {
                initialValue: user.if_receive_message,
                valuePropName: 'checked'
              })}
              onClick={() => { props.dispatch({ type: 'user/changeInfoSwitch' }) }}
            />
          }
        >接收陌生人的消息</Item>
        <Item
          extra={
            <Switch
              {...getFieldProps('Switch2', {
                initialValue: user.if_search,
                valuePropName: 'checked'
              })}
              onClick={() => { props.dispatch({ type: 'user/ifSearch' }) }}
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(UserInfo)
