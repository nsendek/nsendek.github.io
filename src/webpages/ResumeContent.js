import React, { Component } from 'react';

import './styles/ExplorePage.css';
import Resume from './resources/Resume.pdf';

class ContactContent extends Component {

  render() {
    return (
        <embed src={Resume} width="100%" height="100%"/>
    );
  }
}


export default ContactContent;
