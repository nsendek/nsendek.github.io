import React, { Component } from 'react';

import './ExplorePage.css';
import Resume from './Resume.pdf';

class ContactContent extends Component {

  render() {
    return (

        <embed src={Resume} width="100%" height="100%"/>
  
    );
  }
}


export default ContactContent;
