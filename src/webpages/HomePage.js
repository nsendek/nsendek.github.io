import React, { Component} from 'react';
import ContactIcons from './ContactIcons';
import { connect } from 'react-redux';
import { changeTab } from '../actions';

import './styles/home_page.css';

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
      <div>
        <button
        className = "fade-in homepage-button"
        onClick={() => {this.props.changeTab("ABOUT ME");}}>
           ABOUT ME
        </button>
      </div>
      <div>
        <button
        className = "fade-in homepage-button"
        onClick={() => {this.props.changeTab("PORTFOLIO");}}>
           PORTFOLIO
        </button>
      </div>
      <div>
        <button
        className = "fade-in homepage-button"
        onClick={() => {this.props.changeTab("RESUME");}}>
           RESUME
        </button>
      </div>
      <span> <ContactIcons /> </span>
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: id => {
      dispatch(changeTab(id));
    }
  }
}

export default connect(null,mapDispatchToProps)(HomePage);
