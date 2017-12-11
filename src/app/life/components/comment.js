import React from 'react'
import { Flex, Icon, Popover, Button } from 'antd-mobile'
// import Style from './comment.less'

export default class CommentComponent extends React.Component {

  state = {
    visible: false
  }

  /**
   * 当点击其他的位置，popover 关闭
   */
  handleVisibleChange = () => {
    /* eslint-disable */
    const cb = () => {
      document.removeEventListener('touchmove', cb)
      this.close()
    }
    document.addEventListener('touchmove', cb)
    /* eslint-enable */
  }

  close = () => {
    this.setState({
      visible: false
    })
  }

  popoverItemComponents () {
    return (
      <Flex>
        <Button
          inline
          size="small"
          icon={<Icon type="ellipsis" />}
        >
          赞
        </Button>
        <Button
          inline
          size="small"
          icon={<Icon type="ellipsis" />}
          onClick={this.props.onComment}
        >评论</Button>
      </Flex>
    )
  }

  render () {
    return (
      <Popover
        onVisibleChange={this.handleVisibleChange}
        overlayClassName="fortest"
        placement="left"
        visible={this.state.visible}
        overlay={this.popoverItemComponents()}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-10, 0]
        }}
      >
        <Icon type="ellipsis" />
      </Popover>
    )
  }
}
