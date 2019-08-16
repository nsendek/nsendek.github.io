import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../actions';
import './styles/ExplorePage.css';
import './styles/SideBar.css';
import SideBar from './SideBar';
import menu from './resources/menu-icon.png';

const MOBILE_SCREEN_WIDTH = 700;

class SmartSideBar extends Component {
  // responsive SideBar that changes and expands (animated) based on screen size.
  // information passed down from the explorablePage parent is used
  constructor(props) {
    super(props);
    this.state = {
      mobile : false,
      showSideBar : false,
      unmounting : false
    }
  }

  updateDimensions = () => {
    if (window.innerWidth > MOBILE_SCREEN_WIDTH) { //going to desktop mode
      if (this.state.mobile) { // not already desktop
        this.setState({
          mobile : false,
          showSideBar: false,
          unmounting : false
        }
        );
      }
    } else { //going to mobile mode
      if (!this.state.mobile) { //not already mobile
        this.setState({
          windowWidth: window.innerWidth,
          mobile: true,
          showSideBar: false,
          unmounting : false
        });
      }
    }
  }

  handleClick = () => {
    if (this.state.showSideBar) {
      this.setState({unmounting : true});
    }
    this.setState({showSideBar : !this.state.showSideBar});
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    //TODO: organize the code in this area (css names)
    var menuClassName = "icon menu-icon ";
    if (this.state.mobile) { //mobile menu icon styles
      if (this.state.showSideBar) {
        menuClassName += "mobile-slide-in ";
      } else if (this.state.unmounting) {
        menuClassName += "mobile-slide-out ";
      }
    } else { //desktop menu icon styles
      if (this.state.showSideBar) {
        menuClassName += "desktop-slide-in";
      } else if (this.state.unmounting) {
        menuClassName += "desktop-slide-out";
      }
    }

    return (
      <div>
          {
            this.state.mobile // in mobile mode
            ? this.state.showSideBar
              ? <SideBar  entry = {true} />
              : this.state.unmounting
                ? <SideBar exit = {true} />
                : null

            : this.state.showSideBar
              ? <SideBar entryDesk = {true}/>
              : this.state.unmounting
                ? <SideBar exitDesk = {true} />
                : null
          }
          {
            <div className = {menuClassName} >
            <img src={menu}
            alt= "Menu Icon"
            onClick= {this.handleClick}
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
