import React from 'react'
import { connect } from 'dva'
import { List, Modal, Toast, DatePicker, Picker, ActivityIndicator } from 'antd-mobile'
import { createForm } from 'rc-form'
import department from './department.json'
import { formatDate } from '../../utils/index'
import Upload from '../../common/components/Upload'

import Style from './user.less'

const Item = List.Item
const prompt = Modal.prompt

class EditUser extends React.Component {
  constructor () {
    super()

    this.state = {
      trigger: false,
      loading: false
    }
  }
  render () {
    const user = this.props.user
    const { getFieldProps } = this.props.form

    return (
      <div>
        <ActivityIndicator
          toast
          text="请稍后"
          animating={this.state.loading}
        />
        <List className="my-list" renderHeader={() => '个人信息'}>
          <Item
            extra={
              <div className={Style.avator}><img src={user.avator} alt="头像" /></div>
            }
            arrow="horizontal"
            onClick={() => {
              this.setState({
                trigger: true
              })
            }}
          ><Upload
            trigger={this.state.trigger}
            loadStart={() => {
              this.setState({
                loading: true
              })
            }}
            loadSuccess={e => {
              this.props.dispatch({
                type: 'user/changeUserInfo',
                info: {
                  key: 'avator',
                  value: e.target.result
                }
              })
              this.setState({
                loading: false
              })
            }}
          />头像</Item>
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
                        this.props.dispatch({
                          type: 'user/changeUserInfo',
                          info: {
                            key: 'user_name',
                            value
                          }
                        })
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

                      this.props.dispatch({
                        type: 'user/changeUserInfo',
                        info: {
                          key: 'user_des',
                          value
                        }
                      })
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

                  this.props.dispatch({
                    type: 'user/changeUserInfo',
                    info: {
                      key: 'sex', value: 1
                    }
                  })
                }
              },
              {
                text: '男',
                onPress: () => {
                  if (!user.sex) {
                    return false
                  }
                  this.props.dispatch({
                    type: 'user/changeUserInfo',
                    info: {
                      key: 'sex', value: 0
                    }
                  })
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

              this.props.dispatch({
                type: 'user/changeUserInfo',
                info: {
                  key: 'department',
                  value: v
                }
              })
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
              this.props.dispatch({
                type: 'user/changeUserInfo',
                info: {
                  key: 'birth',
                  value: new Date(date).getTime()
                }
              })
            }}
          >
            <Item arrow="horizontal">生日</Item>
          </DatePicker>
        </List>
      </div>
    )
  }
}
const EditUserForm = createForm()(EditUser)

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(EditUserForm)
