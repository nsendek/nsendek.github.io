import React, { Component} from 'react';
import './styles/HomePage.css';
import './styles/parallax.css';
import ExploreButton from './ExploreButton.js'
import ContactIcons from './ContactIcons';

class HomePage extends Component {

  render() {
    return (
      <div className = "home page" align = "center">
      <h1 className="homepage-header fade-in">
          Nikodimos Z. Sendek
        <p className="homepage-sub">
          Artist • Programmer • Creative
        </p>
      </h1>
      <ExploreButton className = "fade-in homepage-button"
      name = "ABOUT ME" tD= {2500}/>

      <ExploreButton className = "fade-in homepage-button"
       name = "PORTFOLIO" tD= {3000}/>

      <ExploreButton className = "fade-in homepage-button"
      name = "RESUME" tD= {4000}/>

      <span> <ContactIcons /> </span>
    </div>
    );
  }
}


export default HomePage;
