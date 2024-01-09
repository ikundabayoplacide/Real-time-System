import React, { Component } from 'react'
import Child from './Child'
import parent from './parent'
 class parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'bwiza'
      }
    }
    
  render() {
    return (
      <div>
        <child/>
      </div>
    )
  }
}

export default parent
