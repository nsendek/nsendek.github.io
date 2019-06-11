import React, { Component } from 'react';

import './styles/ExplorePage.css';
import Resume from './resources/Resume.pdf';

class ContactContent extends Component {

  render() {
    return (
      <div className = "file-content" >
        <h1 className="content-header">
          Resume
        </h1>
        <embed src={Resume} width="100%" height="100%"/>
      </div>
    );
  }
}


export default ContactContent;
