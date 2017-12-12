import React from 'react'
import { connect } from 'dva'
import { Icon } from 'antd-mobile'
import Input from 'app/global/input'
import Style from './index.less'
import ThingsHeader from './thingsHeader'
import ThingItem from './thingsItem'



function mapDispatchToProps (dispatch) {
  return {
    toggleTabbarVisible (visible) {
      dispatch({ type: 'env/toggleTabbarVisible', payload: visible })
    }
  }
}

@connect(null, mapDispatchToProps)
class ThingComponent extends React.Component {
  state = {
    commentInputVisible: false
  }

  /**
   * 当点击评论按钮时
   * @param  {[type]} itemId 被点击的动态 Id
   */
  handleDoingComment = () => {
    this.props.toggleTabbarVisible(false)
    this.setState({
      commentInputVisible: true
    }, () => {
      this.refs.input.focus()
    })
  }
  /**
   * 当评论按钮失焦时
   * @return {[type]} [description]
   */
  cancleCommentBlur = () => {
    this.props.toggleTabbarVisible(true)
    this.setState({
      commentInputVisible: false
    })
  }
  render () {
    return (
      <div className={Style.thingsWrapper} >
        {
          window.timelines.map(data =>
            <ThingItem
              onComment={this.handleDoingComment}
              key={data.id}
              data={data}
            />
          )
        }
        {
          this.state.commentInputVisible && <div className={Style.commentWrapper}>
            <Input
              ref="input"
              defaultValue="123"
              onBlur={this.cancleCommentBlur}
              suffix={<Icon type="check-circle-o" />}
            />
          </div>
        }
        <div className={Style.bottomTips}>没有更多了～</div>
      </div>
    )
  }
}

export default ThingComponent
