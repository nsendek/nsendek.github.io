import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../actions';
import './styles/ExplorePage.css';
import SideBar from './SideBar';
import menu from './resources/menu-icon.png';

const MOBILE_SCREEN_WIDTH = 700;

class SmartSideBar extends Component {
  // responsive SideBar that changes and expands (animated) based on screen size.
  constructor(props) {
    super(props);
    this.state = {
      mobile : false,
      showSideBar : true,
      unmountingMobile : false
    }
  }

  updateDimensions = () => {
    if (window.innerWidth > MOBILE_SCREEN_WIDTH) { //going to desktop mode
      if (this.state.mobile) { // not already desktop
        this.setState({
          mobile : false,
          showSideBar: true,}
        );
      }
    } else { //going to mobile mode
      if (!this.state.mobile) { //not already mobile
        this.setState({
          windowWidth: window.innerWidth,
          mobile: true,
          showSideBar: false,
          unmountingMobile : false
        });
      }
    }
  }

  handleClickMobile = () => {
    if (this.state.showSideBar) {
      this.setState({unmountingMobile : true});
    }
    this.setState({showSideBar : !this.state.showSideBar});
  }

  handleClickDesktop = () => {
    if (this.state.showSideBar) {
      this.setState({unmountingMobile : true});
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
    return (
      <div>
          {
            this.state.mobile // in mobile mode
            ? this.state.showSideBar
              ? <SideBar  entry = {true} />
              : this.state.unmountingMobile
                ? <SideBar exit = {true} />
                : null

            : <SideBar />

          }
          {
            this.state.mobile
            ?
            <div className = "content menu-icon gray" >
            <img src={menu}
            alt= "Menu Icon"
            onClick= {this.handleClickMobile}
            width="50px"
            height="50px"/>
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
