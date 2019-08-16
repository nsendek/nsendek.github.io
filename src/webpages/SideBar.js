import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../actions';
import './styles/ExplorePage.css';
import './styles/SideBar.css';
import ContactIcons from './ContactIcons';

class SideBar extends Component {

  render() {
     var slideClass = "";
     if (this.props.entry) {
       slideClass += "slide-in ";
     } else if (this.props.exit) {
       slideClass += "slide-out ";
     } else if (this.props.entryDesk) {
       slideClass += "slide-in-desk "
     } else if (this.props.exitDesk) {
       slideClass += "slide-out-desk "
     }

    return (
      <div className={`sidebar ${slideClass}`}  align = "center">
        <div className='item'>
          <button
          className = "explore-button"
          onClick={() => {this.props.changeTab("HOME");}}>
             HOME
          </button>
        </div>
        <div className='item'>
          <button
          className = "explore-button"
          onClick={() => {this.props.changeTab("ABOUT ME");}}>
             ABOUT ME
          </button>
        </div>
        <div className='item'>
          <button
          className = "explore-button"
          onClick={() => {this.props.changeTab("PORTFOLIO");}}>
             PORTFOLIO
          </button>
        </div>
        <div className='item'>
          <button
          className = "explore-button"
          onClick={() => {this.props.changeTab("RESUME");}}>
             RESUME
          </button>
        </div>
        <div className='ab'> <span> <ContactIcons /> </span> </div>
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
