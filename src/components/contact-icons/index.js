import React from 'react';

import styles from './styles.scss';

const ContactIcons = () => (
  <div className = {styles.iconBar}>

    <a  rel="noopener noreferrer" href="https://github.com/nsendek" target="_blank">
      <img src="./static/logos/github.png" alt="github profile" width="100%" height="100%" />
    </a>

    <a  rel="noopener noreferrer" href="https://www.linkedin.com/in/nikosendek/" target="_blank">
      <img src="./static/logos/linkedin.png" alt="linkedin profile" width="100%" height="100%"/>
    </a>

    <a rel="noopener noreferrer" href="https://www.facebook.com/niko.sendek" target="_blank">
      <img src="./static/logos/facebook.png" alt="facebook profile"  width="100%" height="100%"/>
    </a>

    <a  rel="noopener noreferrer" href="https://www.instagram.com/nikodmas/" target="_blank">
      <img src="./static/logos/instagram.png" alt= "instagram profile" width="100%" height="100%"/>
    </a>

    <a href="mailto:nsendek@mit.edu" target="_blank">
      <img src="./static/logos/email.png" alt= "my email" width="100%" height="100%"/>
    </a>

  </div>
);



export default ContactIcons;