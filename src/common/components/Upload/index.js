/* global window, FileReader */
import React from 'react'

export default class Upload extends React.Component {
  static defaultProps = {
    loadStart: () => {},
    loadSuccess: () => {},
    loadError: () => {},
    loading: () => {},
    trigger: false
  }
  componentWillUpdate (nextProps) {
    if (nextProps.trigger) {
      this.inputFile.click()
    }
  }
  onFileChange () {
    if (this.inputFile && this.inputFile.files.length) {
      this.dealImage(this.inputFile.files[0])
    } else {
      console.log('您的浏览器不支持此功能1')
    }
  }
  dealImage (file) {
    if (window.FileReader) {
      const fr = new FileReader()

      fr.readAsDataURL(file)

      fr.onloadstart = e => {
        this.props.loadStart(e)
      }

      fr.onload = e => {
        this.props.loadSuccess(e)
      }

      fr.onerror = e => {
        this.props.loadError(e)
      }

      fr.onprogress = e => {
        this.props.loading(e)
      }
    } else {
      console.log('您的浏览器不支持此功能')
    }
  }
  render () {
    return (
      <div style={{ display: 'none' }}>
        <input
          type="file"
          accept="image/*"
          ref={inputFile => {
            this.inputFile = inputFile
          }}
          onChange={this.onFileChange.bind(this)}
        />
      </div>
    )
  }
}
