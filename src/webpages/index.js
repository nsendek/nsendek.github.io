import React, { Component } from 'react';
import HomePage from './HomePage';
import ExplorePage from './ExplorablePage';
import { connect } from 'react-redux';

class WebSite extends Component {

componentWillMount(){
  document.body.style.backgroundColor = "black";
}

  render() {
    return (
      this.props.tab === "HOME"
      ?   <HomePage/>
      :   <ExplorePage/>
    );
  }
}

const mapStateToProps = state => {
  return {
    tab: state.tab
  }
}
export default connect(mapStateToProps)(WebSite);
