import React, { Component } from 'react';

import './ExplorePage.css';
import Resume from './Resume.pdf';

class ContactContent extends Component {

  render() {
    return (
      <div className = "content" align = "center">
        <embed src={Resume} width="100%" height="900px" />
      </div>
    );
  }
}


export default ContactContent;
