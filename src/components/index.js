import React, { Component } from 'react';
import Homepage from './Homepage';
import { connect } from 'react-redux';

class WebSite extends Component {


componentWillMount(){
  document.body.style.backgroundColor = "black";
}

  render() {
    var tab = this.props.tab;
    return (
      this.props.tab === "HOMEPAGE"
      ?   <Homepage/>
      :   null
    );
  }
}

const mapStateToProps = state => {
  return {
    tab: state.tab
  }
}
export default connect(mapStateToProps)(WebSite);
