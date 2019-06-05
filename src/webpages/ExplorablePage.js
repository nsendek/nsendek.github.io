import React, { Component} from 'react';
import SmartSideBar from './SmartSideBar';
import './styles/ExplorePage.css';
import ResumeContent from './ResumeContent';
import AboutMeContent from './AboutMeContent';
import ContentContainer from './ContentContainer';
import { connect } from 'react-redux';

const MOBILE_SCREEN_WIDTH = 700;

class ExplorePage extends Component {
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

  renderContent = () => {
    switch (this.props.tab) {
      case "RESUME":
         return (
           <ContentContainer
           state = {this.state}
           content = {<ResumeContent />}
           />
        );
      case "ABOUT ME":
        return (
          <ContentContainer
          state = {this.state}
          content = {<AboutMeContent />}
          />
        );
      default: return (
        <ContentContainer
        state = {this.state}
        content = {null}
        />
      )

    }
  }

  render() {
    return (
      <div className = "explore page">
        <SmartSideBar
        state = {this.state}
        handleClick = {this.handleClick}
        />
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tab: state.tab
  }
}

export default connect(mapStateToProps)(ExplorePage);
