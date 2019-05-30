import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../actions';
import './ExplorePage.css';
import ExploreButton from './ExploreButton.js';
import ContactContent from './ContactContent';

class SideBar extends Component {

  render() {
    return (
      <div className="sidebar" align = "center">
        <a className="SideBar-Header return" onClick = {() => {this.props.changeTab("HOMEPAGE")}}>
              Niko Sendek
        </a>

        <a> <ExploreButton name = "ABOUT ME" tD= {2500} /> </a>
        <a> <ExploreButton name = "PORTFOLIO" tD= {3000}/> </a>
        <a> <ExploreButton name = "RESUME" tD= {4000}/> </a>

        <a> <span> <ContactContent /> </span> </a>



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

export default connect(null,mapDispatchToProps)(SideBar);
