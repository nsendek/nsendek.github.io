import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../actions';
import './styles/ExplorePage.css';
import './styles/SideBar.css';
import ExploreButton from './ExploreButton.js';
import ContactIcons from './ContactIcons';

class SideBar extends Component {

  render() {
     var entry = "";
     var entryDesk = "";
     var exit = "";
     var exitDesk = "";
     if (this.props.entry) {
       entry = "slide-in";
     } else if (this.props.exit) {
       exit = "slide-out";
     } else if (this.props.entryDesk) {
       entryDesk = "slide-in-desk"
     } else if (this.props.exitDesk) {
       exitDesk = "slide-out-desk"
     }

    return (
      <div className={`sidebar ${entry} ${exit} ${entryDesk} ${exitDesk}`}  align = "center">
        <a> <ExploreButton className = "explore-button" name= "HOME" /> </a>

        <a> <ExploreButton className = "explore-button" name= "ABOUT ME" /> </a>
        <a> <ExploreButton className = "explore-button" name= "PORTFOLIO" /> </a>
        <a> <ExploreButton className = "explore-button" name= "RESUME" /> </a>

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
