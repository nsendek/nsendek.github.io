import React, { Component} from 'react';
import SmartSideBar from './SmartSideBar';
import './styles/ExplorePage.css';
import ContentContainer from './ContentContainer';

const MOBILE_SCREEN_WIDTH = 700;

class ExplorablePage extends Component {
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
    return (
      <div className = "explore page">
        <SmartSideBar
        state = {this.state}
        menuClick = {this.handleClick}
        />
        <ContentContainer
        state = {this.state}
        content = {this.props.content}
        />
      </div>
    );
  }
}

export default ExplorablePage;
