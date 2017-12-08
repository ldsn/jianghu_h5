import React from 'react'
import { connect } from 'dva'
import { ImagePicker } from 'antd-mobile'
import { getUid } from 'utils'
import Style from './create.less'

class Editor extends React.Component {
  state = {
    dangerousHtml: '',
    lastSelection: {},
    placeholderVisible: true
  }
  onEditing = () => {
    const dangerousHtml = this.editor.innerHTML
    const placeholderVisible = !this.editor.textContent
    /* eslint-disable */
    const lastSelection = window.getSelection()
    /* eslint-enable */
    this.setState({
      dangerousHtml,
      lastSelection,
      placeholderVisible
    })
  }
  /**
   * 添加实体，如图片
   * @param  {string} entity {html, id}
   */
  pushEntity (entity) {
    /* eslint-disable */
    const wrapper = document.createElement('div')
    const noneDiv = document.createElement('div')
    /* eslint-enable */

    wrapper.setAttribute('id', `entity-${entity.id}`)
    wrapper.setAttribute('data-type', 'entity')
    wrapper.innerHTML = entity.html

    const selection = this.state.lastSelection

    // 根据当前光标所在位置
    // 找出应该插入的位置
    let positionNode = selection.anchorNode

    while (positionNode && positionNode.parentNode !== this.editor) {
      positionNode = positionNode.parentNode
    }

    if (positionNode && positionNode.nextElementSibling) {
      this.editor.insertBefore(noneDiv, positionNode.nextElementSibling)
      this.editor.insertBefore(wrapper, positionNode.nextElementSibling)
    } else {
      this.editor.appendChild(wrapper)
      this.editor.appendChild(noneDiv)
    }

    this.onEditing()
    this.setState({
      placeholderVisible: false
    })

    this.fixSelection(selection, noneDiv)
  }

  fixSelection (selection, target) {
    /* eslint-disable */
    const range = document.createRange()
    /* eslint-enable */

    // 光标对象的范围界定为新建的表情节点
    range.selectNodeContents(target)
    // 光标位置定位在表情节点的最大长度
    range.setStart(target, 0)
    // 使光标开始和光标结束重叠
    range.collapse(true)
    // 清除选定对象的所有光标对象
    selection.removeAllRanges()
    // 插入新的光标对象
    selection.addRange(range)
  }

  delEntity (entityId) {
    const target = this.editor.querySelector(`#entity-${entityId}`)
    if (target) {
      this.editor.removeChild(target)
    }
  }

  render () {
    const { placeholderVisible } = this.state

    const editorState = {
      contentEditable: true,
      onKeyUp: this.onEditing
    }

    return (
      <div className={Style.editorWrapper}>
        <div
          ref={editor => this.editor = editor}
          className={Style.editor}
          {...editorState}
        />
        {
          placeholderVisible && (
            <div className={Style.placeholder}>
              {this.props.placeholder || '这一刻的想法...'}
            </div>
          )
        }
      </div>
    )
  }
}

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

  render () {
    return (
      <div>
        <div className={Style.wrapper}>
          {/* editor */}
          <Editor ref={editor => this.editor = editor} />
          {/* img upload */}
          <ImagePicker
            files={this.state.files}
            onChange={this.onImageChange}
            multiple
          />
        </div>
      </div>
    )
  }
}

export default connect()(CreateComponent)
