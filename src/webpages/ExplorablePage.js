import React, { Component} from 'react';
import SmartSidebar from './SmartSidebar';
import ContentContainer from './ContentContainer';

import './styles/explore_page.css';

class ExplorablePage extends Component {

  sidebarChange = (className) => {
    if (className.includes('sidebar-slide-in')) {
      console.log("SLIDE IN");
    }
    if (className.includes('sidebar-slide-out')) {
      console.log("SLIDE OUT");
    }
  }

  render() {
    return (
      <div className = "explore page">
        <SmartSidebar
        onSidebarChange = {this.sidebarChange}
        />
        <ContentContainer
        title = {this.props.title}
        content = {this.props.content}
        />
      </div>
    );
  }
}

export default ExplorablePage;
