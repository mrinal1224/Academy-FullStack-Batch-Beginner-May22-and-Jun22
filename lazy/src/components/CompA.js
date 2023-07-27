import React from 'react'

import HOC from './HOC'

function CompA(props) {
  return (
    <div style={props.style}>Hello</div>
  )
}

export default HOC(CompA)