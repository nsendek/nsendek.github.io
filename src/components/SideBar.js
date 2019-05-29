import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../actions';
import ExploreButton from './ExploreButton.js'

class SideBar extends Component {

  render() {
    return (
      <div className="page sidebar" align = "center">
        <p className="Homepage-Header return" onClick = {() => {this.props.changeTab("HOMEPAGE")}}>
            Niko Sendek
        </p>
        <a> <ExploreButton name = "ABOUT ME" tD= {2500} /> </a>

        <a> <ExploreButton name = "PORTFOLIO" tD= {3000}/> </a>

        <a> <ExploreButton name = "CONTACT" tD= {3500}/> </a>

        <a> <ExploreButton name = "RESUME" tD= {4000}/> </a>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: id => {
      dispatch(changeTab(id));
    }
  }
}

export default connect(null,mapDispatchToProps)(SideBar);
