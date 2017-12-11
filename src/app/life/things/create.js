import React from 'react'
import { ImagePicker, TextareaItem } from 'antd-mobile'
import Style from './create.less'
import { createForm } from 'rc-form';

class createComponent extends React.Component {
  render () {
    const { getFieldProps } = this.props.form

    return (
      <div className={Style.wrapper}>
        <TextareaItem
          rows={5}
          {...getFieldProps('count', {
            initialValue: '计数功能,我的意见是...',
          })}
          count={100}
          placeholder="此时的想法..."
        />
        {/* img upload */}
          <ImagePicker
            files={[]}
            multiple
          />
      </div>
    )
  }
}

export default createForm()(createComponent)
