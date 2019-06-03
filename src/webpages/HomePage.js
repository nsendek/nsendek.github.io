import React, { Component} from 'react';
import './styles/HomePage.css';
import ExploreButton from './ExploreButton.js'
import ContactIcons from './ContactIcons';

class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className = "home page" align = "center">
      <h1 className="Homepage-Header fade-in">
          Nikodimos Z. Sendek
        <p className="Homepage-Sub">
          Artist - Programmer - Creative
        </p>
      </h1>
      <ExploreButton className = "fade-in HomePage-button"
      name = "ABOUT ME" tD= {2500}/>

      <ExploreButton className = "fade-in HomePage-button"
       name = "PORTFOLIO" tD= {3000}/>

      <ExploreButton className = "fade-in HomePage-button"
      name = "RESUME" tD= {4000}/>

      <span> <ContactIcons /> </span>
    </div>
    );
  }
}


export default HomePage;
