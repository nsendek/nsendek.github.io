import React, { Component} from 'react';
import SideBar from './SideBar';
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
      case "CONTACT":
         return (
           <ContactContent />
         );
      case "RESUME":
         return (
           <ResumeContent />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className = "explore">
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
