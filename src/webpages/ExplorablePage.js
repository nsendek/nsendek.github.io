import React, { Component} from 'react';
import SmartSidebar from './SmartSidebar';
import ContentContainer from './ContentContainer';

import './styles/explore_page.css';

class ExplorablePage extends Component {

  sidebarChange = (className) => {
    console.log(className);
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
