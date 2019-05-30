import React, { Component } from 'react';

import './ExplorePage.css';
import Resume from './Resume.pdf';

class ContactContent extends Component {

  render() {
    return (
      <div className = "content" align = "center" height="100%">
        <embed src={Resume} width="100%" height="100%"/>
      </div>
    );
  }
}


export default ContactContent;
