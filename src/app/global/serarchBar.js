import React from 'react'
import { SearchBar } from 'antd-mobile'

export default class SearchBarComponent extends React.Component {
  state = {
    value: ''
  }
  onChange = value => {
    this.setState({ value })
  }
  clear = () => {
    this.setState({ value: '' })
  }
  render () {
    return (
      <div style={{ width: '100%' }}>
        <SearchBar
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    )
  }
}
