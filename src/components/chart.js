import React, { Component } from 'react'

import './chart.css'

export default class Chart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='chart'>{ this.props.data || 'React-Charts-Test' }</div>
    )
  }
}
