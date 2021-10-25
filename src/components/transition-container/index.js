import React, { Component } from 'react'
import styles from "./index.scss"

class TransitionContainer extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default TransitionContainer;
