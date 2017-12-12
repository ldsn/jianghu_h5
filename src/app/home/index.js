import React from 'react'
import { connect } from 'dva'
import SearchBar from '../global/serarchBar'
import Carousel from './carousel'
import Articles from './articles'
import Tools from './tools'

const HomeComponent = ({ dispatch }) => {
  return (
    <div>
      <Articles dispatch={dispatch}/>
    </div>
  )
}

function mapStateToProps ({ home }) {
  return {
    ...home
  }
}

export default connect(mapStateToProps)(HomeComponent)
