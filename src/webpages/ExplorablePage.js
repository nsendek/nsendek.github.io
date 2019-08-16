import React, { Component} from 'react';
import SmartSideBar from './SmartSideBar';
import './styles/ExplorePage.css';
import ContentContainer from './ContentContainer';

class ExplorablePage extends Component {
  render() {
    return (
      <div className = "explore page">
        <SmartSideBar />
        <ContentContainer
        title = {this.props.title}
        content = {this.props.content}
        />
      </div>
    );
  }
}

export default ExplorablePage;
