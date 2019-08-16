import React, { Component } from 'react';
import './styles/ExplorePage.css';

class ContentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    }
  }

 changeState(event) {
 if (event.target.scrollTop <= 0) {
   if(this.state.scrolled) {
     this.setState({scrolled: false});
   }
 } else if (event.target.scrollTop > 0) {
   if (!this.state.scrolled) {
     this.setState({scrolled: true});
     }
 }
}

  render() {
//TODO: move parallax stuff from portfolio content
// into content conatiner so all pages have it.
    return (
      <div className = "content" height="100%">
        {this.props.content}
      </div>

    );
  }
}


export default ContentContainer;
