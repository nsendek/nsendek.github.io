import React, { Component } from 'react';
import HomePage from './HomePage';
import ExplorablePage from './ExplorablePage';
import { connect } from 'react-redux';
import ResumeContent from './ResumeContent';
import AboutMeContent from './AboutMeContent';
import PortfolioContent from './PortfolioContent';

class WebSite extends Component {

renderContent = () => {
  switch (this.props.tab) {
    case "HOME":
      return (
        <HomePage/>
      );
    case "RESUME":
       return (
         <ExplorablePage
         title = "Resume"
         content = {<ResumeContent />}
         />
      );
    case "ABOUT ME":
      return (
        <ExplorablePage
        title = "About Me"
        content = {<AboutMeContent />}
        />
      );

    case "PORTFOLIO":
      return (
        <ExplorablePage
        title = "Portfolio"
        content = {<PortfolioContent />}
        />
      );
    default: return (
      <ExplorablePage />
    )

  }
}

  render() {
    return (
        this.renderContent()
    );
  }
}

const mapStateToProps = state => {
  return {
    tab: state.tab
  }
}
export default connect(mapStateToProps)(WebSite);
