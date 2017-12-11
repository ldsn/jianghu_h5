import React from 'react'
import { connect } from 'dva'
import { List, Modal, Toast, DatePicker, Picker } from 'antd-mobile'
import { createForm } from 'rc-form'
import department from './department.json'
import { formatDate } from '../../utils/index'

import Style from './user.less'

const Item = List.Item
const prompt = Modal.prompt

let EditUser = props => {
  const user = props.user
  const { getFieldProps } = props.form

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
        <Item
          extra={user.user_name}
          arrow="horizontal"
          onClick={() => {
            prompt('亲爱的小伙伴(๑•ᴗ•๑)', '请输入您新的昵称',
              [
                { text: '取消' },
                {
                  text: '提交',
                  onPress: value => {
                    if (value === user.user_name) {
                      return false
                    }

                    if (!value.trim()) {
                      Toast.info('昵称不能为空', 1)
                      return false
                    } else {
                      props.dispatch({ type: 'user/modifyUserName', userName: value })
                    }
                  }
                }
              ],
            'default', user.user_name, '请输入您新的昵称')
          }}
        >昵称</Item>
        <Item
          extra={user.user_des}
          onClick={() => {
            prompt('亲爱的小伙伴(๑•ᴗ•๑)', '请输入您的个人说明',
              [
                { text: '取消' },
                {
                  text: '提交',
                  onPress: value => {
                    if (value === user.user_des) {
                      return false
                    }

                    props.dispatch({ type: 'user/modifyPersonalExplain', userDes: value })
                  }
                }
              ],
            'default', user.user_des, '请输入您的个人说明')
          }}
        >个人说明</Item>
        <Item
          extra={user.sex ? '女' : '男'}
          arrow="down"
          onClick={() => Modal.operation([
            {
              text: '女',
              onPress: () => {
                if (user.sex) {
                  return false
                }

                props.dispatch({ type: 'user/changeSex', sex: 1 })
              }
            },
            {
              text: '男',
              onPress: () => {
                if (!user.sex) {
                  return false
                }
                props.dispatch({ type: 'user/changeSex', sex: 0 })
              }
            }
          ])}
        >性别</Item>
        <Picker
          data={department}
          {
            ...getFieldProps('department', {
              initialValue: [user.department]
            })
          }
          onOk={v => {
            if (user.department === v) {
              return false
            }

            props.dispatch({ type: 'user/changeDepartment', department: v })
          }}
          cols={1}
          className="forss"
        >
          <List.Item arrow="horizontal">院系</List.Item>
        </Picker>
        <DatePicker
          mode="date"
          title="选择生日"
          extra={formatDate(user.birth)}
          value={new Date(user.birth)}
          minDate={new Date(0)}
          onChange={date => {
            props.dispatch({ type: 'user/changeBirth', birth: new Date(date).getTime() })
          }}
        >
          <Item arrow="horizontal">生日</Item>
        </DatePicker>
      </List>
    </div>
  )
}
EditUser = createForm()(EditUser)

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(EditUser)
