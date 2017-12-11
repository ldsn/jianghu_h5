import React from 'react'
import Style from './singleImagePicker.less'

class ImagePicker extends React.Component {
  state = {
    previewUrl: ''
  }

  onFileChange = () => {
    if (this.fileInput && this.fileInput.files.length) {
      this.parseFile(this.fileInput.files[0])
    }
  }

  parseFile (file) {
    /* eslint-disable */
    const reader = new FileReader()
    /* eslint-enable */
    reader.onload = e => {
      const result = e.target.result

      if (result) {
        this.setState({
          previewUrl: result
        })
        this.props.onChange({
          file,
          url: result
        })
      } else {
        this.onFail('Fail to get image')
      }
    }
    reader.readAsDataURL(file)
  }

  render () {
    const props = this.props
    const { previewUrl } = this.state
    const previewProps = {
      className: Style.preview,
      style: { backgroundImage: `url(${previewUrl})` }
    }

    return (
      <div
        className={Style.wrapper}
        role="button"
        aria-label="Choose and add image"
      >
        <input
          type="file"
          accept="image/jpg,image/jpeg,image/png,image/gif"
          ref={fileInput => this.fileInput = fileInput}
          onChange={this.onFileChange}
        />
        {/* preview */}
        <div
          {...previewProps}
        />
        {/* placeholder */}
        <div className={Style.placeholder}>
          {props.placeholder}
        </div>
      </div>
    )
  }
}

export default ImagePicker
