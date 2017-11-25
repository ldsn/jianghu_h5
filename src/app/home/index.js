import React from 'react'
import { connect } from 'dva'
import SearchBar from '../global/serarchBar'
import Carousel from './carousel'
import Articles from './articles'
import Tools from './tools'

const HomeComponent = () => {
  return (
    <div>
      <SearchBar />
      <Carousel />
      <Tools />
      <Articles />
    </div>
  )
}

function mapStateToProps ({ home }) {
  return {
    ...home
  }
}

export default connect(mapStateToProps)(HomeComponent)
