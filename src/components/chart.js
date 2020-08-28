import React from 'react'

import './chart.css'

export default class Chart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='chart'>{ this.props.data || 'React Charts' }</div>
    )
  }
}
