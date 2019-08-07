import React, { Component } from 'react';
import './styles/ExplorePage.css';

class ContentContainer extends Component {

  render() {
    var className = "content ";

// comment out this stuff to make content stay the same
    // if (!this.props.state.mobile) {
    //    //desktop menu icon styles
    //   if (this.props.state.showSideBar) {
    //     className += "slide-in-content ";
    //   } else if (this.props.state.unmounting) {
    //     className += "slide-out-content ";
    //   }
    // }

    return (
      <div className = {className} height="100%">
        {this.props.content}
      </div>

    );
  }
}


export default ContentContainer;
