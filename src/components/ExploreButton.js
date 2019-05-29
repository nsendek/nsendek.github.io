import React, { Component} from 'react';
import './index.css';
import { connect } from 'react-redux';
import { changeTab } from '../actions';


class Explore extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  handleClick = () => {
  this.props.changeTab(this.props.name);
  }

  render() {
    return (
        <div>
          <button className = "fade-in button buttonExplore " onClick={this.handleClick}>
             {this.props.name}
          </button>
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

export default connect(null,mapDispatchToProps)(Explore);
