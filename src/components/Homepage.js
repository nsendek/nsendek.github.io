import React, { Component} from 'react';
import './HomePage.css';
import ExploreButton from './HomePageButton.js'

class HomePage extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  handleClick = () => {
    console.log(this.props.tab);
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
      <ExploreButton name = "ABOUT ME" tD= {2500}/>
      <ExploreButton name = "PORTFOLIO" tD= {3000}/>
      <ExploreButton name = "CONTACT" tD= {3500}/>
      <ExploreButton name = "RESUME" tD= {4000}/>
    </div>
    );
  }
}


export default HomePage;
