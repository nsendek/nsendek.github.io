import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../actions';
import './styles/sidebar.css';
import ContactIcons from './ContactIcons';
import menu from './resources/menu-icon.png';

const MOBILE_SCREEN_WIDTH = 700;

class SmartSidebar extends Component {
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
    var menuClassName = "icon menu-icon ";
    var sidebarClassName = "sidebar ";
    var renderSidebar = true;

    if (this.state.showSideBar) {
      menuClassName += "icon-slide-in";
      sidebarClassName += "sidebar-slide-in";
    } else if (this.state.unmounting) {
      menuClassName += "icon-slide-out";
      sidebarClassName += "sidebar-slide-out";
    } else {
      renderSidebar = false;
    }
    return (

      <div>
          {
           renderSidebar
              ?
              <div className={sidebarClassName}  align = "center">
                <div className='item'>
                  <button
                  onClick={() => {this.props.changeTab("HOME");}}>
                     HOME
                  </button>
                </div>
                <div className='item'>
                  <button
                  onClick={() => {this.props.changeTab("ABOUT ME");}}>
                     ABOUT ME
                  </button>
                </div>
                <div className='item'>
                  <button
                  onClick={() => {this.props.changeTab("PORTFOLIO");}}>
                     PORTFOLIO
                  </button>
                </div>
                <div className='item'>
                  <button
                  onClick={() => {this.props.changeTab("RESUME");}}>
                     RESUME
                  </button>
                </div>
                <div className='item'> <span> <ContactIcons /> </span> </div>
              </div>
              :
              null
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

export default connect(null,mapDispatchToProps)(SmartSidebar);
