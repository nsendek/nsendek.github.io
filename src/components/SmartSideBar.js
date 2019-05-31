import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../actions';
import './ExplorePage.css';
import ExploreButton from './ExploreButton.js';
import ContactContent from './ContactContent';
import SideBar from './SideBar';
import menu from './resources/menu-icon.png'

class SmartSideBar extends Component {
  // responsive SideBar
  constructor(props) {
    super(props);
    this.state = {
      windowWidth : null,
      mobile : false,
      showSideBar : true
    }
  }

  updateDimensions = () => {
    if (window.innerWidth > 700) { // going to desktop mode
      this.setState({
        windowWidth: window.innerWidth,
        mobile : false,
        showSideBar: true}
      );
    } else { // going to mobile mode

      if (this.state.mobile) { //already mobile
        this.setState({
          windowWidth: window.innerWidth,
        });
      } else {
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
            this.state.showSideBar
            ? <SideBar/>
            : null
          }
          {
            this.state.mobile
            ?
            <div className = "menu-icon" onClick= {this.handleClick}>
            <img src={menu} width="50px" height="50px"/>
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
