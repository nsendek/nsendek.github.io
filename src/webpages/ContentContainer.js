import React, { Component } from 'react';
import './styles/ExplorePage.css';

class ContentContainer extends Component {

  render() {
    var className = "content ";
//TODO: move parallax stuff from portfolio content
// into content conatiner so all pages have it.


    return (
      <div className = {className} height="100%">
        {this.props.content}
      </div>

    );
  }
}


export default ContentContainer;
