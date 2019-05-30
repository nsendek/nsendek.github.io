import React, { Component} from 'react';
import SideBar from './SideBar';
import './ExplorePage.css';
import ContactContent from './ContactContent';
import ResumeContent from './ResumeContent';
import { connect } from 'react-redux';

class ExplorePage extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  handleClick = () => {
    console.log(this.props.tab);
  }

  renderContent = () => {
    switch (this.props.tab) {
      case "RESUME":
         return (
           <ResumeContent />
        );
      case "PORTFOLIO":
        return (
          null
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className = "explore page">
        <SideBar/>
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
