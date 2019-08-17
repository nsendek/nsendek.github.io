import React, { Component} from 'react';
import SmartSidebar from './SmartSidebar';
import ContentContainer from './ContentContainer';

import './styles/explore_page.css';

class ExplorablePage extends Component {
  render() {
    return (
      <div className = "explore page">
        <SmartSidebar />
        <ContentContainer
        title = {this.props.title}
        content = {this.props.content}
        />
      </div>
    );
  }
}

export default ExplorablePage;
