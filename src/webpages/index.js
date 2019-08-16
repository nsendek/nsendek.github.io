import React, { Component } from 'react';
import HomePage from './HomePage';
import ExplorablePage from './ExplorablePage';
import { connect } from 'react-redux';
import ResumeContent from './ResumeContent';
import AboutMeContent from './AboutMeContent';
import PortfolioContent from './PortfolioContent';

class WebSite extends Component {

componentDidMount(){
  document.body.style.backgroundColor = "black";
}

renderContent = () => {
  switch (this.props.tab) {
    case "HOME":
      return (
        <HomePage/>
      );
    case "RESUME":
       return (
         <ExplorablePage
         content = {<ResumeContent />}
         />
      );
    case "ABOUT ME":
      return (
        <ExplorablePage
        content = {<AboutMeContent />}
        />
      );

    case "PORTFOLIO":
      return (
        <ExplorablePage
        content = {<PortfolioContent />}
        />
      );
    default: return (
      <ExplorablePage content = {null} />
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
