import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../actions';
import './styles/ExplorePage.css';
import ExploreButton from './ExploreButton.js';
import ContactContent from './ContactContent';
import SideBar from './SideBar';
import menu from './resources/menu-icon.png';

const MOBILE_SCREEN_WIDTH = 700;

class SmartSideBar extends Component {
  // responsive SideBar that changes and expands (animated) based on screen size.
  constructor(props) {
    super(props);
    this.state = {
      mobile : false,
      showSideBar : true
    }
  }

  updateDimensions = () => {
    if (window.innerWidth > MOBILE_SCREEN_WIDTH) { //going to desktop mode
      if (this.state.mobile) { // not already desktop
        this.setState({
          mobile : false,
          showSideBar: true}
        );
      }
    } else { //going to mobile mode
      if (!this.state.mobile) { //not already mobile
        this.setState({
          windowWidth: window.innerWidth,
          mobile: true,
          showSideBar: false
        });
      }
    }
  }

  handleClick = () => {
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
    return (
      <div>
          {
            this.state.mobile // in mobile mode
            ? this.state.showSideBar
              ? <SideBar />   //<SideBar  entry = {true} />
              :  null // <SideBar exit true = {false} />

            : <SideBar />

          }
          {
            this.state.mobile
            ?
            <div className = "menu-icon" onClick= {this.handleClick}>
            <img src={menu} width="100%" height="100%"/>
            </div>
            :
            null
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
