import React, { Component } from 'react';
import HomePage from './HomePage';
import ExplorablePage from './ExplorablePage';
import { connect } from 'react-redux';
import ResumeContent from './ResumeContent';
import CodeContent from './CodeContent';
import PortfolioContent from './PortfolioContent';
import { Router, navigate, Redirect } from "@reach/router";

class WebSite extends Component {

renderContent = () => {
  // switch (this.props.tab) {
  //   case "HOME":
  //     return (
  //       null
  //     );
  //   case "RESUME":
  //      return (
  //        <ExplorablePage
  //        title = "Resume"
  //        content = {<ResumeContent />}
  //        />
  //     );
  //   case "ABOUT ME":
  //     return (
  //       <ExplorablePage
  //       title = "About Me"
  //       content = {<AboutMeContent />}
  //       />
  //     );

  //   case "PORTFOLIO":
  //     return (
  //       <ExplorablePage
  //       title = "Portfolio"
  //       content = {<PortfolioContent />}
  //       />
  //     );
  //   default: return (
  //     <ExplorablePage />
  //   )

  // }
}

  render() {
    return (
      <Router> 

           <Redirect from="/youtube" to="//www.youtube.com" />

          
 

        <HomePage
          path = "/"
        />
        <ExplorablePage
        path = '/demos'
        title = "Demos"
        content = {<CodeContent />}
        />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    tab: state.tab
  }
}
export default connect(mapStateToProps)(WebSite);
