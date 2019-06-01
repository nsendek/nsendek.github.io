import React, { Component } from 'react';
import './styles/ExplorePage.css';
import git from './resources/github.png';
import link from './resources/linkedin.png'
import facebook from './resources/facebook.png';
import insta from './resources/instagram.png';

class ContactContent extends Component {

  render() {
    return (
      <div className = "icon-bar">

          <a  href="https://github.com/nsendek" target="_blank">
            <img src={git} width="100%" height="100%" />
          </a>

          <a className = "icon" href="https://www.linkedin.com/in/nikosendek/" target="_blank">
            <img src={link} width="100%" height="100%"/>
          </a>

          <a className = "icon" href="https://www.facebook.com/niko.sendek" target="_blank">
            <img src={facebook} width="100%" height="100%"/>
          </a>

          <a className = "icon" href="https://www.instagram.com/nikodmas/" target="_blank">
            <img src={insta} width="100%" height="100%"/>
          </a>

      </div>

    );
  }
}


export default ContactContent;
