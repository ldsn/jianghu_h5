import React from 'react'
import PropTypes from 'prop-types'
import Style from './input.less'

export default class Input extends React.Component {
  static propTypes = {
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    prefix: PropTypes.node,
    suffix: PropTypes.node
  }

  focus () {
    this.refs.input.focus()
  }
  blur () {
    this.refs.input.blur()
  }
  render () {
    const props = { ...this.props }

    if ('value' in props) {
      props.value = props.value || ''
      delete props.defaultValue
    }

    const prefixNode = props.prefix
    const suffixNode = props.suffix

    delete props.prefix
    delete props.suffix

    return (
      <div className={Style.wrapper}>
        { prefixNode }
        <input
          ref="input"
          className={Style.input}
          {...props}
        />
        { suffixNode }
      </div>
    )
  }
}
