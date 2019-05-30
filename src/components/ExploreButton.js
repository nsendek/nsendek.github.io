import React, { Component} from 'react';

import { connect } from 'react-redux';
import { changeTab } from '../actions';


class ExploreButton extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  handleClick = () => {
  this.props.changeTab(this.props.name);
  }
//className = "fade-in button buttonExplore "
  render() {
    return (
        <div>
          <button  onClick={this.handleClick}>
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

export default connect(null,mapDispatchToProps)(ExploreButton);
