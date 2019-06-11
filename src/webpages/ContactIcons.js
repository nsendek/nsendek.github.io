import React, { Component } from 'react';
import './styles/SideBar.css';
import './styles/IconBar.css';
import git from './resources/logos/github.png';
import link from './resources/logos/linkedin.png'
import facebook from './resources/logos/facebook.png';
import insta from './resources/logos/instagram.png';
import at from './resources/logos/@.png';

class ContactContent extends Component {

  render() {
    return (
      <div className = "icon-bar">

          <a  rel="noopener noreferrer" href="https://github.com/nsendek" target="_blank">
            <img src={git} alt="github profile" width="100%" height="100%" />
          </a>

          <a  rel="noopener noreferrer" href="https://www.linkedin.com/in/nikosendek/" target="_blank">
            <img src={link} alt="linkedin profile" width="100%" height="100%"/>
          </a>

          <a rel="noopener noreferrer" href="https://www.facebook.com/niko.sendek" target="_blank">
            <img src={facebook} alt="facebook profile"  width="100%" height="100%"/>
          </a>

          <a  rel="noopener noreferrer" href="https://www.instagram.com/nikodmas/" target="_blank">
            <img src={insta} alt= "instagram profile" width="100%" height="100%"/>
          </a>

          <a href="mailto:nsendek@mit.edu" >
            <img src={at} alt= "my email" width="100%" height="100%"/>
          </a>

      </div>

    );
  }
}


export default ContactContent;
