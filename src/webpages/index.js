import React, { Component } from 'react';
import HomePage from './HomePage';
import ExplorePage from './ExplorablePage';
import { connect } from 'react-redux';
import ResumeContent from './ResumeContent';
import AboutMeContent from './AboutMeContent';
import PortfolioContent from './PortfolioContent';

class WebSite extends Component {

componentDidMount(){
  document.body.style.backgroundColor = "black";
//   var parallax = document.querySelectorAll("body"),
//     speed = 0.5;
//
//     window.onscroll = function(){
//   [].slice.call(parallax).forEach(function(el,i){
//
//     var windowYOffset = window.pageYOffset,
//         elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
//
//     el.style.backgroundPosition = elBackgrounPos;
//
//   });
// };
}

renderContent = () => {
  switch (this.props.tab) {
    case "HOME":
      return (
        <HomePage/>
      )
    case "RESUME":
       return (
         <ExplorePage
         content = {<ResumeContent />}
         />
      );
    case "ABOUT ME":
      return (
        <ExplorePage
        content = {<AboutMeContent />}
        />
      );

    case "PORTFOLIO":
      return (
        <ExplorePage
        content = {<PortfolioContent />}
        />
      );
    default: return (
      <ExplorePage content = {null} />

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
