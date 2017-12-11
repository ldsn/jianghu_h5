import React from 'react'
import { connect } from 'dva'
import { ImagePicker, InputItem } from 'antd-mobile'
import { getUid } from 'utils'
import Editor from 'components/editor'
import BannerPicker from 'components/singleImagePicker'
import Style from './create.less'

class CreateComponent extends React.Component {
  state = {
    files: []
  }

  onImageChange = (files, type, index) => {
    switch (type) {
      case 'add': {
        const uid = getUid()
        const addFile = files[files.length - 1]
        addFile.uid = uid
        this.editor.pushEntity({
          html: `<img src="${addFile.url}" />`,
          id: uid
        })
        break
      }
      case 'remove': {
        const removeFile = this.state.files[index]
        this.editor.delEntity(removeFile.uid)
        break
      }
      default:
    }

    this.setState({
      files
    })
  }

  onBannerChange = ({file, url}) => {
  }

  render () {
    return (
      <div className={Style.wrapper}>

        <BannerPicker
          placeholder="+添加封面"
          onChange={this.onBannerChange}
        />

        <div>
          <InputItem
            className={Style.title}
            placeholder="文章标题"
          />
        </div>

        {/* editor */}
        <Editor ref={editor => this.editor = editor} />
        {/* img upload */}
        <ImagePicker
          files={this.state.files}
          onChange={this.onImageChange}
          multiple
        />
      </div>
    )
  }
}

export default connect()(CreateComponent)
