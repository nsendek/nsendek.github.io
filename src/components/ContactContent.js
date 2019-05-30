import React, { Component } from 'react';
import './ExplorePage.css';
import git from './logos/github.png';
import link from './logos/linkedin.png'
import facebook from './logos/facebook.png';
import insta from './logos/instagram.png';

class ContactContent extends Component {

  render() {
    return (
      <div className = "content" align = "center">
        <p className="Homepage-Sub ">
          EMAIL: nsendek@mit.edu
        </p>
        <p className="Homepage-Sub ">
          PHONE: 720-775-8035
        </p>

        <div className = "icon" width="300px" height="300px" >
          <a href="https://github.com/nsendek" target="_blank">
            <img src={git} width="100%" height="100%"/>
          </a>
          </div>

          <div className = "icon" width="300px" height="300px" >
              <a href="https://www.linkedin.com/in/nikosendek/" target="_blank">
                <img src={link} width="100%" height="100%"/>
              </a>
          </div>
          <div className = "icon" width="300px" height="300px" >
                <a href="https://www.facebook.com/niko.sendek" target="_blank">
                  <img src={facebook} width="100%" height="100%"/>
                </a>
          </div>

          <div className = "icon" width="300px" height="300px" >
            <a href="https://www.instagram.com/nikodmas/" target="_blank">
              <img src={insta} width="100%" height="100%"/>
            </a>
          </div>

      </div>
    );
  }
}


export default ContactContent;
