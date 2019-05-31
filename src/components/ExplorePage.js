import React, { Component} from 'react';
import SmartSideBar from './SmartSideBar';
import './ExplorePage.css';
import ContactContent from './ContactContent';
import ResumeContent from './ResumeContent';
import AboutMeContent from './AboutMeContent';
import { connect } from 'react-redux';


class ExplorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  renderContent = () => {
    switch (this.props.tab) {
      case "RESUME":
         return (
           <ResumeContent />
        );
      case "ABOUT ME":
        return (
          <AboutMeContent />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className = "explore page">
        <SmartSideBar/>
        <div className = "content" align = "center" height="100%">
        {this.renderContent()}
        </div>
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
