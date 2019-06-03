import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../actions';
import './styles/ExplorePage.css';
import ExploreButton from './ExploreButton.js';
import ContactIcons from './ContactIcons';

class SideBar extends Component {

  render() {
     var entry = "";
     var entryDesk = "";
     var exit = "";
     if (this.props.entry) {
       entry = "slide-in";
     } else if (this.props.exit) {
       exit = "slide-out";
     } else if (this.props.entryDesk) {
       entryDesk = "slide-in-desk"
     }

    return (
      <div className={`sidebar ${entry}${exit}${entryDesk}`}  align = "center">
        <a className="SideBar-Header return" onClick = {() => {this.props.changeTab("HOMEPAGE")}}>
              Niko Sendek
        </a>

        <a> <ExploreButton className = "Explore-button" name= "ABOUT ME" /> </a>
        <a> <ExploreButton className = "Explore-button" name= "PORTFOLIO" /> </a>
        <a> <ExploreButton className = "Explore-button" name= "RESUME" /> </a>
        
        <a> <span> <ContactIcons /> </span> </a>

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
