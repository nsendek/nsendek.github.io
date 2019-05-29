import React, { Component} from 'react';
import Explore from './ExploreButton.js'
import './index.css';


class Homepage extends Component {
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
      <Explore name = "ABOUT ME" tD= {2500}/>
      <Explore name = "PORTFOLIO" tD= {3000}/>
      <Explore name = "CONTACT" tD= {3500}/>
      <Explore name = "RESUME" tD= {4000}/>
    </div>
    );
  }
}


export default Homepage;
