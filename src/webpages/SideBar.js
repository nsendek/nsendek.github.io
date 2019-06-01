import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../actions';
import './styles/ExplorePage.css';
import ExploreButton from './ExploreButton.js';
import ContactContent from './ContactContent';

class SideBar extends Component {

  render() {
     var entry = "";
     if (this.props.entry) {
       entry = "slide-in";
     }

    return (
      <div className={`sidebar ${entry}`}  align = "center">
        <a className="SideBar-Header return" onClick = {() => {this.props.changeTab("HOMEPAGE")}}>
              Niko Sendek
        </a>

        <a> <ExploreButton name= "ABOUT ME" /> </a>
        <a> <ExploreButton name= "PORTFOLIO" /> </a>
        <a> <ExploreButton name= "RESUME" /> </a>

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
