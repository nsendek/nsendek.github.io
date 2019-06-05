import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../actions';
import './styles/ExplorePage.css';
import './styles/SideBar.css';
import SideBar from './SideBar';
import menu from './resources/menu-icon.png';

class SmartSideBar extends Component {
  // responsive SideBar that changes and expands (animated) based on screen size.
  // information passed down from the explorablePage parent is used

  render() {

    var menuClassName = "icon ";
    if (this.props.state.mobile) { //mobile menu icon styles
      menuClassName += "mobile-menu-icon ";
    } else { //desktop menu icon styles
      menuClassName += "desktop-menu-icon ";
      if (this.props.state.showSideBar) {
        menuClassName += "menu-icon-slide-in ";
      } else if (this.props.state.unmounting) {
        menuClassName += "menu-icon-slide-out ";
      }
    }

    return (
      <div>
          {
            this.props.state.mobile // in mobile mode
            ? this.props.state.showSideBar
              ? <SideBar  entry = {true} />
              : this.props.state.unmounting
                ? <SideBar exit = {true} />
                : null

            : this.props.state.showSideBar
              ? <SideBar entryDesk = {true}/>
              : this.props.state.unmounting
                ? <SideBar exitDesk = {true} />
                : null

          }
          {

            <div className = {menuClassName} >
            <img src={menu}
            alt= "Menu Icon"
            onClick= {this.props.handleClick}
            width="50px"
            height="50px"/>
            </div>

          }
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

export default connect(null,mapDispatchToProps)(SmartSideBar);
